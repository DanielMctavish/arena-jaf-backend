import IArenaLocal from "./IArenaLocal"
import ISessions from "./ISessions"

interface IProducts {
    id: string
    owner_id:string
    name: string
    url_img: string
    available: number
    value: number
    local: IArenaLocal
    local_id: string
    Sessions: ISessions
    session_id: string 
    created_at: Date
    updated_at: Date
}

export default IProducts