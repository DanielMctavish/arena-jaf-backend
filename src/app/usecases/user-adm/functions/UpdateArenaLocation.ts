import IArenaLocal from "../../../entities/IArenaLocal";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaLocalRepositorie from "../../../repositories/PrismaRepositories/PrismaLocalRepositorie";

export const updateArenaLocation = async (local_id: string, data: IArenaLocal): Promise<AdmResponses> => {

    const LocalRepositorie = new PrismaLocalRepositorie()
    const currentLocal = await LocalRepositorie.update(local_id, data)


    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }
        if (!currentLocal) return reject({ status_code: 400, msg: 'erro ao tentar atualizar local', body: currentLocal })

        const response: AdmResponses = { status_code: 200, msg: 'local atualizado com sucesso', body: currentLocal }
        resolve(response);
    })

}