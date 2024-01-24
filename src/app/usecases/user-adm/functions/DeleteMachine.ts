import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaMachineRepositorie from "../../../repositories/PrismaRepositories/PrismaMachineRepositorie";

export const deleteMachine = async (machine_id: string): Promise<AdmResponses> => {

    const MachineRepositorie = new PrismaMachineRepositorie()

    return new Promise(async (resolve, reject) => {
        
        try {

            if (!machine_id) {
                return reject({
                    status_code: 403,
                    msg: "machine_id nulo ou inválido"
                })
            }
            const currentMachine = await MachineRepositorie.delete(machine_id)
            const response: AdmResponses = { status_code: 200, msg: 'máquina deletada com sucesso', body: currentMachine }
            resolve(response);

        } catch (error) {
            
            reject({
                status_code: 500,
                msg: "Erro no servidor"
            })

        }

    })

}