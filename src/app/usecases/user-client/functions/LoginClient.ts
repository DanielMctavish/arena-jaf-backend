import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import IClientResponses from "../../../../http/res/IClientResponses";
import IUserClient from "../../../entities/IUserClient";
import { verifyPassword } from "../../../../security/auth/Bcrypt";
import { generatedToken } from "../../../../security/auth/JWT";

const prismaClient = new PrismaUserClientRepositorie()

export const loginClient = async (data: IUserClient): Promise<IClientResponses> => {

    return new Promise(async (resolve, reject) => {

        try {

            if (!data) {
                return reject({ status_code: 403, body: { msg: 'nenhum valor enviado' } })
            }

            const currentClient = await prismaClient.findByEmail(data.email)
            if (!currentClient) {
                return reject({ status_code: 404, body: { msg: 'Usuário não encontrado' } })
            }

            //bcrypt verify password
            const bcryptResult = await verifyPassword(data.senha, currentClient.senha)
            if (!bcryptResult) {
                return reject({ status_code: 403, body: { msg: 'Senha incorreta' } })
            }

            const token = generatedToken('login-arena-client', currentClient.id)

            const response: IClientResponses = { status_code: 200, body: { token, msg: 'Cliente logado com sucesso', body: currentClient } }
            resolve(response);

        } catch (error: any) {
            return reject({ status_code: 500, body: { msg: error } })
        }

    })

}