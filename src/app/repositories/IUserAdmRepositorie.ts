import IUserAdm from "../entities/IUserAdm"

interface IUserAdmRepositorie {
    create(data: IUserAdm): Promise<IUserAdm>
    find(adm_id: string): Promise<IUserAdm | null>
    findByEmail(email: string): Promise<IUserAdm | null>
    update(adm_id: string, data: Partial<IUserAdm>): Promise<IUserAdm>
    delete(adm_id: string): Promise<IUserAdm>
}

export default IUserAdmRepositorie