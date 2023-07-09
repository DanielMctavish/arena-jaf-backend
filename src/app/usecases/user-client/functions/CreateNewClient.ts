import IUserClient from "../../../entities/IUserClient";
import { ClientResponse } from "../../IUserClient_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";

export const createNewClient = async (data: IUserClient): Promise<ClientResponse> => {

    const ClientRepositorie = new PrismaUserClientRepositorie()
    const currentClient = await ClientRepositorie.create(data)


    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ status_code: 404, msg: 'nenhum valor retornado', body: currentClient })
        }

        if (!currentClient) return reject({ status_code: 400, msg: 'erro ao tentar criar cliente', body: currentClient })

        const response: ClientResponse = { status_code: 201, msg: 'cliente criado com sucesso', body: currentClient }
        resolve(response);
    })

}