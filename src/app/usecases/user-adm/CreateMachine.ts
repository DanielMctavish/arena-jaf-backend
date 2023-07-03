import IMachines from "../../entities/IMachines";
import { AdmResponses } from "../IUserAdm_usecases";

export const createMachine = (data: IMachines): Promise<AdmResponses> => {




    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'máquina criada com sucesso', body: {} }
        resolve(response);
    })
}