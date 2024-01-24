import IUserClient from "../../../entities/IUserClient";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import validator from "../../../../security/validations/Joi";
import { userClientSchema } from "../../../../security/validations/schemmas-joi/UserClientSchemma";

export const createNewClient = async (data: IUserClient): Promise<AdmResponses> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()

    return new Promise(async (resolve, reject) => {

        try {
            if (!data) {
                return reject({
                    status_code: 400,
                    msg: "Dados inválidos"
                })
            }

            validator(userClientSchema, data)
            const currentClient = await UserClientRepositorie.create(data)

            if (!currentClient) return reject({ status_code: 401, msg: 'falha ao tentar criar cliente', body: currentClient })

            const response: AdmResponses = { status_code: 200, msg: 'cliente criado com sucesso', body: currentClient }
            resolve(response);
        } catch (error) {
            reject({
                status_code: 500,
                msg: "Erro no servidor"
            })
        }
        
    })

}