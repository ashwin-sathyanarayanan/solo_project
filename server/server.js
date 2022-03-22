require("dotenv").config();

const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;

app.use(cors({
	credentials: true,
	origin: "http://localhost:3000",
}));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


require("./config/mongoose.config.js");
require('./routes/user.routes')(app);
require('./routes/item.routes')(app);



const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`) 
});

const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['*'], // this allow all configuration of headers
        credentials: true,
    }
});

io.on("connection", socket => {
    // NOTE: Each client that connects get their own server socket id!
    console.log('Server side socket id: ' + socket.id);
    
    // Use specific socket to create event listeners and emitters for clients
    socket.on("added_new_user", data => {
        socket.broadcast.emit("added_new_user", data)
    });
    socket.on("deleted_user", data => {
        socket.broadcast.emit("deleted_user", data)
    });
    socket.on("updated_user", data => {
        socket.broadcast.emit("user_updated", data)
    });
});
