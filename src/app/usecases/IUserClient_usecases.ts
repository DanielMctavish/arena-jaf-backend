import IClientResponses from "../../http/res/IClientResponses";
import ISessions from "../entities/ISessions";
import ITransaction from "../entities/ITransaction";
import IUserClient from "../entities/IUserClient";

interface IUserClient_usecases {
    registerClient(params: any, data: IUserClient): Promise<IClientResponses>
    login(email: string, password: string): Promise<IClientResponses>
    logout(email: string, accessToken: string): Promise<IClientResponses>
    AddCredit(client_id: string, transaction: ITransaction): Promise<IClientResponses>
    createNewSession(data: ISessions): Promise<IClientResponses>
    listSessions(user_id: string): Promise<IClientResponses>
}

export default IUserClient_usecases;