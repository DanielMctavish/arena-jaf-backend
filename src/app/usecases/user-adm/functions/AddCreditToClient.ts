import { AdmResponses } from "../../IUserAdm_usecases"
import ITransaction from "../../../entities/ITransaction";
import PrismaTransactionRepositorie from "../../../repositories/PrismaRepositories/PrismaTransactionRepositorie";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";

import validator from "../../../../security/validations/Joi";
import { transactionSchema } from "../../../../security/validations/schemmas-joi/TransactionSchemma";
import { IParams_id } from "../MainUserAdm";


export const addCreditToClient = async (params_id: IParams_id, transaction: ITransaction): Promise<AdmResponses> => {

    const { id } = params_id

    //return console.log('observando corpos da requisição ---> ', params_id);

    return new Promise(async (resolve, reject) => {

        if (id === undefined) {
            return reject({ status_code: 403, body: { msg: 'nenhum parâmetro encontrado' } })
        }


        const validationResponse = await validator(transactionSchema, transaction)

        if (!validationResponse.authenticator && validationResponse.msg !== '"token" is not allowed') {
            console.log('validation alert!', validationResponse);

            const { status_code, msg } = validationResponse
            return reject({ status_code, body: { msg } })
        }


        try {
            const Transaction = new PrismaTransactionRepositorie();
            const currentTransaction = await Transaction.create(transaction)

            //console.log('observando a operação transaction --> ', currentTransaction);


            const UserClientRepositorie = new PrismaUserClientRepositorie()

            try {

                const currentClient = await UserClientRepositorie.find(id)

                let currentValue = 0
                currentClient !== null ? currentValue = currentClient.saldo : "";

                const clientUpdated = await UserClientRepositorie.update(id, { saldo: currentValue + currentTransaction.value })
                const response:
                    AdmResponses = {
                    status_code: 200,
                    msg: 'crédito adicionado',
                    body: { transação: currentTransaction, cliente: clientUpdated }
                }
                resolve(response);

            } catch (error: any) {
                await Transaction.delete(currentTransaction.id)
                return reject({ status_code: 403, body: { msg: 'cliente possivelmente inexistente, transação apagada...' } })
            }


        } catch (error: any) {
            return reject({ status_code: 401, msg: 'falha ao realizar transação', body: error.message })
        }

    });

}