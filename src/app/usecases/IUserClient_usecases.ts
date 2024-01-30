import IClientResponses from "../../http/res/IClientResponses";
import ISessions from "../entities/ISessions";
import ITransaction from "../entities/ITransaction";
import IUserClient from "../entities/IUserClient";

export interface params {
    adm_id: string
    machine_id: string
    client_id: string
    product_id: string
    local_id: string
}

interface IUserClient_usecases {
    registerClient(data: IUserClient): Promise<IClientResponses>
    login(data: IUserClient): Promise<IClientResponses>
    logout(email: string, accessToken: string): Promise<IClientResponses>
    AddCredit(data: ITransaction, params: params): Promise<IClientResponses>
    createNewSession(data: ISessions): Promise<IClientResponses>
    listSessions(data: any, params: params): Promise<IClientResponses>

    uploadClientProfile():Promise<IClientResponses>
    deleteClientProfile():Promise<IClientResponses>
    
}

export default IUserClient_usecases;