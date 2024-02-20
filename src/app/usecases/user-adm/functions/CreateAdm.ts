import IUserAdm from "../../../entities/IUserAdm"
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie"
import { AdmResponses } from "../../IUserAdm_usecases"
import * as bcrypt from "bcrypt"

const prismaAdm = new PrismaUserAdmRepositorie()

const createAdm = (data: IUserAdm): Promise<AdmResponses> => {
    //console.log('dentro da função!', data);

    return new Promise(async (resolve, reject) => {
        try {
            const currentAdmin = await prismaAdm.findByEmail(data.email)
            if (currentAdmin) return reject({ status_code: 401, body: { msg: 'this admin already existed' } })

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(data.senha, salt)

            const createdNewAdm = await prismaAdm.create({ ...data, senha: hash })
            resolve({ status_code: 201, msg: 'adm criado com sucesso!', body: createdNewAdm })

        } catch (error: any) {
            reject({ status_code: 500, msg: error })
        }
    })

}

export default createAdm