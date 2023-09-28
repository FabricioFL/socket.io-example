import { Server, Socket } from 'socket.io';

export default (io: Server) => {
  io.on('connection', (socket: Socket) => {
    socket.on('join', (room: string) => {
      socket.join(room);
    });

    socket.on('message', (data: { room: string; message: string }) => {
      io.to(data.room).emit('newMessage', data.message);
    });
  });
};