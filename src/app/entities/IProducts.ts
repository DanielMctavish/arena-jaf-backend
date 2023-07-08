import IArenaLocal from "./IArenaLocal"
import ISessions from "./ISessions"

interface IProducts {
    id: string
    nome: string
    url_img: string
    disponiveis: number
    value: number
    local?: IArenaLocal | null
    arenaLocalId: string
    proprietario_id: string
    Sessions?: ISessions | null
    sessionsId?: string | null
}

export default IProducts