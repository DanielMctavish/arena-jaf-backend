import { AdmResponses } from "../../IUserAdm_usecases";
import { ClientResponse } from "../../IUserClient_usecases";

export const listAllSessions = (user_id: string): Promise<ClientResponse> => {




    return new Promise((resolve, reject) => {
        if (!user_id) {
            return reject({ body: { msg: 'ID nulo ou inválido' } })
        }

        const response: ClientResponse = { status_code: 200, msg: 'lista de todos as sessões', body: {} }
        resolve(response);
    })

}