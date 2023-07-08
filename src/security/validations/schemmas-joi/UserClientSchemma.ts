import Joi from "joi";


export const userClientSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.string().required(),
    proprietario_id: Joi.string().required(),
    saldo: Joi.number().required(),
    nome: Joi.string().required(),
    cpf: Joi.string().required(),
    senha: Joi.string().required(),
    avatar_url: Joi.string().uri().required(),
});