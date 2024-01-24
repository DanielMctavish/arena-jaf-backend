import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import IClientResponses from "../../../../http/res/IClientResponses";
import IUserClient from "../../../entities/IUserClient";

export const login = async (data: IUserClient): Promise<IClientResponses> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()

    return new Promise(async (resolve, reject) => {
        if (!data) {
            return reject({ status_code: 404, body: { msg: 'nenhum valor retornado' } })
        }

        const currentClient = await UserClientRepositorie.findByEmail(data.email)
        if(!currentClient){
            return reject({ status_code: 404, body: { msg: 'Usuário não encontrado' } })
        }

        const response: IClientResponses = { status_code: 200, message: { msg: 'Cliente logado com sucesso', body: currentClient } }
        resolve(response);
    })

}