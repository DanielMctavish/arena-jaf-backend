import ITransaction from "../../../entities/ITransaction";
import { ClientResponse } from "../../IUserClient_usecases";

export const addCreditToClient = (data: ITransaction): Promise<ClientResponse> => {








    return new Promise((resolve, reject) => {

        if (!data) {
            reject({ status_code: 200, msg: 'crédito adicionado', body: { data } })
        }

        const response: ClientResponse = { status_code: 200, msg: 'crédito adicionado', body: {} }
        resolve(response);
    });
}