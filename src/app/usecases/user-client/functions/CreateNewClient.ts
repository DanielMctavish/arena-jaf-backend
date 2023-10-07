import IUserClient from "../../../entities/IUserClient";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import validator from "../../../../security/validations/Joi";
import { userClientSchema } from "../../../../security/validations/schemmas-joi/UserClientSchemma";
import IClientResponses from "../../../../http/res/IClientResponses";

export const createNewClient = async (data: IUserClient): Promise<IClientResponses> => {
    const ClientRepositorie = new PrismaUserClientRepositorie()
    console.log('obs data --> ', data);

    return new Promise(async (resolve, reject) => {
        if (!data) {
            return reject({ status_code: 400, msg: 'empty body' })
        }

        validator(userClientSchema, data)

        try {
            const currentClient = await ClientRepositorie.create(data)
            if (!currentClient) return reject({ status_code: 400, msg: 'erro ao tentar criar cliente', body: currentClient })
            resolve({ status_code: 201, message: currentClient })
        } catch (error: any) {
            reject(error.message)
        }

    })

}