import Joi from "joi";


const METHOD_PAYMENT = {
    CREDITO: 'CREDITO',
    PIX: 'PIX',
};

const STATUS_PAYMENT = {
    APPROVED: 'APPROVED',
    PENDENT: 'PENDENT',
    CANCEL: 'CANCEL',
};

const TRANSACTION_TYPE = {
    PRODUCT: 'PRODUCT',
    MACHINE_CREDIT: 'MACHINE_CREDIT',
    SPLIT: 'SPLIT',
};

export const transactionSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.string().required(),
    payer_id: Joi.string().required(),
    benefited_id: Joi.string().required(),
    value: Joi.number().required(),
    transaction_type: Joi.string().valid(...Object.values(TRANSACTION_TYPE)).required(),
    method: Joi.string().valid(...Object.values(METHOD_PAYMENT)).required(),
    status: Joi.string().valid(...Object.values(STATUS_PAYMENT)).required(),
});