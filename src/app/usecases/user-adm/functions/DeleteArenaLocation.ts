import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaLocalRepositorie from "../../../repositories/PrismaRepositories/PrismaLocalRepositorie";

export const deleteArenaLocation = async (local_id: string): Promise<AdmResponses> => {
    const LocalRepositorie = new PrismaLocalRepositorie()
    const currentLocal = await LocalRepositorie.delete(local_id)

    return new Promise((resolve, reject) => {
        if (!local_id) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }


        if (!currentLocal) {
            return reject({ status_code: 401, msg: 'erro ao tentar deletar o local', body: currentLocal })
        }

        const response: AdmResponses = { status_code: 200, msg: 'arena deletada com sucesso', body: currentLocal }
        resolve(response);
    })

}