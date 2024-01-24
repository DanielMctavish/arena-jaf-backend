import { Router } from 'express'
const router = Router()
import MainUserClient from '../../app/usecases/user-client/MainUserClient'
import { ApplyUseCase } from '../middlewares/ApplyUseCase'
const MainClient = new MainUserClient()

import { generatedToken, verifyToken } from '../../security/auth/JWT'

router.get("/test", (req, res) => {
    res.status(200).send('ok! clientes operacional')
})

router.post("/create-client", (req, res) => { ApplyUseCase(res, MainClient.registerClient, req.query, req.body) })
router.post("/add-credit", verifyToken, (req, res) => { ApplyUseCase(res, MainClient.AddCredit, req.query, req.body) })
router.post("/create-session", verifyToken, (req, res) => { ApplyUseCase(res, MainClient.createNewSession, req.query, req.body) })
router.get("/all-sessions", verifyToken, (req, res) => { ApplyUseCase(res, MainClient.listSessions, req.query, req.body) })



//router.post("/login", generatedToken, (req, res) => { ApplyUseCase(res, MainClient.login, req.query, req.body) })
router.post("/logout", verifyToken)


export default router;