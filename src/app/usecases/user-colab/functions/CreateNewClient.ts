import IUserClient from "../../../entities/IUserClient";
import { ColabResponse } from "../../IUserColab_usecases";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";

const createNewClient = async (data: IUserClient): Promise<ColabResponse> => {

    const ClientRepositorie = new PrismaUserClientRepositorie()
    const currentClient = await ClientRepositorie.create(data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        if(!currentClient) return reject({ status_code: 400, msg: 'erro ao tentar criar cliente', body: currentClient })

        const response: ColabResponse = { status_code: 201, msg: 'novo cliente criado com sucesso', body: currentClient }
        resolve(response);
    })
}

export default createNewClient