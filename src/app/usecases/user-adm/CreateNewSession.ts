import ISessions from "../../entities/ISessions";
import { AdmResponses } from "../IUserAdm_usecases";

export const createNewSession = (data: ISessions): Promise<AdmResponses> => {




    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'sessão criada com sucesso', body: {} }
        resolve(response);
    })

}