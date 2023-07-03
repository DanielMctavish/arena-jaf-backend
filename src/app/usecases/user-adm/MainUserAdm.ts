import IArenaLocal from "../../entities/IArenaLocal";
import IMachines from "../../entities/IMachines";
import IProducts from "../../entities/IProducts";
import ISessions, { SESSION_STATUS } from "../../entities/ISessions";
import IUserClient from "../../entities/IUserClient";
import IUserAdm_usecases, { AdmResponses } from "../IUserAdm_usecases";

import { addCreditToClient } from "./AddCreditToClient";
import { createArenaLocation } from "./CreateArenaLocation";
import { createMachine } from "./CreateMachine";
import { createNewClient } from "./CreateNewClient";
import { login } from "./Login";
import { logout } from "./Logout";
import { createNewSession } from "./CreateNewSession";
import { deleteArenaLocation } from "./DeleteArenaLocation";
import { listAllClients } from "./ListAllClients";
import { deleteClient } from "./DeleteClient";
import { deleteMachine } from "./DeleteMachine";
import { deleteNewProduct } from "./DeleteNewProduct";
import { registerNewProduct } from "./RegisterNewProduct";
import { updateClient } from "./UpdateClient";
import { updateNewProduct } from "./UpdateNewProduct";
import { updateArenaLocation } from "./UpdateArenaLocation";

class MainUserAdm implements IUserAdm_usecases {

    addCreditToClient(value: number): Promise<AdmResponses> {
        return addCreditToClient(value)
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

    deleteArenaLocation(data: IArenaLocal): Promise<AdmResponses> {
        return deleteArenaLocation(data)
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

    updateClient(data: IUserClient): Promise<AdmResponses> {
        return updateClient(data)
    }

    updateNewProduct(data: IProducts): Promise<AdmResponses> {
        return updateNewProduct(data)
    }

    updateArenaLocation(data: IArenaLocal): Promise<AdmResponses> {
        return updateArenaLocation(data)
    }

    resumeSession(session_status: SESSION_STATUS): void {

    }
}

export default MainUserAdm