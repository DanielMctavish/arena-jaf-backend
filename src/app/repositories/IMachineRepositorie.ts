import IMachines from "../entities/IMachines"

interface IMachineRepositorie{
    create(data: IMachines): Promise<IMachines>
    find(machine_id: string): Promise<IMachines>
    update(data: Partial<IMachines>): Promise<IMachines>
    delete(data: IMachines): Promise<IMachines>
}

export default IMachineRepositorie