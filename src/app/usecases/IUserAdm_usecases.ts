import IArenaLocal from "../entities/IArenaLocal"
import IMachines from "../entities/IMachines"
import IProducts from "../entities/IProducts"
import ISessions, { SESSION_STATUS } from "../entities/ISessions"
import ITransaction from "../entities/ITransaction"
import IUserAdm from "../entities/IUserAdm"
import IUserClient from "../entities/IUserClient"

export interface AdmResponses {
    status_code: number,
    msg: string,
    body?: Object | null
}
interface IUserAdm_usecases {
    login(email: string, password: string): Promise<AdmResponses>
    logout(accessToken: string): Promise<AdmResponses>

    CreateAdm(params: object, data: IUserAdm): Promise<AdmResponses>

    createMachine(data: IMachines): Promise<AdmResponses>
    deleteMachine(machine_id: string): Promise<AdmResponses>

    createNewSession(data: ISessions): Promise<AdmResponses>
    pauseSession(session_status: SESSION_STATUS): void
    resumeSession(session_status: SESSION_STATUS): void

    createNewClient(data: IUserClient): Promise<AdmResponses>
    updateClient(client_id: string, data: IUserClient): Promise<AdmResponses>
    deleteClient(client_id: string): Promise<AdmResponses>
    listAllClients(id_adm: string): Promise<AdmResponses>
    addCreditToClient(params_id: object, transaction: ITransaction): Promise<AdmResponses>

    createArenaLocation(data: IArenaLocal): Promise<AdmResponses>
    updateArenaLocation(local_id: string, data: IArenaLocal): Promise<AdmResponses>
    deleteArenaLocation(local_id: string): Promise<AdmResponses>

    registerNewProduct(data: IProducts): Promise<AdmResponses>
    deleteNewProduct(product_id: string): Promise<AdmResponses>
    updateNewProduct(product_id: string, data: IProducts): Promise<AdmResponses>
}

export default IUserAdm_usecases