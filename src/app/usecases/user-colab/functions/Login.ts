import { ColabResponse } from "../../IUserColab_usecases";
import PrismaUserColabRepositorie from "../../../repositories/PrismaRepositories/PrismaUserColabRepositorie";

export const login = async (email: string, password: string): Promise<ColabResponse> => {
    const UserColabRepositorie = new PrismaUserColabRepositorie()
    const currentColaborador = await UserColabRepositorie.findByEmail(email)

    return new Promise((resolve, reject) => {
        if (!email || !password) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        if (currentColaborador?.email !== email) return reject()
        if (currentColaborador.senha !== password) return reject()

        const response: ColabResponse = { status_code: 200, msg: 'Adm logado com sucesso', body: {} }
        resolve(response);
    })

}