import IUserAdm from "./IUserAdm"

interface ITransaction {
    id: string
    UserAdm?: IUserAdm
    userAdmId?:string
    value: number
    transaction_type: TRANSACTION_TYPE
    product_description?: string | null
    method: METHOD_PAYMENT
    status: STATUS_PAYMENT
}



//métodos para pagamento.......................................................
const METHOD_PAYMENT: { [x: string]: 'CREDITO' | 'PIX' } = {
    CREDITO: 'CREDITO',
    PIX: 'PIX'
}

export type METHOD_PAYMENT = typeof METHOD_PAYMENT[keyof typeof METHOD_PAYMENT]

//status de pagamento.......................................................
const STATUS_PAYMENT: { [x: string]: 'APPROVED' | 'PENDENT' | 'CANCEL' } = {
    APPROVED: 'APPROVED',
    PENDENT: 'PENDENT',
    CANCEL: 'CANCEL'
}

export type STATUS_PAYMENT = typeof STATUS_PAYMENT[keyof typeof STATUS_PAYMENT]

//tipo de transações de pagamento.......................................................
const TRANSACTION_TYPE: { [x: string]: 'PRODUCT' | 'MACHINE_CREDIT' | 'SPLIT' } = {
    PRODUCT: 'PRODUCT',
    MACHINE_CREDIT: 'MACHINE_CREDIT',
    SPLIT: 'SPLIT'
}

export type TRANSACTION_TYPE = typeof TRANSACTION_TYPE[keyof typeof TRANSACTION_TYPE]

export default ITransaction;