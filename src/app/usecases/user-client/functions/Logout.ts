import { ClientResponse } from "../../IUserClient_usecases";

export const logout = (token: string): Promise<ClientResponse> => {




    return new Promise((resolve, reject) => {
        if (!token) {
            return reject({ body: { msg: 'nenhum token retornado' } })
        }

        const response: ClientResponse = { status_code: 200, msg: 'sessão cliente encerrada', body: {} }
        resolve(response);
    })

}