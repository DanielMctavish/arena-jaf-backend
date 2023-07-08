import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaMachineRepositorie from "../../../repositories/PrismaRepositories/PrismaMachineRepositorie";

export const deleteMachine = async (machine_id: string): Promise<AdmResponses> => {

    const MachineRepositorie = new PrismaMachineRepositorie()
    const currentMachine = await MachineRepositorie.delete(machine_id)

    return new Promise((resolve, reject) => {
        if (!machine_id) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }
        if(!currentMachine){
            return reject({status_code: 400, msg: 'erro ao tentar deletar máquina', body: currentMachine })
        }

        const response: AdmResponses = { status_code: 200, msg: 'máquina deletada com sucesso', body: currentMachine }
        resolve(response);
    })

}