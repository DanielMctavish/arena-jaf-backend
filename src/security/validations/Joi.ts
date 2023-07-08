import { ObjectSchema } from "joi";

interface JoiResponse {
    status_code: number
    authenticator: boolean;
    msg: string;
}

async function validator(schema: ObjectSchema, data: object): Promise<Partial<JoiResponse>> {
    
    try {
        await schema.validateAsync(data);
        return {
            authenticator: true,
            msg: "Data is valid",
        };
    } catch (error: any) {
        return {
            status_code: 400,
            authenticator: false,
            msg: error.details[0].message,
        };
    }
}

export default validator;
