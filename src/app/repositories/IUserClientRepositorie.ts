import IUserClient from "../entities/IUserClient"

interface IUserClientRepositorie {
    create(data: IUserClient): Promise<IUserClient>
    find(client_id: string): Promise<IUserClient>
    update(data: Partial<IUserClient>): Promise<IUserClient>
    delete(data: IUserClient): Promise<IUserClient>
}

export default IUserClientRepositorie