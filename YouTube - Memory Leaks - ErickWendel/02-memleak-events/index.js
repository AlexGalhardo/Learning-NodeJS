import { createServer } from 'http'
import Events from 'events'
const myEvent = new Events()
import { randomBytes } from 'crypto'

function getBytes() {
  return randomBytes(10000)
}

function onData(msg) {
  getBytes()
  const items = []
  setInterval(function myInterval() {items.push(msg) }, 200)
}

myEvent.on('data', onData)
function handler(request, response) {
  myEvent.emit('data', Date.now())
  response.end('ok')
}

createServer(handler)
  .listen(3000, () => console.log('server is running at 3000'))