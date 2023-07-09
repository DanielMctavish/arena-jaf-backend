import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import administratorRoute from "./routes/AdministratorRoute"


const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use("/adm", administratorRoute)

app.use('/', (req, res) => {
    res.send('arena JAF | Oficial route')
})


app.listen(process.env.PORT || 3001, () => {
    console.log('[ArenaJaf] Server running')
})

export default app
