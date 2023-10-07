import IClientResponses from "../../../../http/res/IClientResponses";

export const logout = (token: string): Promise<IClientResponses> => {

    return new Promise((resolve, reject) => {
        if (!token) {
            return reject({ body: { msg: 'nenhum token retornado' } })
        }

        const response: IClientResponses = { status_code: 200, message: { msg: 'sessão cliente encerrada' } }
        resolve(response);
    })

}