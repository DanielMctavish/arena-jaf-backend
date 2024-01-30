import { FilePhoto, uploadSingleImage } from "../../../../utils/Firebase/FirebaseOperations"
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie"
import { AdmResponses } from "../../IUserAdm_usecases"
const prismaAdm = new PrismaUserAdmRepositorie()


const firebaseUploadAdmProfile = (admin_id: string, File: FilePhoto): Promise<AdmResponses> => {
    //console.log('dentro da função de upload --> ', File);

    return new Promise(async (resolve, reject) => {

        try {

            if (!File) return reject({ status_code: 404, body: "Nenhum arquivo enviado" })
            if (!admin_id) return reject({ status_code: 403, body: "Nenhum parametro ID foi enviado" })
            const currentAdmin = await prismaAdm.find(admin_id)
            if (!currentAdmin) {
                return reject({ status_code: 404, body: "Usuário não encontrado" })
            }
            if (File.mimetype !== 'image/png'
                && File.mimetype !== 'image/jpg'
                && File.mimetype !== 'image/jpeg') return reject({ status_code: 500, body: "o arquivo precisa ser uma foto" })
            const currentImage = await uploadSingleImage('arena-admin-profile', File)
            await prismaAdm.update(admin_id, { avatar_url: currentImage })
            resolve({ status_code: 201, msg: "Perfil enviado com sucesso", body: { currentImage } })

        } catch (error: any) {
            reject({ status_code: 500, body: error.message })
        }

    })

}

export default firebaseUploadAdmProfile;