import { AdmResponses } from "../IUserAdm_usecases";

export const deleteNewProduct = (product_id: string): Promise<AdmResponses> => {




    return new Promise((resolve, reject) => {
        if (!product_id) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'produto deletado com sucesso', body: {} }
        resolve(response);
    })

}