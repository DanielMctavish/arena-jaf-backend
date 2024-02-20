import PrismaMachineRepositorie from "../../../repositories/PrismaRepositories/PrismaMachineRepositorie"
import { AdmResponses } from "../../IUserAdm_usecases"
const prismaMachine = new PrismaMachineRepositorie()

const listAllMachines = async (adm_id: string): Promise<AdmResponses> => {

    return new Promise(async (resolve, reject) => {

        try {
            if (!adm_id) {
                return reject({ status_code: 403, body: { msg: 'ADM ID nulo ou inválido' } })
            }

            const currentMachines = await prismaMachine.list(adm_id)

            if (!currentMachines) {
                return reject({status_code: 404, body: { msg: 'nenhum valor retornado' } })
            }

            return resolve({
                status_code: 200,
                msg: 'all machines',
                body: currentMachines
            })
        } catch (error: any) {
            return reject({
                status_code: 500,
                msg: 'error when try list machines',
                body: { msg: error.message }
            })
        }

    })

}


export default listAllMachines