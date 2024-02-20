import IMachines from "../../../entities/IMachines";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaMachineRepositorie from "../../../repositories/PrismaRepositories/PrismaMachineRepositorie";
import PrismaLocalRepositorie from "../../../repositories/PrismaRepositories/PrismaLocalRepositorie";
import PrismaUserAdmRepositorie from "../../../repositories/PrismaRepositories/PrismaUserAdmRepositorie";
// import validator from "../../../../security/validations/Joi";
// import { machineSchemma } from "../../../../security/validations/schemmas-joi/MachineSchemma";
const prismaMachine = new PrismaMachineRepositorie()
const prismaLocal = new PrismaLocalRepositorie()
const prismaUserAdm = new PrismaUserAdmRepositorie()

export const createMachine = async (data: IMachines): Promise<AdmResponses> => {

    return new Promise(async (resolve, reject) => {

        try {
            if (!data) {
                return reject({
                    status_code: 403,
                    msg: "Dados inválidos"
                })
            }
            if (!data.userAdmId) {
                return reject({
                    status_code: 403,
                    msg: "Dados inválidos"
                })
            }
            if (!data.nano_id) {
                return reject({
                    status_code: 403,
                    msg: "Dados inválidos"
                })
            }

            const currentAdm = await prismaUserAdm.find(data.userAdmId)
            const currentLocal = await prismaLocal.find(data.arenaLocalId)

            if (!currentAdm || !currentLocal) {
                return reject({
                    status_code: 403,
                    body: {
                        msg: "Adm ou local inválidos"
                    }
                })
            }

            const machineCreated = await prismaMachine.create(data)

            if (!machineCreated) return reject({ status_code: 401, msg: 'falha ao criar máquina', body: machineCreated })

            const response: AdmResponses = { status_code: 200, msg: 'máquina criada com sucesso', body: machineCreated }
            resolve(response);
        } catch (error: any) {
            return reject({ status_code: 500, msg: 'falha ao criar máquina', body: error })
        }

    })
}