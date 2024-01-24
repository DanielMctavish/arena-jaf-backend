import IArenaLocal from "../../../entities/IArenaLocal";
import { AdmResponses } from "../../IUserAdm_usecases";
import PrismaLocalRepositorie from "../../../repositories/PrismaRepositories/PrismaLocalRepositorie";
import validator from "../../../../security/validations/Joi";
import { arenaLocalSchema } from "../../../../security/validations/schemmas-joi/ArenaLocalSchemma";

export const updateArenaLocation = async (local_id: string, data: IArenaLocal): Promise<AdmResponses> => {

    const LocalRepositorie = new PrismaLocalRepositorie()

    return new Promise(async (resolve, reject) => {
        
        try {
            if (!data) {
                return reject({
                    status_code: 403,
                    msg: "data nulo ou inválido"
                })
            }
            const currentLocal = await LocalRepositorie.update(local_id, data)
            const response: AdmResponses = { status_code: 200, msg: 'local atualizado com sucesso', body: currentLocal }
            resolve(response);
        } catch (error) {
            reject({
                status_code: 500,
                msg: "Erro no servidor"
            })
        }

    })

}