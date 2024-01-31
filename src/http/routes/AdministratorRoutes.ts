import { Router } from 'express'
const router = Router()
import { generatedToken, verifyToken } from '../../security/auth/JWT'
import { ApplyUseCase } from '../middlewares/ApplyUseCase'
import MainUserAdm from '../../app/usecases/user-adm/MainUserAdm'

const mainAdm = new MainUserAdm()

router.post("/create-account", (req, res) => { ApplyUseCase(mainAdm.CreateAdm) })//testado
router.post("/add-credit", verifyToken, (req, res) => { ApplyUseCase(mainAdm.addCreditToClient) })//
router.post("/create-local", verifyToken, (req, res) => { ApplyUseCase(mainAdm.createArenaLocation) })
router.post("/create-machine", verifyToken, (req, res) => { ApplyUseCase(mainAdm.createMachine) })
router.post("/create-client", verifyToken, (req, res) => { ApplyUseCase(mainAdm.createNewClient) })
router.post("/create-session", verifyToken, (req, res) => { ApplyUseCase(mainAdm.createNewSession) })
router.delete("/delete-client", verifyToken, (req, res) => { ApplyUseCase(mainAdm.deleteClient) })
router.delete("/delete-machine", verifyToken, (req, res) => { ApplyUseCase(mainAdm.deleteMachine) })
router.delete("/delete-product", verifyToken, (req, res) => { ApplyUseCase(mainAdm.deleteNewProduct) })
router.get("/all-clients", verifyToken, (req, res) => { ApplyUseCase(mainAdm.listAllClients) })
router.post("/create-product", verifyToken, (req, res) => { ApplyUseCase(mainAdm.registerNewProduct) })// revisar prisma criação de produto
router.patch("/update-local", verifyToken, (req, res) => { ApplyUseCase(mainAdm.updateArenaLocation) })
router.patch("/update-client", verifyToken, (req, res) => { ApplyUseCase(mainAdm.updateClient) })
router.patch("/update-product", verifyToken, (req, res) => { ApplyUseCase(mainAdm.updateNewProduct) })

//ACCESS........................................................
router.post("/login", (req, res) => { ApplyUseCase(mainAdm.login) })//testado
router.post("/logout", verifyToken)

export default router;