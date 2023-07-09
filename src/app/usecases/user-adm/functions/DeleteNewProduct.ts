import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaProductRepositorie from "../../../repositories/PrismaRepositories/PrismaProductRepositorie";

export const deleteNewProduct = async (product_id: string): Promise<AdmResponses> => {
    const ProductRepositorie =  new PrismaProductRepositorie()
    const currentProduct = await ProductRepositorie.delete(product_id)

    return new Promise((resolve, reject) => {
        if (!product_id) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }
        
        if(!currentProduct){
            return reject({status_code: 400, msg: 'erro ao tentar deleter o produto', body: currentProduct})
        }

        const response: AdmResponses = { status_code: 200, msg: 'produto deletado com sucesso', body: currentProduct }
        resolve(response);
    })

}