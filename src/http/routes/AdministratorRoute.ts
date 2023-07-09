import { Router } from 'express'

const router = Router()


router.get("/", (req, res) => {
    res.send('rota do adm!')
})


export default router;