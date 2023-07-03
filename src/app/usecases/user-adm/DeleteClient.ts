import { AdmResponses } from "../IUserAdm_usecases";

export const deleteClient = (client_id: string): Promise<AdmResponses> => {




    return new Promise((resolve, reject) => {
        if (!client_id) {
            return reject({ body: { msg: 'client_id nulo ou inválido' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'cliente deletado com sucesso', body: {} }
        resolve(response);
    })

}