import ISessions from "../../../entities/ISessions";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaSessionRepositorie from "../../../repositories/PrismaRepositories/PrismaSessionRepositorie";

export const createNewSession = (data: ISessions): Promise<AdmResponses> => {

    const SessionRepositorie = new PrismaSessionRepositorie()
    const currentSession = SessionRepositorie.create(data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        if (!currentSession) {
            return reject({ status_code: 400, msg: 'erro ao tentar criar a sessão', body: currentSession })
        }


        const response: AdmResponses = { status_code: 201, msg: 'sessão criada com sucesso', body: currentSession }
        resolve(response);
    })

}