import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";

export const deleteClient = (client_id: string): Promise<AdmResponses> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()
    const currentClient = UserClientRepositorie.delete(client_id)

    return new Promise((resolve, reject) => {
        if (!client_id) {
            return reject({ body: { msg: 'client_id nulo ou inválido' } })
        }
        if(!currentClient){
            return reject({status_code: 400, msg: 'ao ao tentar deletar cliente', body: currentClient })
        }

        const response: AdmResponses = { status_code: 200, msg: 'cliente deletado com sucesso', body: currentClient }
        resolve(response);
    })

}