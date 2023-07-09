import { ClientResponse } from "../../IUserClient_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";

export const login = async (email: string, password: string): Promise<ClientResponse> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()
    const currentClient = await UserClientRepositorie.findByEmail(email)


    return new Promise((resolve, reject) => {
        if (!email || !password) {
            return reject({ status_code: 404, body: { msg: 'nenhum valor retornado' } })
        }

        if (currentClient?.email !== email || currentClient.senha !== password) {
            return reject({ status_code: 401, msg: 'acesso não autorizado', body: currentClient?.email })
        }

        if (!currentClient) return reject({ status_code: 400, msg: 'ao tentar logar cliente', body: currentClient })

        const response: ClientResponse = { status_code: 200, msg: 'Cliente logado com sucesso', body: currentClient }
        resolve(response);
    })

}