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

export interface params {
    adm_id: string
    machine_id: string
    client_id: string
    product_id: string
    local_id: string
}

interface IUserAdm_usecases {
    login(query: any, data: Partial<IUserAdm>): Promise<AdmResponses>
    logout(accessToken: string): Promise<AdmResponses>

    CreateAdm(data: IUserAdm): Promise<AdmResponses>

    createMachine(data: IMachines): Promise<AdmResponses>
    deleteMachine(params: params): Promise<AdmResponses>

    createNewSession(data: ISessions): Promise<AdmResponses>
    pauseSession(session_status: SESSION_STATUS): void
    resumeSession(session_status: SESSION_STATUS): void

    createNewClient(data: IUserClient): Promise<AdmResponses>
    updateClient(data: IUserClient, params: params): Promise<AdmResponses>
    deleteClient(data: any, params: params): Promise<AdmResponses>
    listAllClients(data: any, params: params): Promise<AdmResponses>
    addCreditToClient(data: ITransaction): Promise<AdmResponses>

    createArenaLocation(data: IArenaLocal): Promise<AdmResponses>
    updateArenaLocation(data: IArenaLocal, params: params): Promise<AdmResponses>
    deleteArenaLocation(params: params): Promise<AdmResponses>

    registerNewProduct(data: IProducts): Promise<AdmResponses>
    deleteNewProduct(data: any, params: params): Promise<AdmResponses>
    updateNewProduct(data: IProducts, params: params): Promise<AdmResponses>

    // FIREBASE
    uploadAdminProfile(): Promise<AdmResponses>
    deleteAdminProfile(): Promise<AdmResponses>
}

export default IUserAdm_usecases