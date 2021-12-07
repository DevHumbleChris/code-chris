import dotenv from 'dotenv'
import express, { Express } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import mainRoutes from './routes/mainRoutes'

dotenv.config()

const app: Express = express()
const PORT = 3000

// Middlewares.
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/api', mainRoutes)

app.listen(PORT, () => {
  console.log(`Backend Server Started At PORT: ${PORT}`)
})
