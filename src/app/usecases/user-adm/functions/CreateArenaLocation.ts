import IArenaLocal from "../../../entities/IArenaLocal";
import { AdmResponses } from "../../IUserAdm_usecases";

export const createArenaLocation = (data: IArenaLocal): Promise<AdmResponses> => {




    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'local criado com sucesso', body: {} }
        resolve(response);
    })
}