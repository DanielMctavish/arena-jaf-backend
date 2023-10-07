import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import administratorRoutes from "./routes/AdministratorRoutes"
import clientRoutes from "./routes/ClientRoutes"


const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use("/adm", administratorRoutes)
app.use("/client", clientRoutes)

app.use('/', (req, res) => {
    res.send('arena JAF | Oficial route')
})


app.listen(process.env.PORT || 3033, () => {
    console.log('[ArenaJaf] Server running on PORT -> ', process.env.PORT)
})

export default app
