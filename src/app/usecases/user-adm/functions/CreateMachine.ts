import IMachines from "../../../entities/IMachines";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaMachineRepositorie from "../../../repositories/PrismaRepositories/PrismaMachineRepositorie";

export const createMachine = async (data: IMachines): Promise<AdmResponses> => {
    const MachineRepositorie = new PrismaMachineRepositorie()
    const currentMachine = await MachineRepositorie.create(data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        if (!currentMachine) return reject({ status_code: 401, msg: 'falha ao criar máquina', body: currentMachine })

        const response: AdmResponses = { status_code: 200, msg: 'máquina criada com sucesso', body: currentMachine }
        resolve(response);
    })
}