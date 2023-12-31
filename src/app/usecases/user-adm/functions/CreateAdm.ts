import IUserAdm from "../../../entities/IUserAdm"
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie"
import { AdmResponses } from "../../IUserAdm_usecases"
import * as bcrypt from "bcrypt"

const prismaAdm = new PrismaUserAdmRepositorie()

const createAdm = (data: IUserAdm): Promise<AdmResponses> => {
    console.log('dentro da função!', data);

    return new Promise(async (resolve, reject) => {
        try {
            const salt = await bcrypt.genSalt(12);
            const hash = await bcrypt.hash(process.env.CRYPT_SECRET || '01010101', salt);
            const passwordCrypted = hash

            const currentNewAdm = await prismaAdm.create({ ...data, senha: passwordCrypted })
            resolve({ status_code: 201, msg: 'adm criado com sucesso!', body: currentNewAdm })

        } catch (error: any) {
            reject({ status_code: 500, msg: error.message })
        }
    })

}

export default createAdm