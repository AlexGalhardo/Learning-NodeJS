import './setup/db'

import { server } from './setup/server'
import { UserModel } from './models/user'

server.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find()
    res.send(users)
  } catch (error) {
    res.send(500, error)
  }
})


server.start(() => console.log('Started server'))

