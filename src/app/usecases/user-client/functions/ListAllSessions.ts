import PrismaSessionRepositorie from "../../../repositories/PrismaRepositories/PrismaSessionRepositorie";
import IClientResponses from "../../../../http/res/IClientResponses";

export const listAllSessions = async (user_id: string): Promise<IClientResponses> => {
    const SessionRepositorie = new PrismaSessionRepositorie()
    const currentSession = await SessionRepositorie.findAll(user_id)


    return new Promise((resolve, reject) => {
        try {
            if (!user_id) {
                return reject({ status_code: 404, body: { msg: 'ID nulo ou inválido' } })
            }

            if (!currentSession) return reject({ status_code: 400, msg: 'erro ao listar sessões', body: currentSession })

            const response: IClientResponses = { status_code: 200, body: { msg: 'lista de todos as sessões', body: currentSession } }
            resolve(response);
        } catch (error: any) {
            return reject({ status_code: 500, body: { msg: error.message } })
        }
    })

}