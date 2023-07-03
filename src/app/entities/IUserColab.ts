import IArenaLocal from "./IArenaLocal"

interface IUserColab {
    id: string
    saldo: string
    email: string
    nome: string
    senha: string
    avatar_url: string
    local: IArenaLocal
}

export default IUserColab