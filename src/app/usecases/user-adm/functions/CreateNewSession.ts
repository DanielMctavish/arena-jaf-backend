import ISessions from "../../../entities/ISessions";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaSessionRepositorie from "../../../repositories/PrismaRepositories/PrismaSessionRepositorie";
// import validator from "../../../../security/validations/Joi";
// import { sessionSchema } from "../../../../security/validations/schemmas-joi/SessionsSchemma";

export const createNewSession = (data: ISessions): Promise<AdmResponses> => {

    const SessionRepositorie = new PrismaSessionRepositorie()

    return new Promise(async (resolve, reject) => {

        try {
            if (!data) {
                return reject({
                    status_code: 400,
                    msg: "Dados inválidos"
                })
            }
            const currentSession = await SessionRepositorie.create(data)

            if (!currentSession) {
                return reject({ status_code: 400, msg: 'erro ao tentar criar a sessão', body: currentSession })
            }


            const response: AdmResponses = { status_code: 201, msg: 'sessão criada com sucesso', body: currentSession }
            resolve(response);
        } catch (error) {
            reject({
                status_code: 500,
                msg: "Erro no servidor"
            })
        }
        
    })

}