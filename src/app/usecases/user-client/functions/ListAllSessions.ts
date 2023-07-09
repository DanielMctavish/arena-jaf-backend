import { ClientResponse } from "../../IUserClient_usecases";
import PrismaSessionRepositorie from "../../../repositories/PrismaRepositories/PrismaSessionRepositorie";

export const listAllSessions = async (user_id: string): Promise<ClientResponse> => {
    const SessionRepositorie = new PrismaSessionRepositorie()
    const currentSession = await SessionRepositorie.findAll(user_id)


    return new Promise((resolve, reject) => {
        if (!user_id) {
            return reject({ status_code: 404, body: { msg: 'ID nulo ou inválido' } })
        }

        if (!currentSession) return reject({ status_code: 400, msg: 'erro ao listar sessões', body: currentSession })

        const response: ClientResponse = { status_code: 200, msg: 'lista de todos as sessões', body: currentSession }
        resolve(response);
    })

}