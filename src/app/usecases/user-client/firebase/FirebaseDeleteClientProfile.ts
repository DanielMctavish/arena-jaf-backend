import IClientResponses from "../../../../http/res/IClientResponses"
import { deleteSingleImage } from "../../../../utils/Firebase/FirebaseOperations"

const firebaseDeleteClientProfile = (url_image: string): Promise<IClientResponses> => {

    return new Promise(async (resolve, reject) => {

        try {

            if (!url_image) return reject({ status_code: 500, body: "parâmetro url é necessário!" })
            const currentImage = await deleteSingleImage(url_image)
            resolve({ status_code: 200, body: { currentImage } })

        } catch (error: any) {
            reject({ status_code: 500, body: error.message })
        }

    })

}

export default firebaseDeleteClientProfile;