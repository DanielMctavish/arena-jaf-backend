import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie";
//import { verifyPassword } from "../../../../security/auth/Bcrypt";

export const login = (email: string, password: string): Promise<AdmResponses> => {
    const UserAdmRepositorie = new PrismaUserAdmRepositorie()

    return new Promise(async (resolve, reject) => {
        if (!email || !password) {
            reject({ status_code: 404, msg: 'nenhum campo enviado' })
        }

        try {
            const currentAdministrator = await UserAdmRepositorie.findByEmail(email)

            //verifyPassword()

            resolve({ status_code: 200, msg: 'logado!', body: currentAdministrator })
        } catch (error: any) {
            reject({ status_code: 500, msg: error.message })
        }



    })

}