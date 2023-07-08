import { PrismaClient } from "@prisma/client";
import IProductRepositorie from "../IProductRepositorie";
import IProducts from "../../entities/IProducts";

const prisma = new PrismaClient()


class PrismaProductRepositorie implements IProductRepositorie {
    async create(data: IProducts): Promise<IProducts> {

        const { disponiveis, proprietario_id, value, nome, arenaLocalId, sessionsId, url_img } = data

        return await prisma.products.create({
            data: {
                disponiveis,
                proprietario_id,
                value,
                url_img,
                nome,
                arenaLocalId,
                sessionsId
            }
        })
    }

    async find(product_id: string): Promise<IProducts | null> {
        return await prisma.products.findFirst({
            where: {
                id: product_id
            }
        })
    }

    async findAllByProprietario(proprietario_id: string): Promise<IProducts[]> {
        return await prisma.products.findMany({
            where: {
                proprietario_id
            }
        })
    }

    async update(product_id: string, data: Partial<IProducts>): Promise<IProducts> {

        const { disponiveis, proprietario_id, value, nome, arenaLocalId, sessionsId, url_img } = data

        return await prisma.products.update({
            where: {
                id: product_id
            },
            data: {
                disponiveis,
                proprietario_id,
                value,
                url_img,
                nome,
                arenaLocalId,
                sessionsId
            }
        })
    }

    async delete(product_id: string): Promise<IProducts> {
        return await prisma.products.delete({
            where: {
                id: product_id
            }
        })
    }

}

export default PrismaProductRepositorie