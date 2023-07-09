import IProducts from "../../../entities/IProducts";
import PrismaProductRepositorie from "../../../repositories/PrismaRepositories/PrismaProductRepositorie";
import { ColabResponse } from "../../IUserColab_usecases";

export const updateNewProduct = async (product_id: string, data: IProducts): Promise<ColabResponse> => {

    const ProductRepositorie = new PrismaProductRepositorie()
    const currentProduct = await ProductRepositorie.update(product_id, data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }
        if (!currentProduct) return reject({ status_code: 400, msg: 'erro ao tentar atualizar o produto', body: currentProduct })
        const response: ColabResponse = { status_code: 200, msg: 'produto atualizado com sucesso', body: {} }
        resolve(response);
    })

}