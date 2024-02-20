import { FilePhoto } from "../../utils/Firebase/FirebaseOperations"
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
    email: string
    machine_id: string
    client_id: string
    product_id: string
    local_id: string
}

interface IUserAdm_usecases {
    login(data: Partial<IUserAdm>): Promise<AdmResponses>
    logout(accessToken: string): Promise<AdmResponses>

    CreateAdm(data: IUserAdm): Promise<AdmResponses>
    GetAdminInfo(data: any, params: params): Promise<AdmResponses>
    GetAdminInfoByEmail(data: any, params: params): Promise<AdmResponses>

    createMachine(data: IMachines): Promise<AdmResponses>
    deleteMachine(data: any, params: params): Promise<AdmResponses>

    createNewSession(data: ISessions): Promise<AdmResponses>
    pauseSession(session_status: SESSION_STATUS): void
    resumeSession(session_status: SESSION_STATUS): void

    createNewClient(data: IUserClient): Promise<AdmResponses>
    updateClient(data: IUserClient, params: params): Promise<AdmResponses>
    deleteClient(data: any, params: params): Promise<AdmResponses>
    listAllClients(data: any, params: params): Promise<AdmResponses>
    listAllMachines(data: any, params: params): Promise<AdmResponses>
    addCreditToClient(data: ITransaction): Promise<AdmResponses>

    createArenaLocation(data: IArenaLocal): Promise<AdmResponses>
    updateArenaLocation(data: IArenaLocal, params: params): Promise<AdmResponses>
    deleteArenaLocation(data: any, params: params): Promise<AdmResponses>

    registerNewProduct(data: IProducts): Promise<AdmResponses>
    deleteNewProduct(data: any, params: params): Promise<AdmResponses>
    updateNewProduct(data: IProducts, params: params): Promise<AdmResponses>

    // FIREBASE
    uploadAdminProfile(data: any, params: params, File: FilePhoto): Promise<AdmResponses>
    deleteAdminProfile(data: any, params: params, File: FilePhoto): Promise<AdmResponses>
    uploadProductCoverImg(data: any, params: params, File: FilePhoto): Promise<AdmResponses>
    deleteProductCoverImg(data: any, params: params, File: FilePhoto): Promise<AdmResponses>
}

export default IUserAdm_usecases