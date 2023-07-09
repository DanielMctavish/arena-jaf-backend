import PrismaProductRepositorie from "../../../repositories/PrismaRepositories/PrismaProductRepositorie";
import { ColabResponse } from "../../IUserColab_usecases";

export const deleteNewProduct = async (product_id: string): Promise<ColabResponse> => {
    const ProductRepositorie =  new PrismaProductRepositorie()
    const currentProduct = await ProductRepositorie.delete(product_id)


    return new Promise((resolve, reject) => {
        if (!product_id) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        if(!currentProduct){
            return reject({status_code: 400, msg: 'erro ao tentar deleter o produto', body: currentProduct})
        }

        const response: ColabResponse = { status_code: 200, msg: 'produto deletado com sucesso', body: {} }
        resolve(response);
    })

}