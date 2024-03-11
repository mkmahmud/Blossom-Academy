// socketIo.js
import { Server as SocketServer } from 'socket.io'
import { MessengerService } from './app/modules/messenger/messenger.service'

let io: any

function initializeSocket(server: any) {
  io = new SocketServer(server, {
    cors: {
      origin: ['http://localhost:3000'],
    },
  })

  io.on('connection', async (socket: any) => {
    console.log('user connected')
    const userId = socket.handshake.query.userId

    // try {
    //   // Fetch user data from the database based on userId
    //   const userData = await MessengerService.getAllEngagedUsers(userId)

    //   if (userData) {
    //     // Send user data to the client
    //     socket.emit('engaged_user', userData)
    //   } else {
    //     console.log('User not found')
    //   }
    // } catch (error) {
    //   console.error('Error fetching user data:', error)
    // }

    socket.on('getMessages', async (data: any) => {
      const res = await MessengerService.getMessages(data)

      // Broadcast the message to all connected clients
      io.emit('getMessages', res)
    })

    socket.on('chat message', async (data: any) => {
      await MessengerService.InsertMessage(data)

      const res = await MessengerService.getMessages({
        senderid: data?.sender,
        reciverId: data?.reciver,
      })

      // Broadcast the message to all connected clients
      io.emit('getMessages', res)
    })

    socket.on('disconnect', () => {
      console.log('User disconnected')
    })
  })

  return io
}

export { initializeSocket, io }
