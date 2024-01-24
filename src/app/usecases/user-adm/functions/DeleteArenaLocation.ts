import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaLocalRepositorie from "../../../repositories/PrismaRepositories/PrismaLocalRepositorie";

export const deleteArenaLocation = async (local_id: string): Promise<AdmResponses> => {
    const LocalRepositorie = new PrismaLocalRepositorie()

    return new Promise(async (resolve, reject) => {

        try {

            if (!local_id) {
                return reject({ body: { msg: 'nenhum valor retornado' } })
            }
            const currentLocal = await LocalRepositorie.delete(local_id)
            if (!currentLocal) {
                return reject({ status_code: 401, msg: 'erro ao tentar deletar o local', body: currentLocal })
            }
            const response: AdmResponses = { status_code: 200, msg: 'arena deletada com sucesso', body: currentLocal }
            resolve(response);

        } catch (error) {

            reject({ status_code: 500, msg: "Erro no servidor" })

        }

    })

}