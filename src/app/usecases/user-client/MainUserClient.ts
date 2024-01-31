import ISessions from "../../entities/ISessions";
import ITransaction from "../../entities/ITransaction";
import IUserClient from "../../entities/IUserClient";
import IUserClient_usecases, { params } from "../IUserClient_usecases";
import { createNewClient } from "./functions/CreateNewClient"
import { loginClient } from "./functions/LoginClient";
import { logout } from "./functions/Logout";
import { addCreditToClient } from "./functions/AddCreditToClient";
import { createNewSession } from "./functions/CreateNewSession";
import { listAllSessions } from "./functions/ListAllSessions";
import IClientResponses from "../../../http/res/IClientResponses";
import { FilePhoto } from "../../../utils/Firebase/FirebaseOperations";
import firebaseUploadClientProfile from "./firebase/FirebaseUploadClientProfile";
import firebaseDeleteClientProfile from "./firebase/FirebaseDeleteClientProfile";

class MainUserClient implements IUserClient_usecases {

    RegisterClient(data: IUserClient): Promise<IClientResponses> {//
        return createNewClient(data)
    }
    Login(data: IUserClient): Promise<IClientResponses> {//
        return loginClient(data)
    }
    Logout(email: string, accessToken: string): Promise<IClientResponses> {
        return logout(accessToken)
    }
    AddCredit(transaction: ITransaction, params: params): Promise<IClientResponses> {//
        return addCreditToClient(params.client_id, transaction)
    }
    CreateNewSession(data: ISessions): Promise<IClientResponses> {//
        return createNewSession(data)
    }
    ListSessions(params: params): Promise<IClientResponses> {//
        return listAllSessions(params.client_id)
    }

    //FIREBASE

    UploadClientProfile(data: any, params: params, File: FilePhoto): Promise<IClientResponses> {
        return firebaseUploadClientProfile(params.client_id, File)
    }
    DeleteClientProfile(data: any, params: params, File: FilePhoto): Promise<IClientResponses> {
        return firebaseDeleteClientProfile(params)
    }

}

export default MainUserClient;