import IUserClient from "../../../entities/IUserClient";
import { ClientResponse } from "../../IUserClient_usecases";

export const createNewClient = (data: IUserClient): Promise<ClientResponse> => {




    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: ClientResponse = { status_code: 200, msg: 'cliente criado com sucesso', body: { data } }
        resolve(response);
    })

}