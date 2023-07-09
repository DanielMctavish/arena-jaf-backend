import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import { ColabResponse } from "../../IUserColab_usecases";

export const deleteClient = (client_id: string): Promise<ColabResponse> => {
    const UserClientRepositorie = new PrismaUserClientRepositorie()
    const currentClient = UserClientRepositorie.delete(client_id)

    return new Promise((resolve, reject) => {
        if (!client_id) {
            return reject({ body: { msg: 'client_id nulo ou inválido' } })
        }

        if(!currentClient){
            return reject({status_code: 400, msg: 'ao ao tentar deletar cliente', body: currentClient })
        }

        const response: ColabResponse = { status_code: 200, msg: 'cliente deletado com sucesso', body: {} }
        resolve(response);
    })

}