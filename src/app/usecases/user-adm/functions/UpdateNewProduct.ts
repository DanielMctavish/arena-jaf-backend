import IProducts from "../../../entities/IProducts";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaProductRepositorie from "../../../repositories/PrismaRepositories/PrismaProductRepositorie";
import validator from "../../../../security/validations/Joi";
import { productSchema } from "../../../../security/validations/schemmas-joi/ProductSchemma";

export const updateNewProduct = async (product_id: string, data: IProducts): Promise<AdmResponses> => {
    const ProductRepositorie = new PrismaProductRepositorie()

    return new Promise(async (resolve, reject) => {
        
        try {
            if (!data) {
                return reject({
                    status_code: 403,
                    msg: "data nulo ou inválido"
                })
            }
            validator(productSchema, data)
            const currentProduct = await ProductRepositorie.update(product_id, data)
            const response: AdmResponses = { status_code: 200, msg: 'produto atualizado com sucesso', body: currentProduct }
            resolve(response);
        } catch (error) {
            reject({
                status_code: 500,
                msg: "Erro no servidor"
            })
        }

    })

}