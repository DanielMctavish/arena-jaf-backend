import ISessions from "../../../entities/ISessions";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaSessionRepositorie from "../../../repositories/PrismaRepositories/PrismaSessionRepositorie";

export const createNewSession = async (data: ISessions): Promise<AdmResponses> => {
    const SessionRepositorie = new PrismaSessionRepositorie()
    const currentSession = await SessionRepositorie.create(data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ status_code: 404, msg: 'nenhum data retornado', body: currentSession })
        }

        if(!currentSession)return reject({ status_code: 400, msg: 'erro ao tentar criar sessão', body: currentSession })

        const response: AdmResponses = { status_code: 201, msg: 'sessão criada com sucesso', body: currentSession }
        resolve(response);
    })

}