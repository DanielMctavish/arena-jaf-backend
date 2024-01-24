import { Router } from 'express'
const router = Router()
import MainUserClient from '../../app/usecases/user-client/MainUserClient'
import { ApplyUseCase } from '../middlewares/ApplyUseCase'
const MainClient = new MainUserClient()

import { generatedToken, verifyToken } from '../../security/auth/JWT'

router.get("/test", (req, res) => {
    res.status(200).send('ok! clientes operacional')
})

router.post("/create-client", (req, res) => { ApplyUseCase(res, MainClient.registerClient, req.body, req.query) })
router.post("/add-credit", verifyToken, (req, res) => { ApplyUseCase(res, MainClient.AddCredit, req.body, req.query) })
router.post("/create-session", verifyToken, (req, res) => { ApplyUseCase(res, MainClient.createNewSession, req.body, req.query) })
router.get("/all-sessions", verifyToken, (req, res) => { ApplyUseCase(res, MainClient.listSessions, req.body, req.query) })

router.post("/login", (req, res) => { ApplyUseCase(res, MainClient.login, req.body, req.query) })
//router.post("/logout", verifyToken)


export default router;