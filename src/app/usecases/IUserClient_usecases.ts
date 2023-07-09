import ISessions from "../entities/ISessions";
import ITransaction from "../entities/ITransaction";
import IUserClient from "../entities/IUserClient";

export interface ClientResponse {
    status_code: number,
    msg: string,
    body: Object
}

interface IUserClient_usecases {
    registerClient(data: IUserClient): Promise<ClientResponse>
    login(email: string, password: string): Promise<ClientResponse>
    logout(email: string, accessToken: string): Promise<ClientResponse>
    AddCredit(client_id: string, transaction: ITransaction): Promise<ClientResponse>
    createNewSession(data: ISessions): Promise<ClientResponse>
    listSessions(user_id: string): Promise<ClientResponse>
}

export default IUserClient_usecases;