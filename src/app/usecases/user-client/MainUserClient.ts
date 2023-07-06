import ISessions from "../../entities/ISessions";
import ITransaction from "../../entities/ITransaction";
import IUserClient from "../../entities/IUserClient";
import IUserClient_usecases, { ClientResponse } from "../IUserClient_usecases";

import createNewClient from "../user-colab/functions/CreateNewClient";
import { login } from "./functions/Login";
import { logout } from "./functions/Logout";
import { addCreditToClient } from "./functions/AddCreditToClient";
import { createNewSession } from "./functions/CreateNewSession";
import { listAllSessions } from "./functions/ListAllSessions";

class MainUserClient implements IUserClient_usecases {
    registerClient(data: IUserClient): Promise<ClientResponse> {
        return createNewClient(data)
    }
    login(email: string, password: string): Promise<ClientResponse> {
        return login(email, password)
    }
    logout(email: string, accessToken: string): Promise<ClientResponse> {
        return logout(accessToken)
    }
    AddCredit(transaction: ITransaction): Promise<ClientResponse> {
        return addCreditToClient(transaction)
    }
    createNewSession(data: ISessions): Promise<ClientResponse> {
        return createNewSession(data)
    }
    listSessions(user_id: string): Promise<ClientResponse> {
        return listAllSessions(user_id)
    }
}

export default MainUserClient;