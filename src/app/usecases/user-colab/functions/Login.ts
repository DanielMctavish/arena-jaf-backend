import { ColabResponse } from "../../IUserColab_usecases";

export const login = (email: string, password: string): Promise<ColabResponse> => {






    return new Promise((resolve, reject) => {
        if (!email || !password) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: ColabResponse = { status_code: 200, msg: 'Adm logado com sucesso', body: {} }
        resolve(response);
    })

}