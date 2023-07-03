import IUserClient from "../../entities/IUserClient";
import { AdmResponses } from "../IUserAdm_usecases";

export const createNewClient = (data: IUserClient): Promise<AdmResponses> => {




    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'cliente criada com sucesso', body: {} }
        resolve(response);
    })

}