import IProducts from "../entities/IProducts";

interface IProductRepositorie {
    create(data: IProducts): Promise<IProducts>
    find(product_id: string): Promise<IProducts | null>
    findAllByOwner(owner_id: string): Promise<IProducts[]>
    update(product_id: string, data: Partial<IProducts>): Promise<IProducts>
    delete(product_id: string): Promise<IProducts>
}

export default IProductRepositorie;