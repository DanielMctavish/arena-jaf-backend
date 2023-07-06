import { ClientResponse } from "../../IUserClient_usecases";

export const login = (email: string, password: string): Promise<ClientResponse> => {



    return new Promise((resolve, reject) => {
        if (!email || !password) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: ClientResponse = { status_code: 200, msg: 'Cliente logado com sucesso', body: {} }
        resolve(response);
    })

}