import { Request, Response } from 'express'

const trialIndex = (req: Request, res: Response): void => {
  res.json({
    message: 'Controllers Set'
  })
}

export default {
  trialIndex
}
