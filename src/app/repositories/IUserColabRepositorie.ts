import IUserColab from "../entities/IUserColab"

interface IUserColabRepositorie {
    create(data: IUserColab): Promise<IUserColab>
    find(colab_id: string): Promise<IUserColab>
    update(data: Partial<IUserColab>): Promise<IUserColab>
    delete(data: IUserColab): Promise<IUserColab>
}

export default IUserColabRepositorie