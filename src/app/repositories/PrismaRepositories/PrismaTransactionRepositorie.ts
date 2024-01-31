import { PrismaClient } from "@prisma/client";
import ITransactionRepositorie from "../ITransactionRepositorie";
import ITransaction from "../../entities/ITransaction";

const prisma = new PrismaClient()

class PrismaTransactionRepositorie implements ITransactionRepositorie {
    async create(data: ITransaction): Promise<ITransaction> {

        const { userAdmId, userClientId, ...restData } = data



        return await prisma.transactions.create({
            data: {
                ...restData,
                Client: {
                    connect: {
                        id: userClientId
                    }
                }
            }
        })
    }

    async find(transaction_id: string): Promise<ITransaction | null> {
        return await prisma.transactions.findFirst({
            where: {
                id: transaction_id
            }
        })
    }
    async update(transaction_id: string, data: Partial<ITransaction>): Promise<ITransaction> {
        return await prisma.transactions.update({
            where: { id: transaction_id },
            data
        })
    }
    async delete(transaction_id: string): Promise<ITransaction> {
        return await prisma.transactions.delete({
            where: { id: transaction_id }
        })
    }
}

export default PrismaTransactionRepositorie;