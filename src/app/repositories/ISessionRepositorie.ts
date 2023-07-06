import ISessions from "../entities/ISessions"

interface ISessionRepositorie {
    create(data: ISessions): Promise<ISessions>
    find(session_id: string): Promise<ISessions>
    update(data: Partial<ISessions>): Promise<ISessions>
    delete(data: ISessions): Promise<ISessions>
}

export default ISessionRepositorie