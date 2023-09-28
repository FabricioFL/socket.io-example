import express from "express";
import { createServer } from "http";
import router from "./routes/routes";
import chatEvents from './events/message';
import notificationEvents from './events/notification';
import { Server } from "socket.io";

const app = express();
app.use(router)
const server = createServer(app);
const io = new Server(server);

export default server;