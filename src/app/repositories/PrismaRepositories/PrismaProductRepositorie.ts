import { PrismaClient } from "@prisma/client";
import IProductRepositorie from "../IProductRepositorie";
import IProducts from "../../entities/IProducts";

const prisma = new PrismaClient()


class PrismaProductRepositorie implements IProductRepositorie {
    async create(data: IProducts): Promise<IProducts> {

        const { local_id, session_id, ...restData } = data

        const currentProduct = await prisma.products.create({
            data: {
                ...restData,
                local: {
                    connect: {
                        id: local_id
                    }
                },
                Sessions: {
                    connect: {
                        id: session_id
                    }
                }
            }
        })

        return currentProduct as IProducts;
    }

    async find(product_id: string): Promise<IProducts | null> {

        const currentProduct = await prisma.products.findFirst({
            where: {
                id: product_id
            }
        })

        return currentProduct as IProducts;
    }

    async findAllByOwner(owner_id: string): Promise<IProducts[]> {
        const products = await prisma.products.findMany({
            where: {
                owner_id
            }
        });

        // Mapear para o formato desejado
        const mappedProducts = products.map(product => product)

        return mappedProducts as IProducts[];
    }


    async update(product_id: string, data: Partial<IProducts>): Promise<IProducts> {

        const { available, name, url_img, value } = data

        const currentProduct = await prisma.products.update({
            where: {
                id: product_id
            },
            data: {
                available,
                value,
                url_img,
                name
            }
        })

        return currentProduct as IProducts;
    }

    async delete(product_id: string): Promise<IProducts> {
        const currentProduct = await prisma.products.delete({
            where: {
                id: product_id
            }
        })

        return currentProduct as IProducts;
    }

}

export default PrismaProductRepositorie