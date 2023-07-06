import { ColabResponse } from "../../IUserColab_usecases";

export const deleteNewProduct = (product_id: string): Promise<ColabResponse> => {




    return new Promise((resolve, reject) => {
        if (!product_id) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: ColabResponse = { status_code: 200, msg: 'produto deletado com sucesso', body: {} }
        resolve(response);
    })

}