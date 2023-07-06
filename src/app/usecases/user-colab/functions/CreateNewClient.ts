import IUserClient from "../../../entities/IUserClient";
import { ColabResponse } from "../../IUserColab_usecases";


const createNewClient = (data: IUserClient): Promise<ColabResponse> => {


    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: ColabResponse = { status_code: 200, msg: 'novo cliente criado com sucesso', body: {} }
        resolve(response);
    })
}

export default createNewClient