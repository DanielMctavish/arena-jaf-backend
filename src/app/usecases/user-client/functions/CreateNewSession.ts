import ISessions from "../../../entities/ISessions";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaSessionRepositorie from "../../../repositories/PrismaRepositories/PrismaSessionRepositorie";
import validator from "../../../../security/validations/Joi";
import { sessionSchema } from "../../../../security/validations/schemmas-joi/SessionsSchemma";
import IClientResponses from "../../../../http/res/IClientResponses";

export const createNewSession = async (data: ISessions): Promise<IClientResponses> => {
    const SessionRepositorie = new PrismaSessionRepositorie()
    const currentSession = await SessionRepositorie.create(data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ status_code: 404, msg: 'nenhum data retornado', body: currentSession })
        }

        validator(sessionSchema, data)

        if (!currentSession) return reject({ status_code: 400, message: 'erro ao tentar criar sessão', body: currentSession })

        const response: IClientResponses = { status_code: 201, message: { msg: 'sessão criada com sucesso', body: currentSession } }
        resolve(response);
    })

}