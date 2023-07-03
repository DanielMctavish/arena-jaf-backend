import IProducts from "../entities/IProducts"
import ISessions, { SESSION_STATUS } from "../entities/ISessions"
import IUserClient from "../entities/IUserClient"

interface ColabResponse {

}

interface IUserColab_usecases {
    login(email: string, password: string): Promise<ColabResponse>
    logout(accessToken: string): Promise<ColabResponse>

    createNewSession(data: ISessions): Promise<ColabResponse>
    pauseSession(session_status: SESSION_STATUS): void
    resumeSession(session_status: SESSION_STATUS): void

    createNewClient(data: IUserClient): Promise<ColabResponse>
    updateClient(data: IUserClient): Promise<ColabResponse>
    deleteClient(data: IUserClient): Promise<ColabResponse>
    listAllClients(id_adm: string): Promise<ColabResponse[]>
    addCreditToClient(value: number): void

    registerNewProduct(data: IProducts): Promise<ColabResponse>
    deleteNewProduct(data: IProducts): Promise<ColabResponse>
    updateNewProduct(data: IProducts): Promise<ColabResponse>

}