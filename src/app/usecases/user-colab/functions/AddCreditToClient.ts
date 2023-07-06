import { ColabResponse } from "../../IUserColab_usecases";

export const addCreditToClient = (value: number): Promise<ColabResponse> => {







    
    return new Promise((resolve, reject) => {

        if (!value) {
            reject({ status_code: 200, msg: 'crédito adicionado', body: { msg: 'nenhum valor retornado' } })
        }

        const response: ColabResponse = { status_code: 200, msg: 'crédito adicionado', body: {} }
        resolve(response);
    });
}