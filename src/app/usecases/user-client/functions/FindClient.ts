import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import IClientResponses from "../../../../http/res/IClientResponses";

export const findClient = async (client_id: string): Promise<IClientResponses> => {
    const prismaClient = new PrismaUserClientRepositorie()

    return new Promise(async (resolve, reject) => {
        try {
            if (!client_id) {
                return reject({ status_code: 404, body: { msg: 'ID nulo ou inválido' } })
            }
            const currentClient = await prismaClient.find(client_id)
            if (!currentClient) return reject({ status_code: 404, body: { msg: 'not founded client' } })

            const response: IClientResponses = { status_code: 200, body: { msg: 'client founded', body: currentClient } }
            resolve(response);
        } catch (error: any) {
            return reject({ status_code: 500, body: { msg: error.message } })
        }
    })

}