import IProducts from "../../../entities/IProducts";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaProductRepositorie from "../../../repositories/PrismaRepositories/PrismaProductRepositorie";
import validator from "../../../../security/validations/Joi";
import { productSchema } from "../../../../security/validations/schemmas-joi/ProductSchemma";

export const registerNewProduct = async (data: IProducts): Promise<AdmResponses> => {

    const ProductRepositorie = new PrismaProductRepositorie()
    const currentProduct = await ProductRepositorie.create(data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        validator(productSchema, data)

        if (!currentProduct) return reject({ status_code: 400, msg: 'erro ao tentar criar o produto', body: currentProduct })

        const response: AdmResponses = { status_code: 200, msg: 'produto criado com sucesso', body: currentProduct }
        resolve(response);
    })

}