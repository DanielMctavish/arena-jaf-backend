import IClientResponses from "../../../../http/res/IClientResponses"
import { FilePhoto, uploadSingleImage } from "../../../../utils/Firebase/FirebaseOperations"
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie"
const prismaClient = new PrismaUserClientRepositorie()


const firebaseUploadClientProfile = (File: FilePhoto): Promise<IClientResponses> => {
    //console.log('dentro da função de upload --> ', File);

    return new Promise(async (resolve, reject) => {

        try {

            if (!File) return reject({ status_code: 404, body: "Nenhum arquivo enviado" })
            if (File.mimetype !== 'image/png'
                && File.mimetype !== 'image/jpg'
                && File.mimetype !== 'image/jpeg') return reject({ status_code: 500, body: "o arquivo precisa ser uma foto" })
            const currentImage = await uploadSingleImage('arena-client-profile', File)
            resolve({ status_code: 201, body: { currentImage } })

        } catch (error: any) {
            reject({ status_code: 500, body: error.message })
        }

    })

}

export default firebaseUploadClientProfile;