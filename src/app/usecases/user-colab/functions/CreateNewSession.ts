import ISessions from "../../../entities/ISessions";
import { ColabResponse } from "../../IUserColab_usecases";

export const createNewSession = (data: ISessions): Promise<ColabResponse> => {




    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: ColabResponse = { status_code: 200, msg: 'sessão criada com sucesso', body: {} }
        resolve(response);
    })

}