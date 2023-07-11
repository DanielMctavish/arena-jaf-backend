import IArenaLocal from "../../entities/IArenaLocal";
import IMachines from "../../entities/IMachines";
import IProducts from "../../entities/IProducts";
import ISessions, { SESSION_STATUS } from "../../entities/ISessions";
import IUserClient from "../../entities/IUserClient";
import IUserAdm_usecases, { AdmResponses } from "../IUserAdm_usecases";

import { addCreditToClient } from "./functions/AddCreditToClient";
import { createArenaLocation } from "./functions/CreateArenaLocation";
import { createMachine } from "./functions/CreateMachine";
import { createNewClient } from "./functions/CreateNewClient";
import { login } from "./functions/Login";
import { logout } from "./functions/Logout";
import { createNewSession } from "./functions/CreateNewSession";
import { deleteArenaLocation } from "./functions/DeleteArenaLocation";
import { listAllClients } from "./functions/ListAllClients";
import { deleteClient } from "./functions/DeleteClient";
import { deleteMachine } from "./functions/DeleteMachine";
import { deleteNewProduct } from "./functions/DeleteNewProduct";
import { registerNewProduct } from "./functions/RegisterNewProduct";
import { updateClient } from "./functions/UpdateClient";
import { updateNewProduct } from "./functions/UpdateNewProduct";
import { updateArenaLocation } from "./functions/UpdateArenaLocation";
import ITransaction from "../../entities/ITransaction";

export interface IParams_id {
    id: string
}
class MainUserAdm implements IUserAdm_usecases {

    addCreditToClient(params_id: IParams_id, transaction: ITransaction): Promise<AdmResponses> {
        return addCreditToClient(params_id, transaction)
    }

    createArenaLocation(data: IArenaLocal): Promise<AdmResponses> {
        return createArenaLocation(data)
    }

    createMachine(data: IMachines): Promise<AdmResponses> {
        return createMachine(data)
    }

    createNewClient(data: IUserClient): Promise<AdmResponses> {
        return createNewClient(data)
    }

    login(email: string, password: string): Promise<AdmResponses> {
        return login(email, password)
    }

    logout(accessToken: string): Promise<AdmResponses> {
        return logout(accessToken)
    }

    createNewSession(data: ISessions): Promise<AdmResponses> {
        return createNewSession(data)
    }

    deleteArenaLocation(local_id: string): Promise<AdmResponses> {
        return deleteArenaLocation(local_id)
    }

    listAllClients(id_adm: string): Promise<AdmResponses> {
        return listAllClients(id_adm)
    }

    deleteClient(client_id: string): Promise<AdmResponses> {
        return deleteClient(client_id)
    }

    deleteMachine(machine_id: string): Promise<AdmResponses> {
        return deleteMachine(machine_id)
    }

    deleteNewProduct(product_id: string): Promise<AdmResponses> {
        return deleteNewProduct(product_id)
    }

    pauseSession(session_status: SESSION_STATUS): void {

    }

    registerNewProduct(data: IProducts): Promise<AdmResponses> {
        return registerNewProduct(data)
    }

    updateClient(client_id: string, data: IUserClient): Promise<AdmResponses> {
        return updateClient(client_id, data)
    }

    updateNewProduct(product_id: string, data: IProducts): Promise<AdmResponses> {
        return updateNewProduct(product_id, data)
    }

    updateArenaLocation(local_id: string, data: IArenaLocal): Promise<AdmResponses> {
        return updateArenaLocation(local_id, data)
    }

    resumeSession(session_status: SESSION_STATUS): void {

    }
}

export default MainUserAdm