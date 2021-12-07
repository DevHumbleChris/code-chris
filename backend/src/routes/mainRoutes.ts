import express from 'express'
import mainControllers from '../controllers/mainControllers'

const route = express.Router()

// Trial Get Route
route.get('/', mainControllers.trialIndex)

export default route
