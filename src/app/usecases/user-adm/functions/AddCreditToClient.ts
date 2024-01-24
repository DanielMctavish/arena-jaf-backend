import { AdmResponses, params } from "../../IUserAdm_usecases"
import ITransaction from "../../../entities/ITransaction";
import PrismaTransactionRepositorie from "../../../repositories/PrismaRepositories/PrismaTransactionRepositorie";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import validator from "../../../../security/validations/Joi";
import { transactionSchema } from "../../../../security/validations/schemmas-joi/TransactionSchemma";


export const addCreditToClient = async (data: ITransaction): Promise<AdmResponses> => {

    return new Promise(async (resolve, reject) => {

        const validationResponse = await validator(transactionSchema, data)

        if (!validationResponse.authenticator && validationResponse.msg !== '"token" is not allowed') {
            console.log('validation alert!', validationResponse);

            const { status_code, msg } = validationResponse
            return reject({ status_code, body: { msg } })
        }


        try {
            const Transaction = new PrismaTransactionRepositorie();
            const currentTransaction = await Transaction.create(data)

            //console.log('observando a operação transaction --> ', currentTransaction);


            const prismaClient = new PrismaUserClientRepositorie()

            try {

                const currentClient = await prismaClient.find(data.userClientId)
                if(!currentClient){
                    return reject({ status_code: 404, msg: 'Cliente não encontrado!' })
                }

                let currentValue = 0
                currentValue = currentClient.saldo
                const clientUpdated = await prismaClient.update(data.userClientId, { saldo: currentValue + currentTransaction.value })

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