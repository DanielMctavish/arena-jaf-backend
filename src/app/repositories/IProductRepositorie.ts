import IProducts from "../entities/IProducts";

interface IProductRepositorie {
    create(data: IProducts): Promise<IProducts>
    find(product_id: string): Promise<IProducts>
    update(data: Partial<IProducts>): Promise<IProducts>
    delete(data: IProducts): Promise<IProducts>
}

export default IProductRepositorie;