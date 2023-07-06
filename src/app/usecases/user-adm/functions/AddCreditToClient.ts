import { AdmResponses } from "../../IUserAdm_usecases"
import ITransaction from "../../../entities/ITransaction";


export const addCreditToClient = (transation: ITransaction): Promise<AdmResponses> => {







    
    return new Promise((resolve, reject) => {

        if (!transation) {
            reject({ status_code: 200, msg: 'crédito adicionado', body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'crédito adicionado', body: {} }
        resolve(response);
    });

}