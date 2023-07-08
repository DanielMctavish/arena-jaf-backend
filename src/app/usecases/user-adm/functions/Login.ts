import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie";

export const login = async (email: string, password: string): Promise<AdmResponses> => {
    const UserAdmRepositorie = new PrismaUserAdmRepositorie()
    const currentAdministrator = await UserAdmRepositorie.findByEmail(email)

    return new Promise((resolve, reject) => {
        if (!email || !password) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        if (currentAdministrator?.email !== email) return reject()
        if (currentAdministrator.senha !== password) return reject()

        const response: AdmResponses = { status_code: 200, msg: 'Adm logado com sucesso', body: currentAdministrator }
        resolve(response);
    })

}