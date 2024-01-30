import { deleteSingleImage } from "../../../../utils/Firebase/FirebaseOperations"
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie"
import { AdmResponses } from "../../IUserAdm_usecases"

const prismaAdmin = new PrismaUserAdmRepositorie()

const firebaseDeleteAdmProfile = (params: any): Promise<AdmResponses> => {

    return new Promise(async (resolve, reject) => {

        try {
            if (!params.url) return reject({ status_code: 500, body: "parâmetro url é necessário!" })

            const currentImage = await deleteSingleImage(params.url)
            await prismaAdmin.update(params.admin_id, { avatar_url: "" })

            resolve({ status_code: 200, msg: "foto adm deletada com sucesso", body: { currentImage } })
        } catch (error: any) {
            reject({ status_code: 500, body: error.message })
        }

    })

}

export default firebaseDeleteAdmProfile;