import { AdmResponses } from "../../IUserAdm_usecases"
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie"

const prismaAdm = new PrismaUserAdmRepositorie()

const getAdminInfo = (adm_id: string): Promise<AdmResponses> => {

    return new Promise(async (resolve, reject) => {

        try {

            const currentAdm = await prismaAdm.find(adm_id)

            if (!currentAdm) {
                return reject({
                    status_code: 404,
                    body:{
                        msg: "Admin not found"
                    }
                })
            }
            return resolve({
                status_code: 200,
                msg: "Admin found",
                body: currentAdm
            })

        } catch (error: any) {

            return reject({
                status_code: 500,
                body: {
                    msg: error.message
                }
            })

        }

    })

}


export default getAdminInfo