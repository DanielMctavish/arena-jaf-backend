import ISessions, { SESSION_STATUS } from "../../entities/ISessions";
import IUserClient from "../../entities/IUserClient";
import IUserColab_usecases, { ColabResponse } from "../IUserColab_usecases";

import createNewClient from "./functions/CreateNewClient";
import { listAllClients } from "./functions/ListAllClients";
import { updateClient } from "./functions/UpdateClient";
import { addCreditToClient } from "./functions/AddCreditToClient";
import { deleteClient } from "./functions/DeleteClient";
import { createNewSession } from "./functions/CreateNewSession";
import { login } from "./functions/Login";
import { logout } from "./functions/Logout";
import { registerNewProduct } from "./functions/RegisterNewProduct";
import { updateNewProduct } from "./functions/UpdateNewProduct";
import { deleteNewProduct } from "./functions/DeleteNewProduct";
import IProducts from "../../entities/IProducts";


class MainUserColab implements IUserColab_usecases {
    //clients
    createNewClient(data: IUserClient): Promise<ColabResponse> {
        return createNewClient(data)
    }
    addCreditToClient(value: number): Promise<ColabResponse> {
        return addCreditToClient(value)
    }
    deleteClient(user_id: string): Promise<ColabResponse> {
        return deleteClient(user_id)
    }
    updateClient(data: IUserClient): Promise<ColabResponse> {
        return updateClient(data)
    }
    listAllClients(id_adm: string): Promise<ColabResponse> {
        return listAllClients(id_adm)
    }
    //sessões
    createNewSession(data: ISessions): Promise<ColabResponse> {
        return createNewSession(data)
    }

    pauseSession(session_status: SESSION_STATUS): void {

    }

    resumeSession(session_status: SESSION_STATUS): void {

    }
    login(email: string, password: string): Promise<ColabResponse> {
        return login(email, password)
    }
    logout(accessToken: string): Promise<ColabResponse> {
        return logout(accessToken)
    }
    //produtos
    registerNewProduct(data: IProducts): Promise<ColabResponse> {
        return registerNewProduct(data)
    }
    updateNewProduct(data: IProducts): Promise<ColabResponse> {
        return updateNewProduct(data)
    }
    deleteNewProduct(product_id: string): Promise<ColabResponse> {
        return deleteNewProduct(product_id)
    }

}


export default MainUserColab