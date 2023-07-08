import Joi from "joi";
import { productSchema } from "./ProductSchemma";

export const sessionSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.string().required(),
    proprietario_id: Joi.string().required(),
    duration: Joi.number().required(),
    value: Joi.number().required(),
    user: Joi.object().optional(),
    userClientId: Joi.string().required(),
    status: Joi.string().valid('RUNNING', 'PAUSED').required(),
    products: Joi.array().items(productSchema).optional(),
    location: Joi.object().optional(),
    arenaLocalId: Joi.string().required(),
    Machine: Joi.object().optional(),
    machineId: Joi.string().required(),
});