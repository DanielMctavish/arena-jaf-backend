import IClientResponses from "../../../../http/res/IClientResponses"
import { deleteSingleImage } from "../../../../utils/Firebase/FirebaseOperations"
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie"


const prismaClient = new PrismaUserClientRepositorie()

const firebaseDeleteClientProfile = (params: any): Promise<IClientResponses> => {

    return new Promise(async (resolve, reject) => {

        try {
            if (!params.url) return reject({ status_code: 500, body: "parâmetro url é necessário!" })

            const currentImage = await deleteSingleImage(params.url)
            await prismaClient.update(params.client_id, { avatar_url: "" })

            resolve({ status_code: 200, body: { msg: "client profile deleted", img: currentImage } })
        } catch (error: any) {
            reject({ status_code: 500, body: error.message })
        }

    })

}

export default firebaseDeleteClientProfile;