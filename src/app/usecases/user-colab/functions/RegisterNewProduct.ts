import IProducts from "../../../entities/IProducts";
import { ColabResponse } from "../../IUserColab_usecases";

export const registerNewProduct = (data: IProducts): Promise<ColabResponse> => {




    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: ColabResponse = { status_code: 200, msg: 'produto criado com sucesso', body: {} }
        resolve(response);
    })

}