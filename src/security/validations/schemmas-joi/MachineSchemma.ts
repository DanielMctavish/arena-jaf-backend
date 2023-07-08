import Joi from "joi";
import { userAdmSchema } from "./AdministradorSchemma";
import { arenaLocalSchema } from "./ArenaLocalSchemma";
import { userColabSchema } from "./UserColabSchemma";
import { sessionSchema } from "./SessionsSchemma";

export const machineSchemma: Joi.ObjectSchema = Joi.object({
    id: Joi.string().required(),
    arenaLocalId: Joi.string().required(),
    proprietario: userAdmSchema.optional(),
    userAdmId: Joi.string().required(),
    status: Joi.string().required(),
    local: arenaLocalSchema.allow(null).optional(),
    proprietario_colab: userColabSchema.allow(null).optional(),
    userColabId: Joi.string().allow(null).optional(),
    sessoes: Joi.array().items(sessionSchema).optional(),
})