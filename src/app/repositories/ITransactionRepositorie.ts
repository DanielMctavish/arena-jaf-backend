import ITransaction from "../entities/ITransaction";

interface ITransactionRepositorie {
    create(data: ITransaction): Promise<ITransaction>
    find(transaction_id: string): Promise<ITransaction>
    update(data: Partial<ITransaction>): Promise<ITransaction>
    delete(data: ITransaction): Promise<ITransaction>
}


export default ITransactionRepositorie; 