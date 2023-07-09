import IProducts from "../../../entities/IProducts";
import PrismaProductRepositorie from "../../../repositories/PrismaRepositories/PrismaProductRepositorie";
import { ColabResponse } from "../../IUserColab_usecases";

export const registerNewProduct = async (data: IProducts): Promise<ColabResponse> => {

    const ProductRepositorie = new PrismaProductRepositorie()
    const currentProduct = await ProductRepositorie.create(data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        if (!currentProduct) return reject({ status_code: 400, msg: 'erro ao tentar criar o produto', body: currentProduct })

        const response: ColabResponse = { status_code: 200, msg: 'produto criado com sucesso', body: {} }
        resolve(response);
    })

}