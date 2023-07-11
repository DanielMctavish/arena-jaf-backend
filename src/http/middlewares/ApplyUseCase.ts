import { Request, Response } from 'express'




export const ApplyUseCase = (res: Response, usecase: Function, params?: object, body?: object) => {

    const handle = () => {


        usecase(params, body)
            .then((response: any) => {

                res.status(response.status_code).json(response.body)

            }).catch((err: any) => {

                res.status(err.status_code).json(err.body)

            })

    }

    handle()

}