import { Router } from 'express'
const router = Router()
import { generatedToken, verifyToken } from '../../security/auth/JWT'
import { ApplyUseCase } from '../middlewares/ApplyUseCase'
import MainUserAdm from '../../app/usecases/user-adm/MainUserAdm'

const mainAdm = new MainUserAdm()

router.post("/create-account", (req, res) => { ApplyUseCase(res, mainAdm.CreateAdm, req.query, req.body) })//
router.post("/add-credit", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.addCreditToClient, req.query, req.body) })
router.post("/create-local", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.createArenaLocation, req.query, req.body) })
router.post("/create-machine", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.createMachine, req.query, req.body) })
router.post("/create-client", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.createNewClient, req.query, req.body) })
router.post("/create-session", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.createNewSession, req.query, req.body) })
router.delete("/delete-client", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.deleteClient, req.query, req.body) })
router.delete("/delete-machine", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.deleteMachine, req.query, req.body) })
router.delete("/delete-product", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.deleteNewProduct, req.query, req.body) })
router.get("/all-clients", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.listAllClients, req.query, req.body) })
router.post("/create-product", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.registerNewProduct, req.query, req.body) })// revisar prisma criação de produto
router.patch("/update-local", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.updateArenaLocation, req.query, req.body) })
router.patch("/update-client", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.updateClient, req.query, req.body) })
router.patch("/update-product", verifyToken, (req, res) => { ApplyUseCase(res, mainAdm.updateNewProduct, req.query, req.body) })

//ACCESS........................................................
router.post("/login", generatedToken)
router.post("/logout", verifyToken)

export default router;