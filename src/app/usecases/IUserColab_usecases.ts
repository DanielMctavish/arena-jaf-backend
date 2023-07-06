import IProducts from "../entities/IProducts"
import ISessions, { SESSION_STATUS } from "../entities/ISessions"
import IUserClient from "../entities/IUserClient"

export interface ColabResponse {
    status_code: number,
    msg: string,
    body: Object
}

interface IUserColab_usecases {
    login(email: string, password: string): Promise<ColabResponse>
    logout(accessToken: string): Promise<ColabResponse>

    createNewSession(data: ISessions): Promise<ColabResponse>
    pauseSession(session_status: SESSION_STATUS): void
    resumeSession(session_status: SESSION_STATUS): void

    createNewClient(data: IUserClient): Promise<ColabResponse>
    updateClient(data: IUserClient): Promise<ColabResponse>
    deleteClient(user_id: string): Promise<ColabResponse>
    listAllClients(id_adm: string): Promise<ColabResponse>
    addCreditToClient(value: number): Promise<ColabResponse>

    registerNewProduct(data: IProducts): Promise<ColabResponse>
    deleteNewProduct(product_id: string): Promise<ColabResponse>
    updateNewProduct(data: IProducts): Promise<ColabResponse>

}

export default IUserColab_usecases;