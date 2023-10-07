import ISessions from "../../entities/ISessions";
import ITransaction from "../../entities/ITransaction";
import IUserClient from "../../entities/IUserClient";
import IUserClient_usecases from "../IUserClient_usecases";
import { createNewClient } from "./functions/CreateNewClient"
import { login } from "./functions/Login";
import { logout } from "./functions/Logout";
import { addCreditToClient } from "./functions/AddCreditToClient";
import { createNewSession } from "./functions/CreateNewSession";
import { listAllSessions } from "./functions/ListAllSessions";
import IClientResponses from "../../../http/res/IClientResponses";

class MainUserClient implements IUserClient_usecases {
    registerClient(params: any, data: IUserClient): Promise<IClientResponses> {
        return createNewClient(data)
    }
    login(email: string, password: string): Promise<IClientResponses> {
        return login(email, password)
    }
    logout(email: string, accessToken: string): Promise<IClientResponses> {
        return logout(accessToken)
    }
    AddCredit(client_id: string, transaction: ITransaction): Promise<IClientResponses> {
        return addCreditToClient(client_id, transaction)
    }
    createNewSession(data: ISessions): Promise<IClientResponses> {
        return createNewSession(data)
    }
    listSessions(user_id: string): Promise<IClientResponses> {
        return listAllSessions(user_id)
    }
}

export default MainUserClient;