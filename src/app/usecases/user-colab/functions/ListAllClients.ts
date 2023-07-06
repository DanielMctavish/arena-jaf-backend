import { ColabResponse } from "../../IUserColab_usecases";


export const listAllClients = (id_adm: string): Promise<ColabResponse> => {




    return new Promise((resolve, reject) => {
        if (!id_adm) {
            return reject({ body: { msg: 'ADM ID nulo ou inválido' } })
        }

        const response: ColabResponse = { status_code: 200, msg: 'lista de todos os clientes', body: {} }
        resolve(response);
    })

}