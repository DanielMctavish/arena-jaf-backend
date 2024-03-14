import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaProductRepositorie from "../../../repositories/PrismaRepositories/PrismaProductRepositorie";

export const deleteNewProduct = async (product_id: string): Promise<AdmResponses> => {
    const ProductRepositorie =  new PrismaProductRepositorie()
    

    return new Promise(async (resolve, reject) => {

        try {
            if (!product_id) {
                return reject({
                    status_code: 403,
                    msg: "product_id nulo ou inválido"
                })
            }
            const currentProduct = await ProductRepositorie.delete(product_id)
            const response: AdmResponses = { status_code: 200, msg: 'produto deletado com sucesso', body: currentProduct }
            resolve(response);
        } catch (error) {
            reject({
                status_code: 500,
                msg: "Erro no servidor"
            })
        }

    })

}