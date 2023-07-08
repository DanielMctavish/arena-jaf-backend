import IUserClient from "../../../entities/IUserClient";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";

export const createNewClient = async (data: IUserClient): Promise<AdmResponses> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()
    const currentClient = UserClientRepositorie.create(data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }
        if (!currentClient) return reject({ status_code: 401, msg: 'falha ao tentar criar cliente', body: currentClient })

        const response: AdmResponses = { status_code: 200, msg: 'cliente criado com sucesso', body: currentClient }
        resolve(response);
    })

}