import { ColabResponse } from "../../IUserColab_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import PrismaTransactionRepositorie from "../../../repositories/PrismaRepositories/PrismaTransactionRepositorie";
import ITransaction from "../../../entities/ITransaction";
import validator from "../../../../security/validations/Joi";
import { transactionSchema } from "../../../../security/validations/schemmas-joi/TransactionSchemma";

export const addCreditToClient = async (client_id: string, transaction: ITransaction): Promise<ColabResponse> => {

    const Transaction = new PrismaTransactionRepositorie();
    const currentTransaction = await Transaction.create(transaction)
    const UserClientRepositorie = new PrismaUserClientRepositorie()
    const currentClient = await UserClientRepositorie.update(client_id, { saldo: currentTransaction.value })


    return new Promise((resolve, reject) => {

        if (!transaction) {
            return reject({ status_code: 404, msg: 'nenhuma transação identificada', body: currentTransaction })
        }

        validator(transactionSchema, transaction)

        if (!currentTransaction) {
            return reject(({ status_code: 401, msg: 'falha ao realizar transação', body: currentTransaction }))
        }


        if (!currentClient) {
            return reject({ status_code: 404, msg: 'falha ao tentar atualizar saldo do cliente', body: currentTransaction })
        }

        const response: ColabResponse = { status_code: 200, msg: 'crédito adicionado', body: currentTransaction }
        resolve(response);
        
    });
}