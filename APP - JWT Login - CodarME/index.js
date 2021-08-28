import './setup/db'

import { server } from './setup/server'
import * as jwt from './setup/jwt'
import { UserModel } from './models/user'

const authMiddleware = async (req, res, next) => {
  const [, token] = req.headers.authorization.split(' ')
  console.log(req.headers.authorization)
  try {
    const payload = await jwt.verify(token)
    const user = await UserModel.findById(payload.user)

    if (!user) {
      return res.send(401)
    }

    req.auth = user

    next()
  } catch (error) {
    res.send(401, error)
  }
}

server.post('/signup', async (req, res) => {
  try {
    const result = await UserModel.create(req.body)
    const { password, ...user } = result.toObject()

    const token = jwt.sign({ user: user.id })

    res.send({ user, token })
  } catch (error) {
    res.send(400, error)
  }
})

server.get('/login', async (req, res) => {
  const [, hash] = req.headers.authorization.split(' ')
  const [email, password] = Buffer.from(hash, 'base64')
    .toString()
    .split(':')

  try {
    const user = await UserModel.findOne({ email, password })

    if (!user) {
      return res.send(401)
    }

    const token = jwt.sign({ user: user.id })

    res.send({ user, token })
  } catch (error) {
    res.send(error)
  }
})

server.get('/users', authMiddleware, async (req, res) => {
  try {
    const users = await UserModel.find()
    res.send(users)
  } catch (error) {
    res.send(error)
  }
})

server.get('/me', authMiddleware, (req, res) => {
  res.send(req.auth)
})

server.start()
