import { AdmResponses, params } from "../../IUserAdm_usecases"
import ITransaction from "../../../entities/ITransaction";
import PrismaTransactionRepositorie from "../../../repositories/PrismaRepositories/PrismaTransactionRepositorie";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie";

const prismaTransaction = new PrismaTransactionRepositorie();
const prismaClient = new PrismaUserClientRepositorie()
const prismaAdm = new PrismaUserAdmRepositorie()

export const addCreditToClient = async (data: ITransaction): Promise<AdmResponses> => {

    return new Promise(async (resolve, reject) => {

        try {
            const currentClient = await prismaClient.find(data.userClientId)
            const currentAdm = await prismaAdm.find(data.userAdmId)

            if (!currentClient || !currentAdm) {
                return reject({
                    status_code: 400,
                    body: {
                        msg: "Cliente ou Administrador não encontrado"
                    }
                })
            }

            if (data.value > currentClient.saldo) {
                return reject({
                    status_code: 400,
                    body: {
                        msg: "Saldo insuficiente"
                    }
                })
            }

            const currentTransaction = await prismaTransaction.create(data)
            const adminUpdated = await prismaAdm.update(data.userAdmId, { saldo: currentAdm.saldo + currentTransaction.value })
            const clientUpdated = await prismaClient.update(data.userClientId, { saldo: currentClient.saldo - currentTransaction.value })

            if (!adminUpdated) {
                return reject({
                    status_code: 400,
                    body: {
                        msg: "Não foi possível atualizar o saldo do administrador"
                    }
                })
            }

            if (!clientUpdated) {
                return reject({
                    status_code: 400,
                    body: {
                        msg: "Não foi possível atualizar o saldo do cliente"
                    }
                })
            }

            return resolve({
                status_code: 200,
                body: currentTransaction,
                msg: "Saldo atualizado com sucesso"
            })

        } catch (error: any) {
            return reject({ status_code: 500, msg: 'falha ao realizar transação', body: error.message })
        }

    });

}