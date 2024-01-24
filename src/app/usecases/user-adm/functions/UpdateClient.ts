import IUserClient from "../../../entities/IUserClient";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import validator from "../../../../security/validations/Joi";
import { userClientSchema } from "../../../../security/validations/schemmas-joi/UserClientSchemma";

export const updateClient = async (client_id: string, data: IUserClient): Promise<AdmResponses> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()


    return new Promise(async (resolve, reject) => {
        try {

            if (!data) {
                return reject({
                    status_code: 403,
                    msg: "data nulo ou inválido"
                })
            }
            const currentClientRepositorie = await UserClientRepositorie.update(client_id, data)
            const response: AdmResponses = { status_code: 200, msg: 'cliente atualizado com sucesso', body: currentClientRepositorie }
            resolve(response);

        } catch (error) {
            reject({
                status_code: 500,
                msg: "Erro no servidor"
            })
        }
    })

}