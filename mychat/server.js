import express from "express";
import path from "path";
import http from "http";
import { Server as socketio } from "socket.io";
import { formatMessage } from './utils/messages.js';
import { userJoin, getCurrentUser, userLeave, getRoomUsers } from './utils/users.js';

const app = express();
const server = http.createServer(app);
const io = new socketio(server);

// set static folder
app.use(express.static(path.join(process.env.PWD, 'public')));

const botName = 'ChatCord Bot';
// Run when clinet connects
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        // Welcome current user
        socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));
        
        // Broadcast when a user connect 
        socket.broadcast
            .to(user.room)
            .emit(
                'message', 
                formatMessage(botName, `${user.username} has joined the chat.`)
            );

        // Send users and room info
        io.to(user.room).emit("roomUsers", {
            room: user.room, 
            users: getRoomUsers(user.room)
        });
    });

    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username, msg));   
    })
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit(
                'message', 
                formatMessage(botName, `${user.username} has left the chat.`)
            );

            // Send users and room info
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });
});





const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));