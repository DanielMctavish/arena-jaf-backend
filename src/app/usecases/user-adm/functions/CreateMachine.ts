import IMachines from "../../../entities/IMachines";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaMachineRepositorie from "../../../repositories/PrismaRepositories/PrismaMachineRepositorie";
import validator from "../../../../security/validations/Joi";
import { machineSchemma } from "../../../../security/validations/schemmas-joi/MachineSchemma";

export const createMachine = async (data: IMachines): Promise<AdmResponses> => {
    const MachineRepositorie = new PrismaMachineRepositorie()
    const currentMachine = await MachineRepositorie.create(data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        validator(machineSchemma, data)

        if (!currentMachine) return reject({ status_code: 401, msg: 'falha ao criar máquina', body: currentMachine })

        const response: AdmResponses = { status_code: 200, msg: 'máquina criada com sucesso', body: currentMachine }
        resolve(response);
    })
}