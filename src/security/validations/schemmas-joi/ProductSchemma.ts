import Joi from "joi";

export const productSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.string().required(),
    nome: Joi.string().required(),
    url_img: Joi.string().required(),
    disponiveis: Joi.number().required(),
    value: Joi.number().required(),
    local: Joi.object().allow(null).optional(),
    arenaLocalId: Joi.string().required(),
    proprietario_id: Joi.string().required(),
    Sessions: Joi.object().allow(null).optional(),
    sessionsId: Joi.string().allow(null).optional(),
});