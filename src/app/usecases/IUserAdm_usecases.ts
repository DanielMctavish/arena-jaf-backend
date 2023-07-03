import IArenaLocal from "../entities/IArenaLocal"
import IMachines from "../entities/IMachines"
import IProducts from "../entities/IProducts"
import ISessions, { SESSION_STATUS } from "../entities/ISessions"
import IUserClient from "../entities/IUserClient"

export interface AdmResponses {
    status_code: number,
    msg: string,
    body: Object
}
interface IUserAdm_usecases {
    login(email: string, password: string): Promise<AdmResponses>
    logout(accessToken: string): Promise<AdmResponses>

    createMachine(data: IMachines): Promise<AdmResponses>
    deleteMachine(machine_id: string): Promise<AdmResponses>

    createNewSession(data: ISessions): Promise<AdmResponses>
    pauseSession(session_status: SESSION_STATUS): void
    resumeSession(session_status: SESSION_STATUS): void

    createNewClient(data: IUserClient): Promise<AdmResponses>
    updateClient(data: IUserClient): Promise<AdmResponses>
    deleteClient(client_id: string): Promise<AdmResponses>
    listAllClients(id_adm: string): Promise<AdmResponses>
    addCreditToClient(value: number): Promise<AdmResponses>

    createArenaLocation(data: IArenaLocal): Promise<AdmResponses>
    updateArenaLocation(data: IArenaLocal): Promise<AdmResponses>
    deleteArenaLocation(data: IArenaLocal): Promise<AdmResponses>

    registerNewProduct(data: IProducts): Promise<AdmResponses>
    deleteNewProduct(product_id: string): Promise<AdmResponses>
    updateNewProduct(data: IProducts): Promise<AdmResponses>
}

export default IUserAdm_usecases