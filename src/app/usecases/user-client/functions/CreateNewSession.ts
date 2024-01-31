import ISessions from "../../../entities/ISessions";
import PrismaSessionRepositorie from "../../../repositories/PrismaRepositories/PrismaSessionRepositorie";
import PrismaLocalRepositorie from "../../../repositories/PrismaRepositories/PrismaLocalRepositorie";
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import PrismaMachineRepositorie from "../../../repositories/PrismaRepositories/PrismaMachineRepositorie";
import IClientResponses from "../../../../http/res/IClientResponses";

const prismaSession = new PrismaSessionRepositorie()
const prismaLocal = new PrismaLocalRepositorie()
const prismaUserAdm = new PrismaUserAdmRepositorie()
const prismaUserClient = new PrismaUserClientRepositorie()
const prismaMachine = new PrismaMachineRepositorie()

export const createNewSession = async (data: ISessions): Promise<IClientResponses> => {


    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                return reject({ status_code: 404, body: { msg: 'nenhum data retornado' } })
            }

            //verify client, adm, machine and local existence
            const client = await prismaUserClient.find(data.client_id)
            if (!client) {
                return reject({ status_code: 404, body: { msg: 'cliente nao encontrado' } })
            }
            const adm = await prismaUserAdm.find(data.adm_id)
            if (!adm) {
                return reject({ status_code: 404, body: { msg: 'adm nao encontrado' } })
            }
            const machine = await prismaMachine.find(data.machine_id)
            if (!machine) {
                return reject({ status_code: 404, body: { msg: 'machine nao encontrado' } })
            }
            const local = await prismaLocal.find(data.local_id)
            if (!local) {
                return reject({ status_code: 404, body: { msg: 'local nao encontrado' } })
            }

            //operation create session
            const { duration, value, ...restData } = data
            const currentSession = await prismaSession.create({ ...restData, duration, value })

            if (!currentSession) return reject({ status_code: 400, message: 'erro ao tentar criar sessão', body: currentSession })

            await prismaUserAdm.update(adm.id, { saldo: adm.saldo + currentSession.value })

            const response: IClientResponses = { status_code: 201, body: { msg: 'sessão criada com sucesso', body: currentSession } }
            resolve(response);

        } catch (error: any) {

            return reject({ status_code: 500, body: { msg: error.message } })

        }
    })

}