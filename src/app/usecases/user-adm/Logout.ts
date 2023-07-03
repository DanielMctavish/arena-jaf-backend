import { AdmResponses } from "../IUserAdm_usecases";

export const logout = (token: string): Promise<AdmResponses> => {




    return new Promise((resolve, reject) => {
        if (!token) {
            return reject({ body: { msg: 'nenhum token retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'sessão adm encerrada', body: {} }
        resolve(response);
    })

}