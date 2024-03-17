import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import IClientResponses from "../../../../http/res/IClientResponses";

export const listClient = async (administrator_id: string): Promise<IClientResponses> => {
    const prismaClient = new PrismaUserClientRepositorie()

    return new Promise(async (resolve, reject) => {
        try {
            if (!administrator_id) {
                return reject({ status_code: 404, body: { msg: 'ID nulo ou inválido' } })
            }
            const listClient = await prismaClient.findAll(administrator_id)

            const response: IClientResponses = { status_code: 200, body: { msg: 'client list', body: listClient } }
            resolve(response);
        } catch (error: any) {
            return reject({ status_code: 500, body: { msg: error.message } })
        }
    })
}