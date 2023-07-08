import { PrismaClient } from "@prisma/client";
import IUserColabRepositorie from "../IUserColabRepositorie";
import IUserColab from "../../entities/IUserColab";

const prisma = new PrismaClient()

class PrismaUserColabRepositorie implements IUserColabRepositorie {
    async create(data: IUserColab): Promise<IUserColab> {
        return await prisma.userColab.create({
            data: {
                avatar_url: data.avatar_url,
                email: data.email,
                nome: data.nome,
                saldo: data.saldo,
                senha: data.senha,
            }
        })
    }
    async update(colab_id: string, data: Partial<IUserColab>): Promise<IUserColab> {
        return await prisma.userColab.update({
            where: { id: colab_id },
            data: {
                avatar_url: data.avatar_url,
                email: data.email,
                nome: data.nome,
                saldo: data.saldo,
                senha: data.senha,
            }
        })
    }
    async find(colab_id: string): Promise<IUserColab | null> {
        return await prisma.userColab.findFirst({ where: { id: colab_id } })
    }
    async delete(colab_id: string): Promise<IUserColab> {
        return await prisma.userColab.delete({ where: { id: colab_id } })
    }
}

export default PrismaUserColabRepositorie