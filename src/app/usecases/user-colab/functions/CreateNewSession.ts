import validator from "../../../../security/validations/Joi";
import { sessionSchema } from "../../../../security/validations/schemmas-joi/SessionsSchemma";
import ISessions from "../../../entities/ISessions";
import PrismaSessionRepositorie from "../../../repositories/PrismaRepositories/PrismaSessionRepositorie";
import { ColabResponse } from "../../IUserColab_usecases";

export const createNewSession = async (data: ISessions): Promise<ColabResponse> => {

    const SessionRepositorie = new PrismaSessionRepositorie()
    const currentSession = await SessionRepositorie.create(data)


    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        validator(sessionSchema, data)

        if (!currentSession) return reject({ status_code: 400, msg: 'erro ao tentar criar sessão', body: currentSession })

        const response: ColabResponse = { status_code: 200, msg: 'sessão criada com sucesso', body: {} }
        resolve(response);
    })

}