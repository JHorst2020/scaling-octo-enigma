require("dotenv").config()
const multer = require("multer")
const helmet = require("helmet")
const mongoose = require('mongoose')
const express = require("express")
const upload = multer({dest:"uploads"})
const routes = require("./routes")
const app = express()
const server = require("http").createServer(app)
const {Server} = require("socket.io")

const cors = require("cors")
const User = require("./models/Users")
const {createAdminUser} = require("./utils/user")




app.use(cors());

app.use(helmet({
    contentSecurityPolicy: false,
}))

app.use(express.json())


app.use(routes)

const io = new Server(server,{
    cors:{
        origin:['http://localhost:3000',"https://admin.socket.io","http://localhost:4000","http://127.0.0.1:3000"],
        credentials:true
      },
      maxHttpBufferSize: 1e8
})

io.use((socket, next)=>{
    console.log("socket.handshake")
    next()
})

io.on("connection",(socket)=>{
    socket.on("disconnect",()=>{
        console.log("socket disconnected")
    })
})


mongoose.connect(process.env.DATABASE_URL) 
mongoose.Promise = Promise

//* Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

server.listen(process.env.PORT, ()=> {
    console.log(`Server started on port ${process.env.PORT}`)

    //* Create initial user
    createAdminUser()
})
module.exports = app