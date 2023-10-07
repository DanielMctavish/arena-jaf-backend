import { AdmResponses } from "../../IUserAdm_usecases";

export const logout = (token: string | null): Promise<AdmResponses> => {
    return new Promise((resolve, reject) => {
        if (!token) {
            return reject({ status_code: 404 })
        }

        const response: AdmResponses = { status_code: 200, msg: 'sessão adm encerrada', body: {} }
        resolve(response);
    })

}