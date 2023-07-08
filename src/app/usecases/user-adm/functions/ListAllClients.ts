import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";

export const listAllClients = (id_adm: string): Promise<AdmResponses> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()
    const currentClient = UserClientRepositorie.findAll(id_adm)

    return new Promise((resolve, reject) => {
        if (!id_adm) {
            return reject({ body: { msg: 'ADM ID nulo ou inválido' } })
        }

        if(!currentClient){
            return reject({status_code: 400, msg: 'erro ao tentar listar clientes.', body: currentClient})
        }

        const response: AdmResponses = { status_code: 200, msg: 'lista de todos os clientes', body: currentClient}
        resolve(response);
    })

}