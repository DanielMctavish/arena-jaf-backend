import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaProductRepositorie from "../../../repositories/PrismaRepositories/PrismaProductRepositorie";

export const listProductsByOwner = (owner_id: string): Promise<AdmResponses> => {
    const prismaProduct = new PrismaProductRepositorie()

    return new Promise(async (resolve, reject) => {
        try {
            if (!owner_id) {
                return reject({ body: { msg: 'owner_id necessário' } })
            }

            const product_list = await prismaProduct.findAllByOwner(owner_id)
            const response: AdmResponses = { status_code: 200, msg: 'lista de todos os produtos do owner', body: product_list }
            resolve(response);

        } catch (error: any) {
            reject({
                status_code: 500,
                msg: error.message
            })
        }
    })

}