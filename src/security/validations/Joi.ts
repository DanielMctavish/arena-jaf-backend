import { ObjectSchema } from "joi";

interface JoiResponse {
    authenticator: boolean;
    msg: string;
}

async function validator(schema: ObjectSchema, data: object): Promise<JoiResponse> {
    try {
        await schema.validateAsync(data);
        return {
            authenticator: true,
            msg: "Data is valid",
        };
    } catch (error: any) {
        return {
            authenticator: false,
            msg: error.details[0].message,
        };
    }
}

export default validator;
