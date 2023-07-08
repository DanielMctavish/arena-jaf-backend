import Joi from "joi";
import { arenaLocalSchema } from "./ArenaLocalSchemma";
import { machineSchemma } from "./MachineSchemma";

export const userColabSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.string().required(),
    saldo: Joi.number().required(),
    email: Joi.string().email().required(),
    nome: Joi.string().required(),
    senha: Joi.string().required(),
    avatar_url: Joi.string().uri().required(),
    local: arenaLocalSchema.optional(),
    Machines: Joi.array().items(machineSchemma).optional(),
});