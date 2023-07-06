import IArenaLocal from "../entities/IArenaLocal"


interface ILocalRepositorie {
    create(data: IArenaLocal): Promise<Partial<IArenaLocal>>
    find(local_id: string): Promise<Partial<IArenaLocal | null>>
    update(local_id: string, data: Partial<IArenaLocal>): Promise<Partial<IArenaLocal>>
    delete(local_id: string): Promise<Partial<IArenaLocal>>
}

export default ILocalRepositorie