import { FilePhoto, uploadSingleImage } from "../../../../utils/Firebase/FirebaseOperations"
import PrismaProductRepositorie from "../../../repositories/PrismaRepositories/PrismaProductRepositorie"
import { AdmResponses } from "../../IUserAdm_usecases"
const prismaProduct = new PrismaProductRepositorie()


const firebaseUploadProductCover = ( File: FilePhoto): Promise<AdmResponses> => {
    //console.log('dentro da função de upload --> ', File);

    return new Promise(async (resolve, reject) => {

        try {

            if (!File) return reject({ status_code: 404, body: "Nenhum arquivo enviado" })
            if (File.mimetype !== 'image/png'
                && File.mimetype !== 'image/jpg'
                && File.mimetype !== 'image/jpeg') return reject({ status_code: 500, body: "o arquivo precisa ser uma foto" })
            const currentImage = await uploadSingleImage('product-arena-cover', File) 
            resolve({ status_code: 201, msg: "cover enviado com sucesso", body: { currentImage } })

        } catch (error: any) {
            reject({ status_code: 500, body: error.message })
        }

    })

}

export default firebaseUploadProductCover;