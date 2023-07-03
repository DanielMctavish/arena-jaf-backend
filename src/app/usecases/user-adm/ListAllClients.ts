import { AdmResponses } from "../IUserAdm_usecases";

export const listAllClients = (id_adm: string): Promise<AdmResponses> => {




    return new Promise((resolve, reject) => {
        if (!id_adm) {
            return reject({ body: { msg: 'ADM ID nulo ou inválido' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'lista de todos os clientes', body: {} }
        resolve(response);
    })

}