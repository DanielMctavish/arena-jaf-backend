import { PrismaClient } from "@prisma/client";
import IUserClientRepositorie from "../IUserClientRepositorie";
import IUserClient from "../../entities/IUserClient";
import { includes } from "lodash";

const prisma = new PrismaClient()

class PrismaUserClientRepositorie implements IUserClientRepositorie {

    async create(data: IUserClient): Promise<IUserClient> {

        const { avatar_url, administrator_id, cpf, email, nome, saldo, senha } = data
        const newData = { avatar_url, administrator_id, cpf, email, nome, saldo, senha }

        const currentClient = await prisma.userClient.create({
            data: { ...newData }
        })

        return currentClient as IUserClient;
    }

    async find(client_id: string): Promise<IUserClient | null> {
        const currentClient = await prisma.userClient.findUnique({
            where: { id: client_id }
        })

        return currentClient as IUserClient;
    }

    async findAll(adm_id: string): Promise<IUserClient[]> {
        const currentClient = await prisma.userClient.findMany({
            where: { administrator_id: adm_id }
        })

        return currentClient as IUserClient[];
    }

    async findByEmail(client_email: string): Promise<IUserClient | null> {
        const currentClient = await prisma.userClient.findFirst({
            where: { email: client_email }
        })

        return currentClient as IUserClient;
    }

    async update(client_id: string, data: Partial<IUserClient>): Promise<IUserClient> {

        const { avatar_url, administrator_id, cpf, email, nome, saldo } = data
        const newData = { avatar_url, administrator_id, cpf, email, nome, saldo }

        const currentClient = await prisma.userClient.update({
            where: { id: client_id },
            data: { ...newData }
        })

        return currentClient as IUserClient;
    }

    async delete(client_id: string): Promise<IUserClient> {
        const currentClient = await prisma.userClient.delete({
            where: { id: client_id }
        })

        return currentClient as IUserClient;
    }
}

export default PrismaUserClientRepositorie;