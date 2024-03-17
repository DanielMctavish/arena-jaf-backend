import IUserAdm from "./IUserAdm"

interface IUserClient {
    id: string
    email: string
    saldo: number
    nome: string
    cpf: string
    senha: string
    avatar_url: string
    Administrator: IUserAdm
    administrator_id: string
    created_at: Date
    updated_at: Date
}


export default IUserClient;