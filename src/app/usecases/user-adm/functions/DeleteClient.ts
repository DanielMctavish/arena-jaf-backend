import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";

export const deleteClient = (client_id: string): Promise<AdmResponses> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()

    return new Promise(async (resolve, reject) => {
        try {

            if (!client_id) {
                return reject({
                    status_code: 403,
                    msg: "client_id nulo ou inválido"
                })
            }
            const currentClient = await UserClientRepositorie.delete(client_id)

            const response: AdmResponses = { status_code: 200, msg: 'cliente deletado com sucesso', body: currentClient }
            resolve(response);

        } catch (error) {

            reject({
                status_code: 500,
                msg: "Erro no servidor"
            })

        }
    })

}