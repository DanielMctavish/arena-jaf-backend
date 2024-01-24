import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";

export const listAllClients = (id_adm: string): Promise<AdmResponses> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()

    return new Promise(async (resolve, reject) => {
        try {
            if (!id_adm) {
                return reject({ body: { msg: 'ADM ID nulo ou inválido' } })
            }
    
            const client_list = UserClientRepositorie.findAll(id_adm)
    
            const response: AdmResponses = { status_code: 200, msg: 'lista de todos os clientes', body: client_list}
            resolve(response);
        } catch (error) {
            reject({
                status_code: 500,
                msg: "Erro no servidor"
            })
        }
    })

}