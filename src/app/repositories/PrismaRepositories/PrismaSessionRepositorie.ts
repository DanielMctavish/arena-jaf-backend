import { PrismaClient } from "@prisma/client";
import ISessions from "../../entities/ISessions";
import ISessionRepositorie from "../ISessionRepositorie";

const prisma = new PrismaClient()

class PrismaSessionRepositorie implements ISessionRepositorie {

    async create(data: ISessions): Promise<ISessions> {

        const { arenaLocalId, duration, machineId, proprietario_id, userClientId, value, status } = data

        return await prisma.sessions.create({
            data: {
                arenaLocalId,
                duration,
                machineId,
                proprietario_id,
                userClientId,
                value,
                status
            }
        })
    }

    async find(session_id: string): Promise<ISessions | null> {

        return await prisma.sessions.findFirst({
            where: {
                id: session_id
            }
        })

    }

    async update(session_id: string, data: Partial<ISessions>): Promise<ISessions> {

        const { arenaLocalId, duration, machineId, proprietario_id, userClientId, value, status } = data
        
        return await prisma.sessions.update({
            where: { id: session_id },
            data: {
                arenaLocalId,
                duration,
                machineId,
                proprietario_id,
                userClientId,
                value,
                status
            }
        })
    }

    async delete(session_id: string): Promise<ISessions> {
        return await prisma.sessions.delete({
            where: { id: session_id }
        })
    }
}

export default PrismaSessionRepositorie;