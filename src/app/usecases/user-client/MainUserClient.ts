import ISessions from "../../entities/ISessions";
import ITransaction from "../../entities/ITransaction";
import IUserClient from "../../entities/IUserClient";
import IUserClient_usecases, { params } from "../IUserClient_usecases";
import { createNewClient } from "./functions/CreateNewClient"
import { login } from "./functions/Login";
import { logout } from "./functions/Logout";
import { addCreditToClient } from "./functions/AddCreditToClient";
import { createNewSession } from "./functions/CreateNewSession";
import { listAllSessions } from "./functions/ListAllSessions";
import IClientResponses from "../../../http/res/IClientResponses";

class MainUserClient implements IUserClient_usecases {

    registerClient(data: IUserClient): Promise<IClientResponses> {//
        return createNewClient(data)
    }
    login(data: IUserClient): Promise<IClientResponses> {//
        return login(data)
    }
    logout(email: string, accessToken: string): Promise<IClientResponses> {
        return logout(accessToken)
    }
    AddCredit(transaction: ITransaction, params: params): Promise<IClientResponses> {//
        return addCreditToClient(params.client_id, transaction)
    }
    createNewSession(data: ISessions): Promise<IClientResponses> {//
        return createNewSession(data)
    }
    listSessions(params: params): Promise<IClientResponses> {//
        return listAllSessions(params.client_id)
    }

    

}

export default MainUserClient;