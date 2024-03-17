import { Request, Response } from 'express'


export const ApplyUseCase = (usecase: Function) => {


    const handle = async (req: Request | any, res: Response) => {

        let data = {
            file: req.file,
            files: req.files,
            query: req.query,
            params: req.params,
            body: req.body
        }

        if (typeof usecase !== 'function') {
            return res.status(500).send({ message: 'Function Usecase Empty' });
        }

        await usecase(data.body, data?.query, data?.file, data?.files)
            .then((response: any) => {
                // console.log('resposta do applyusecase --> ', response);
                return res.status(response.status_code).send(response.body)
            }).catch((err: any) => {
                // console.log('erro do applyusecase --> ', err);
                return res.status(err.status_code).send(err.body)

            })

    }

    return handle

}