import ITransaction from "../../../entities/ITransaction";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import PrismaTransactionRepositorie from "../../../repositories/PrismaRepositories/PrismaTransactionRepositorie";
import IClientResponses from "../../../../http/res/IClientResponses";

const prismaClient = new PrismaUserClientRepositorie()
const prismaTransaction = new PrismaTransactionRepositorie();

export const addCreditToClient = async (client_id: string, data: ITransaction): Promise<IClientResponses> => {

    return new Promise(async (resolve, reject) => {

        try {

            if (!client_id) {
                return reject({
                    status_code: 400,
                    body: {
                        message: "client_id is required"
                    }
                })
            }

            if (!data) {
                return reject({
                    status_code: 400,
                    body: {
                        message: "data is required"
                    }
                })
            }

            const currentTransaction = await prismaTransaction.create(data)
            const currentClient = await prismaClient.find(client_id)
            if (!currentClient) return reject({ status_code: 404, body: { msg: 'not founded client' } })
            const updateClient = await prismaClient.update(client_id, { saldo: currentClient.saldo + data.value })

            if (!currentTransaction) {
                return reject({ status_code: 404, msg: 'nenhuma transação identificada', body: currentTransaction })
            }

            if (!updateClient) {
                return reject({ status_code: 404, msg: 'falha ao tentar atualizar saldo do cliente', body: currentTransaction })
            }

            const response: IClientResponses = { status_code: 200, body: { msg: 'crédito adicionado', body: currentTransaction } }
            resolve(response);
        } catch (error: any) {

            return reject({ status_code: 500, body: { msg: error.message } })

        }
    });
}