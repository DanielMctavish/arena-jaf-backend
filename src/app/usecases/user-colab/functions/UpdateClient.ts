import { ColabResponse } from "../../IUserColab_usecases";
import IUserClient from "../../../entities/IUserClient";


export const updateClient = (data: IUserClient): Promise<ColabResponse> => {




    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: ColabResponse = { status_code: 200, msg: 'cliente atualizado com sucesso', body: {} }
        resolve(response);
    })

}