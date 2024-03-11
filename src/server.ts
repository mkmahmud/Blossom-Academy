import mongoose from 'mongoose'
import app from './app'
import { createServer } from 'http' // Import http module
import config from './config'
import { initializeSocket } from './socket'

process.on('uncaughtException', err => {
  console.log('Uncaught exception is detected......', err)
  process.exit(1)
})

let server: any

async function main() {
  // server close

  try {
    await mongoose.connect(config.SERVER_URL as string)
    console.log('database connected')

    // Create HTTP server and attach the Express app
    server = createServer(app)

    // Initialize Socket.IO
    const io = initializeSocket(server)

    // Server
    server.listen(config.PORT, () => {
      console.log(`Example app listening on port ${config.PORT}`)
    })
  } catch (err) {
    console.log(err)
  }

  process.on('unhandledRejection', err => {
    console.log('unhandled rejection is detected. Closing the service...')
    if (server) {
      server.close(() => {
        console.log(err)
        process.exit()
      })
    } else {
      process.exit(1)
    }
  })
}

main()

process.on('SIGTERM', () => {
  console.log('SIGTERM is received')
  if (server) {
    server.close()
  }
})
