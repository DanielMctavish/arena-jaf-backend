import IUserAdm from "../entities/IUserAdm"

interface IUserAdmRepositorie {
    create(data: IUserAdm): Promise<IUserAdm>
    find(adm_id: string): Promise<IUserAdm>
    update(data: Partial<IUserAdm>): Promise<IUserAdm>
    delete(data: IUserAdm): Promise<IUserAdm>
}

export default IUserAdmRepositorie