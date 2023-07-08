import IArenaLocal from "../../../entities/IArenaLocal";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaLocalRepositorie from "../../../repositories/PrismaRepositories/PrismaLocalRepositorie";

export const createArenaLocation = async (data: IArenaLocal): Promise<AdmResponses> => {
    const LocalRepositorie = new PrismaLocalRepositorie()
    const currentLocal = await LocalRepositorie.create(data)

    return new Promise((resolve, reject) => {
        if (!data) {
            return reject({ body: { msg: 'nenhum valor retornado' } })
        }

        if (!currentLocal) {
            return reject({ status_code: 401, msg: 'falha ao tentar criar um local', body: currentLocal })
        }

        const response: AdmResponses = { status_code: 200, msg: 'local criado com sucesso', body: currentLocal }
        resolve(response);
    })
}