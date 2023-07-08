import Joi from "joi";

export const userAdmSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.string().required(),
    saldo: Joi.number().required(),
    email: Joi.string().email().required(),
    nome: Joi.string().required(),
    senha: Joi.string().required(),
    avatar_url: Joi.string().uri().required(),
})


