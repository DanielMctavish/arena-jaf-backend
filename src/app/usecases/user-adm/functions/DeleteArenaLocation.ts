import IArenaLocal from "../../../entities/IArenaLocal";
import { AdmResponses } from "../../IUserAdm_usecases";

export const deleteArenaLocation = (data: IArenaLocal): Promise<AdmResponses> => {







    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        const response: AdmResponses = { status_code: 200, msg: 'arena deletada com sucesso', body: {} }
        resolve(response);
    })

}