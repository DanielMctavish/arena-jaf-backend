import bcrypt from "bcrypt"
import IUserClient from "../../../entities/IUserClient";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import validator from "../../../../security/validations/Joi";
import { userClientSchema } from "../../../../security/validations/schemmas-joi/UserClientSchemma";
import IClientResponses from "../../../../http/res/IClientResponses";

const ClientRepositorie = new PrismaUserClientRepositorie()

export const createNewClient = async (data: IUserClient): Promise<IClientResponses> => {

    return new Promise(async (resolve, reject) => {
        if (!data) {
            return reject({ status_code: 404, msg: 'empty body' })
        }

        validator(userClientSchema, data)

        try {

            //bcrypt hash
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(data.senha, salt)

            const currentClient = await ClientRepositorie.create({ ...data, senha: hash })

            const response: IClientResponses = { status_code: 200, body: { msg: 'Cliente criado com sucesso', body: currentClient } }

            resolve(response)
        } catch (error: any) {
            reject(error.message)
        }

    })

}