import { PrismaClient } from "@prisma/client";
import IMachineRepositorie from "../IMachineRepositorie";
import IMachines from "../../entities/IMachines";

const prisma = new PrismaClient();

class PrismaMachineRepositorie implements IMachineRepositorie {
    async create(data: IMachines): Promise<IMachines> {
        const { userAdmId, userColabId, arenaLocalId, sessions, ...restData } = data;

        const currentMachine = await prisma.machines.create({
            data: {
                ...restData,
                UserAdm: {
                    connect: {
                        id: userAdmId
                    }
                },
                UserColab: {
                    connect: {
                        id: userColabId
                    }
                },
                local: {
                    connect: {
                        id: arenaLocalId
                    }
                },
                sessions: {
                    create: sessions.map(session => session)
                }
            }
        });

        return currentMachine as IMachines;
    }


    async find(machine_id: string): Promise<IMachines | null> {
        const currentMachine = await prisma.machines.findFirst({ where: { id: machine_id } });
        return currentMachine as IMachines;
    }

    async update(machine_id: string, data: Partial<IMachines>): Promise<IMachines> {

        const currentMachine = await prisma.machines.update({
            where: { id: machine_id },
            data: {
                arenaLocalId: data.arenaLocalId,
                userAdmId: data.userAdmId,
                userColabId: data.userColabId
            }
        });

        return currentMachine as IMachines
    }

    async delete(machine_id: string): Promise<IMachines> {
        const currentMachine = await prisma.machines.delete({ where: { id: machine_id } });
        return currentMachine as IMachines
    }
}

export default PrismaMachineRepositorie;
