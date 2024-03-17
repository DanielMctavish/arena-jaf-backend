import IClientResponses from "../../http/res/IClientResponses";
import { FilePhoto } from "../../utils/Firebase/FirebaseOperations";
import ISessions from "../entities/ISessions";
import ITransaction from "../entities/ITransaction";
import IUserClient from "../entities/IUserClient";

export interface params {
    adm_id: string
    machine_id: string
    client_id: string
    product_id: string
    local_id: string
    administrator_id: string
    url_image: string
}

interface IUserClient_usecases {
    RegisterClient(data: IUserClient): Promise<IClientResponses>
    FindClient(data: any, párams: params): Promise<IClientResponses>
    ListClient(data: any, params: params): Promise<IClientResponses>
    UpdateClient(data: Partial<IUserClient>, params: params): Promise<IClientResponses>
    Login(data: IUserClient): Promise<IClientResponses>
    Logout(email: string, accessToken: string): Promise<IClientResponses>
    AddCredit(data: ITransaction, params: params): Promise<IClientResponses>
    CreateNewSession(data: ISessions): Promise<IClientResponses>
    ListSessions(data: any, params: params): Promise<IClientResponses>

    UploadClientProfile(data: any, params: params, File: FilePhoto): Promise<IClientResponses>
    DeleteClientProfile(data: any, params: params, File: FilePhoto): Promise<IClientResponses>

}

export default IUserClient_usecases;