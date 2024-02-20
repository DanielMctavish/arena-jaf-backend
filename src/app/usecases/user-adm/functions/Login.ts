import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie";
import { verifyPassword } from "../../../../security/auth/Bcrypt";
import IUserAdm from "../../../entities/IUserAdm";
import { generatedToken } from "../../../../security/auth/JWT";

const prismaAdm = new PrismaUserAdmRepositorie()

export const login = async (data: Partial<IUserAdm>): Promise<AdmResponses> => {

    //console.log('informações data --> ', data);


    return new Promise(async (resolve, reject) => {
        if (!data.email) {
            return reject({
                status_code: 403,
                body: {
                    msg: 'Email não informado'
                }
            })
        }


        await prismaAdm.findByEmail(data.email).then(async (user: IUserAdm | null) => {

            if (!user) {
                return reject({
                    status_code: 404,
                    body: {
                        msg: 'Usuário não encontrado'
                    }
                })
            }

            if (!data.senha) {
                return reject({
                    status_code: 403,
                    body: {
                        msg: 'Senha não informada'
                    }
                })
            }

            //console.log('observando senhas --> ', data.senha, user.senha);

            const passwordCheck = await verifyPassword(data.senha, user.senha)
            if (!passwordCheck) {
                return reject({
                    status_code: 401,
                    msg: "Invalid password"
                })
            }

            return resolve({
                status_code: 200,
                msg: 'Login realizado com sucesso',
                body: {
                    token: generatedToken('user-login-adm', user.id),
                    name: user.nome,
                    email: user.email
                }
            })

        }).catch(err => {
            reject({
                status_code: 500,
                msg: 'Erro no Servidor',
                body: null
            })
        })

    })
}