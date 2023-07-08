import { AdmResponses } from "../../IUserAdm_usecases"
import ITransaction from "../../../entities/ITransaction";
import PrismaTransactionRepositorie from "../../../repositories/PrismaRepositories/PrismaTransactionRepositorie";

export const addCreditToClient = async (transaction: ITransaction): Promise<AdmResponses> => {

    const Transaction = new PrismaTransactionRepositorie();

    const currentTransaction = await Transaction.create(transaction)

    return new Promise((resolve, reject) => {

        if (!currentTransaction) {
            reject(({ status_code: 401, msg: 'falha ao realizar transação', body: currentTransaction }))
        }

        if (!transaction) {
            reject({ status_code: 404, msg: 'crédito adicionado', body: currentTransaction })
        }

        const response: AdmResponses = { status_code: 200, msg: 'crédito adicionado', body: currentTransaction }
        resolve(response);
    });

}