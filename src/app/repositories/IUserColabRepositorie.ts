import IUserColab from "../entities/IUserColab"

interface IUserColabRepositorie {
    create(data: IUserColab): Promise<IUserColab>
    find(colab_id: string): Promise<IUserColab | null>
    update(colab_id: string, data: Partial<IUserColab>): Promise<IUserColab>
    delete(colab_id: string): Promise<IUserColab>
}

export default IUserColabRepositorie