import { deleteSingleImage } from "../../../../utils/Firebase/FirebaseOperations"
import { AdmResponses, params } from "../../IUserAdm_usecases"


const firebaseDeleteProductCover = (params: params): Promise<AdmResponses> => {

    return new Promise(async (resolve, reject) => {

        try {

            if (!params.url_image) return reject({ status_code: 500, body: "parâmetro url é necessário!" })
            const currentImage = await deleteSingleImage(params.url_image)
            resolve({ status_code: 200, msg: "foto adm deletada com sucesso", body: { currentImage } })

        } catch (error: any) {
            reject({ status_code: 500, body: error.message })
        }

    })

}

export default firebaseDeleteProductCover;