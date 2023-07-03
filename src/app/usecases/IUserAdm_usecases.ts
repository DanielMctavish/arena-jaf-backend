import IArenaLocal from "../entities/IArenaLocal"
import IMachines from "../entities/IMachines"
import IProducts from "../entities/IProducts"
import ISessions, { SESSION_STATUS } from "../entities/ISessions"
import IUserClient from "../entities/IUserClient"

interface IUserAdm_usecases {
    login(email: string, password: string): Promise<Object>
    logout(accessToken: string): Promise<Object>

    createMachine(data: IMachines): Promise<IMachines>
    deleteMachine(data: IMachines): Promise<IMachines>

    createNewSession(data: ISessions): Promise<ISessions>
    pauseSession(session_status: SESSION_STATUS): void
    resumeSession(session_status: SESSION_STATUS): void

    createNewClient(data: IUserClient): Promise<IUserClient>
    updateClient(data: IUserClient): Promise<IUserClient>
    deleteClient(data: IUserClient): Promise<IUserClient>
    listAllClients(id_adm: string): Promise<IUserClient[]>
    addCreditToClient(value: number): void

    createArenaLocation(data: IArenaLocal): Promise<IArenaLocal>
    updateArenaLocation(data: IArenaLocal): Promise<IArenaLocal>
    deleteArenaLocation(data: IArenaLocal): Promise<IArenaLocal>

    registerNewProduct(data: IProducts): Promise<IProducts>
    deleteNewProduct(data: IProducts): Promise<IProducts>
    updateNewProduct(data: IProducts): Promise<IProducts>
}

export default IUserAdm_usecases