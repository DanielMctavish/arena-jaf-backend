import { PrismaClient } from "@prisma/client";
import ILocalRepositorie from "../ILocalRepositorie";
import IArenaLocal from "../../entities/IArenaLocal";

const prisma = new PrismaClient()

class PrismaLocalRepositorie implements ILocalRepositorie {

    async create(data: IArenaLocal): Promise<IArenaLocal> {
        return await prisma.arenaLocal.create({
            data: {
                nome: data.nome,
                userAdmId: data.userAdmId,
                end_url_google: data.end_url_google,
                userColabId: data.userColabId
            }
        })
    }

    async find(local_id: string): Promise<IArenaLocal | null> {
        return await prisma.arenaLocal.findFirst({
            where: {
                id: local_id
            }
        })
    }
    async update(local_id: string, data: Partial<IArenaLocal>): Promise<IArenaLocal> {
        return await prisma.arenaLocal.update({
            where: { id: local_id },
            data: {
                nome: data.nome,
                userAdmId: data.userAdmId,
                end_url_google: data.end_url_google,
                userColabId: data.userColabId
            }
        })
    }
    async delete(local_id: string): Promise<IArenaLocal> {
        return await prisma.arenaLocal.delete({
            where: {
                id: local_id
            }
        })

    }
}

export default PrismaLocalRepositorie