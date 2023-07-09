import IUserClient from "../../../entities/IUserClient";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";

export const updateClient = async (client_id: string, data: IUserClient): Promise<AdmResponses> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()
    const currentClientRepositorie = await UserClientRepositorie.update(client_id, data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }
        
        if (!currentClientRepositorie) return reject({ status_code: 400, msg: 'erro ao tentar atualizar cliente', body: currentClientRepositorie })

        const response: AdmResponses = { status_code: 200, msg: 'cliente atualizado com sucesso', body: currentClientRepositorie }
        resolve(response);
    })

}