import IArenaLocal from "./IArenaLocal"
import ISessions from "./ISessions"

interface IProducts {
    id: string
    owner_id: string
    name: string
    url_img: string
    available: number
    value: number
    local?: IArenaLocal | any
    local_id?: string | any
    Sessions?: ISessions | any
    session_id?: string | any
    created_at: Date
    updated_at: Date
}

export default IProducts