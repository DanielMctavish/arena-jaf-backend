import { ColabResponse } from "../../IUserColab_usecases";
import IUserClient from "../../../entities/IUserClient";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";


export const updateClient = async (client_id: string, data: IUserClient): Promise<ColabResponse> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()
    const currentClientRepositorie = await UserClientRepositorie.update(client_id, data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }
        if (!currentClientRepositorie) return reject({ status_code: 400, msg: 'erro ao tentar atualizar cliente', body: currentClientRepositorie })

        const response: ColabResponse = { status_code: 200, msg: 'cliente atualizado com sucesso', body: {} }
        resolve(response);
    })

}