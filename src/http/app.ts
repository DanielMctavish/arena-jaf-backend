import 'dotenv/config'
import express from 'express'
import cors from 'cors'


const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


//app.use('/', any_routes)



app.listen(process.env.PORT || 3001, () => {
    console.log('[ArenaJaf] Server running')
})

export default app
