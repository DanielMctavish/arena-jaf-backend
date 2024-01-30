import { Router } from 'express'
const router = Router()
import MainUserClient from '../../app/usecases/user-client/MainUserClient'
import { ApplyUseCase } from '../middlewares/ApplyUseCase'
const MainClient = new MainUserClient()

import { generatedToken, verifyToken } from '../../security/auth/JWT'

router.get("/test", (req, res) => {
    res.status(200).send('ok! clientes operacional')
})

router.post("/create-client", (req, res) => { ApplyUseCase(MainClient.registerClient) })
router.post("/add-credit", verifyToken, (req, res) => { ApplyUseCase(MainClient.AddCredit) })
router.post("/create-session", verifyToken, (req, res) => { ApplyUseCase(MainClient.createNewSession) })
router.get("/all-sessions", verifyToken, (req, res) => { ApplyUseCase(MainClient.listSessions) })

router.post("/login", (req, res) => { ApplyUseCase(MainClient.login) })
//router.post("/logout", verifyToken)


export default router;