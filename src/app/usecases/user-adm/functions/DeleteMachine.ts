import { AdmResponses } from "../../IUserAdm_usecases";

export const deleteMachine = (machine_id: string): Promise<AdmResponses> => {




    return new Promise((resolve, reject) => {
        if (!machine_id) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'máquina deletada com sucesso', body: {} }
        resolve(response);
    })

}