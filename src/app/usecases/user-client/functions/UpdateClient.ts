import bcrypt from "bcrypt"
import IUserClient from "../../../entities/IUserClient";
import PrismaUserClientRepositorie from "../../../repositories/PrismaRepositories/PrismaUserClientRepositorie";
import IClientResponses from "../../../../http/res/IClientResponses";

const ClientRepositorie = new PrismaUserClientRepositorie()

export const updateClient = async (data: Partial<IUserClient>, client_id: string): Promise<IClientResponses> => {

    return new Promise(async (resolve, reject) => {
        if (!data) {
            return reject({ status_code: 404, msg: 'empty body' })
        }
        if (!client_id) {
            return reject({ status_code: 404, msg: 'client_id null' })
        }

        try {
            const currentClient = await ClientRepositorie.find(client_id)
            if (!currentClient) return reject({ status_code: 404, body: { msg: 'client not founded' } })

            var updatedClient
            //bcrypt hash
            if (data.senha) {
                const salt = await bcrypt.genSalt(10)
                const hash = await bcrypt.hash(data.senha, salt)
                updatedClient = await ClientRepositorie.update(client_id, { ...data, senha: hash })
            } else {
                updatedClient = await ClientRepositorie.update(client_id, { ...data })
            }

            const response: IClientResponses =
                { status_code: 201, body: { msg: 'Client Updated', body: updatedClient } }

            resolve(response)
        } catch (error: any) {
            reject({ status_code: 500, body: { msg: error.message } })
        }

    })

}