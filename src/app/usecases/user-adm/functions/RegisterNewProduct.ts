import IProducts from "../../../entities/IProducts";
import { AdmResponses } from "../../IUserAdm_usecases";

export const registerNewProduct = (data: IProducts): Promise<AdmResponses> => {




    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'produto criado com sucesso', body: {} }
        resolve(response);
    })

}