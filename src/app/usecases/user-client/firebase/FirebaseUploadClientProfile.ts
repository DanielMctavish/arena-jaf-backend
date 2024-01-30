import { FilePhoto, uploadSingleImage } from "../../../../utils/Firebase/FirebaseOperations"
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie"
import { AdmResponses } from "../../IUserAdm_usecases"
const prismaClient = new PrismaUserClientRepositorie()


const firebaseUploadClientProfile = (client_id: string, File: FilePhoto): Promise<AdmResponses> => {
    //console.log('dentro da função de upload --> ', File);

    return new Promise(async (resolve, reject) => {

        try {

            if (!File) return reject({ status_code: 404, body: "Nenhum arquivo enviado" })
            if (!client_id) return reject({ status_code: 403, body: "Nenhum parametro ID foi enviado" })
            const currentAdvertiser = await prismaClient.find(client_id)
            if (!currentAdvertiser) {
                return reject({ status_code: 404, body: "Usuário não encontrado" })
            }
            if (File.mimetype !== 'image/png'
                && File.mimetype !== 'image/jpg'
                && File.mimetype !== 'image/jpeg') return reject({ status_code: 500, body: "o arquivo precisa ser uma foto" })
            const currentImage = await uploadSingleImage('Arena-client-profile', File)
            await prismaClient.update(client_id, { avatar_url: currentImage })
            resolve({ status_code: 201, msg: "Foto de perfil enviado com sucesso", body: { currentImage } })

        } catch (error: any) {
            reject({ status_code: 500, body: error.message })
        }

    })

}

export default firebaseUploadClientProfile;