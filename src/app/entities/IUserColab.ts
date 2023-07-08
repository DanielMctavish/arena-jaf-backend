import IArenaLocal from "./IArenaLocal"
import IMachines from "./IMachines"

interface IUserColab {
    id: string
    saldo: number
    email: string
    nome: string
    senha: string
    avatar_url: string
    local?: IArenaLocal 
    Machines?: IMachines[]
}

export default IUserColab