import IClientResponses from "../../../../http/res/IClientResponses";

export const logout = (token: string): Promise<IClientResponses> => {

    return new Promise((resolve, reject) => {
        try {
            if (!token) {
                return reject({ body: { msg: 'nenhum token retornado' } })
            }

            const response: IClientResponses = { status_code: 200, body: { msg: 'sessão cliente encerrada' } }
            resolve(response);
        } catch (error) {

            reject({ status_code: 500, body: error })

        }
    })

}