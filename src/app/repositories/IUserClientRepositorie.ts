import IUserClient from "../entities/IUserClient"

interface IUserClientRepositorie {
    create(data: IUserClient): Promise<IUserClient>
    find(client_id: string): Promise<IUserClient | null>
    findAll(adm_id: string): Promise<IUserClient[]>
    update(client_id: string, data: Partial<IUserClient>): Promise<IUserClient>
    delete(client_id: string): Promise<IUserClient>
}

export default IUserClientRepositorie