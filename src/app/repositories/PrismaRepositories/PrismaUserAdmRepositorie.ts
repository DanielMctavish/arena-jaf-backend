import { PrismaClient } from "@prisma/client";
import IUserAdmRepositorie from "../IUserAdmRepositorie";
import IUserAdm from "../../entities/IUserAdm";

const prisma = new PrismaClient()

class PrismaUserAdmRepositorie implements IUserAdmRepositorie {
    async create(data: IUserAdm): Promise<IUserAdm> {
        return await prisma.userAdm.create({
            data
        })
    }

    async find(adm_id: string): Promise<IUserAdm | null> {
        return await prisma.userAdm.findUnique({
            where: { id: adm_id }
        })
    }

    async findByEmail(email: string): Promise<IUserAdm | null> {

        //console.log('dentro do prisma --> ', email);
        
        return await prisma.userAdm.findUnique({
            where: { email }
        })
    }

    async update(adm_id: string, data: Partial<IUserAdm>): Promise<IUserAdm> {
        return await prisma.userAdm.update({
            where: { id: adm_id },
            data
        })
    }

    async delete(adm_id: string): Promise<IUserAdm> {
        return await prisma.userAdm.delete({
            where: { id: adm_id }
        })
    }
}

export default PrismaUserAdmRepositorie;
