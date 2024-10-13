import {createServer} from 'http'
import { Server } from 'socket.io'


const htttpServer = createServer();
const io = new Server(htttpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

io.on("connection", async (socket) => {
    // socket events
})

console.log('Listening to port...')

htttpServer.listen(process.env.PORT || 4000)