import { PrismaClient } from "@prisma/client";
import IUserClientRepositorie from "../IUserClientRepositorie";
import IUserClient from "../../entities/IUserClient";

const prisma = new PrismaClient()

class PrismaUserClientRepositorie implements IUserClientRepositorie {

    async create(data: IUserClient): Promise<IUserClient> {
        return await prisma.userClient.create({
            data
        })
    }

    async find(client_id: string): Promise<IUserClient | null> {
        return await prisma.userClient.findFirst({
            where: { id: client_id }
        })
    }

    async update(client_id: string, data: Partial<IUserClient>): Promise<IUserClient> {
        return await prisma.userClient.update({
            where: { id: client_id },
            data
        })
    }

    async delete(client_id: string): Promise<IUserClient> {
        return await prisma.userClient.delete({
            where: { id: client_id }
        })
    }
}

export default PrismaUserClientRepositorie;