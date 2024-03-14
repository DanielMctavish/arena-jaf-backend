import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import administratorRoutes from "./routes/AdministratorRoutes"
import clientRoutes from "./routes/ClientRoutes"
import productRoutes from "./routes/ProductRoutes"


const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3002',
    credentials: true,
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}))

app.get('/check', (req, res) => {
    res.send('arena JAF | Oficial route')
})

app.use("/adm", administratorRoutes)
app.use("/client", clientRoutes)
app.use("/product", productRoutes)

app.listen(process.env.PORT || 3033, () => {
    console.log('[ArenaJaf] Server running on PORT -> ', process.env.PORT)
})

export default app
