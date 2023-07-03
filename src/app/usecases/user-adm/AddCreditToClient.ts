import { AdmResponses } from "../IUserAdm_usecases"

export const addCreditToClient = (value: number): Promise<AdmResponses> => {







    
    return new Promise((resolve, reject) => {

        if (!value) {
            reject({ status_code: 200, msg: 'crédito adicionado', body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'crédito adicionado', body: {} }
        resolve(response);
    });
}