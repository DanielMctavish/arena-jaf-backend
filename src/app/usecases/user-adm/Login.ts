import { AdmResponses } from "../IUserAdm_usecases";

export const login = (email: string, password: string): Promise<AdmResponses> => {




    


    return new Promise((resolve, reject) => {
        if (!email || !password) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'Adm logado com sucesso', body: {} }
        resolve(response);
    })

}