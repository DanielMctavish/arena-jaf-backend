import IMachines from "../entities/IMachines"

interface IMachineRepositorie {
    create(data: IMachines): Promise<IMachines>
    find(machine_id: string): Promise<IMachines | null>
    list(adm_id: string): Promise<IMachines[]>
    update(machine_id: string, data: IMachines): Promise<IMachines>
    delete(machine_id: string): Promise<IMachines>
}

export default IMachineRepositorie