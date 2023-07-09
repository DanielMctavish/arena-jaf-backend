import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import { ColabResponse } from "../../IUserColab_usecases";


export const listAllClients = (id_colab: string): Promise<ColabResponse> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()
    const currentClient = UserClientRepositorie.findAll(id_colab)

    return new Promise((resolve, reject) => {
        if (!id_colab) {
            return reject({ body: { msg: 'COLAB ID nulo ou inválido' } })
        }

        if (!currentClient) {
            return reject({ status_code: 400, msg: 'erro ao tentar listar clientes.', body: currentClient })
        }


        const response: ColabResponse = { status_code: 200, msg: 'lista de todos os clientes', body: {} }
        resolve(response);
    })

}