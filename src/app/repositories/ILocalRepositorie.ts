import IArenaLocal from "../entities/IArenaLocal"


interface ILocalRepositorie {
    create(data: IArenaLocal): Promise<IArenaLocal>
    find(local_id: string): Promise<IArenaLocal>
    update(data: Partial<IArenaLocal>): Promise<IArenaLocal>
    delete(data: IArenaLocal): Promise<IArenaLocal>
}

export default ILocalRepositorie