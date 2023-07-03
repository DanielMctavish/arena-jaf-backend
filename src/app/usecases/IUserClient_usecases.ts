import ITransaction from "../entities/ITransaction";
import IUserClient from "../entities/IUserClient";

interface ClientResponse { }

interface IUserClient_usecases {
    registerClient(data: IUserClient): Promise<ClientResponse>
    login(email: string, password: string): Promise<ClientResponse>
    logout(email: string, accessToken: string): Promise<ClientResponse>
    AddCredit(transaction: ITransaction): Promise<ClientResponse>
    listSessions(user_id: string): Promise<ClientResponse>
}

export default IUserClient_usecases;