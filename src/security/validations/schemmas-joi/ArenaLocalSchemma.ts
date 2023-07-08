import Joi from "joi";


export const arenaLocalSchema: Joi.ObjectSchema = Joi.object({
  id: Joi.string().required(),
  nome: Joi.string().required(),
  end_url_google: Joi.string().required(),
  proprietario: Joi.object().optional(),
  userAdmId: Joi.string().required(),
  proprietario_colab: Joi.object().optional(),
  userColabId: Joi.string().allow(null).optional(),
  Sessions: Joi.array().optional(),
  Products: Joi.array().optional(),
  Machines: Joi.array().optional(),
});

