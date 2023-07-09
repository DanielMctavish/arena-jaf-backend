"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//métodos para pagamento.......................................................
const METHOD_PAYMENT = {
    CREDITO: 'CREDITO',
    PIX: 'PIX'
};
//status de pagamento.......................................................
const STATUS_PAYMENT = {
    APPROVED: 'APPROVED',
    PENDENT: 'PENDENT',
    CANCEL: 'CANCEL'
};
//tipo de transações de pagamento.......................................................
const TRANSACTION_TYPE = {
    PRODUCT: 'PRODUCT',
    MACHINE_CREDIT: 'MACHINE_CREDIT',
    SPLIT: 'SPLIT'
};
