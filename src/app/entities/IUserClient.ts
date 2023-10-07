interface IUserClient {
    id: string
    email: string
    proprietario_id?: string | null
    saldo: number
    nome: string
    cpf: string
    senha: string
    avatar_url: string
}

export default IUserClient;