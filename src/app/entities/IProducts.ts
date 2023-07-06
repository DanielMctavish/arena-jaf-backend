import IArenaLocal from "./IArenaLocal"

interface IProducts {
    id: string
    nome: string
    disponiveis: number
    value: number
    local: IArenaLocal
    proprietario_id: string
}

export default IProducts