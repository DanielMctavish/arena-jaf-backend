import bcrypt from "bcrypt"
import IUserClient from "../../../entities/IUserClient";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie";
import validator from "../../../../security/validations/Joi";
import { userClientSchema } from "../../../../security/validations/schemmas-joi/UserClientSchemma";
import IClientResponses from "../../../../http/res/IClientResponses";

const ClientRepositorie = new PrismaUserClientRepositorie()
const prismaAdm = new PrismaUserAdmRepositorie()

export const createNewClient = async (data: IUserClient): Promise<IClientResponses> => {

    return new Promise(async (resolve, reject) => {
        if (!data) {
            return reject({ status_code: 404, msg: 'empty body' })
        }
        validator(userClientSchema, data)

        try {

            const currentClient = await ClientRepositorie.findByEmail(data.email)
            if (currentClient) return reject({ status_code: 409, body: { msg: 'client já existe' } })
            if (!data.administrator_id) {
                return reject({ status_code: 404, body: { msg: 'administrator_id not sended' } })
            }
            const currentAdministrator = await prismaAdm.find(data.administrator_id)
            if (!currentAdministrator) {
                return reject({ status_code: 404, body: { msg: 'administrator not found' } })
            }
            //bcrypt hash
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(data.senha, salt)
            const createdClient = await ClientRepositorie.create({ ...data, senha: hash })
            const response: IClientResponses = { status_code: 201, body: { msg: 'Cliente criado com sucesso', body: createdClient } }
            resolve(response)

        } catch (error: any) {
            reject({ status_code: 500, body: { msg: error.message } })
        }

    })

}