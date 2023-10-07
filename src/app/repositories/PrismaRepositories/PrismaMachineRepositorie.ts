import { PrismaClient } from "@prisma/client";
import IMachineRepositorie from "../IMachineRepositorie";
import IMachines from "../../entities/IMachines";

const prisma = new PrismaClient();

class PrismaMachineRepositorie implements IMachineRepositorie {
    async create(data: IMachines): Promise<IMachines> {
        return await prisma.machines.create({
            data: {
                arenaLocalId: data.arenaLocalId,
                userAdmId: data.userAdmId,
                status: data.status,
                userColabId: data.userColabId,
                nano_id: data.nano_id
            }
        });
    }

    async find(machine_id: string): Promise<IMachines | null> {
        return await prisma.machines.findFirst({ where: { id: machine_id } });
    }

    async update(machine_id: string, data: Partial<IMachines>): Promise<IMachines> {
        return await prisma.machines.update({
            where: { id: machine_id },
            data: {
                arenaLocalId: data.arenaLocalId,
                userAdmId: data.userAdmId,
                status: data.status,
                userColabId: data.userColabId
            }
        });
    }

    async delete(machine_id: string): Promise<IMachines> {
        return await prisma.machines.delete({ where: { id: machine_id } });
    }
}

export default PrismaMachineRepositorie;
