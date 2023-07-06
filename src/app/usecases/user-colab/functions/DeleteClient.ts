import { ColabResponse } from "../../IUserColab_usecases";

export const deleteClient = (client_id: string): Promise<ColabResponse> => {




    return new Promise((resolve, reject) => {
        if (!client_id) {
            return reject({ body: { msg: 'client_id nulo ou inválido' } })
        }

        const response: ColabResponse = { status_code: 200, msg: 'cliente deletado com sucesso', body: {} }
        resolve(response);
    })

}