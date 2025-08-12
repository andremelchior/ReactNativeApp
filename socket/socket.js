import { io } from "socket.io-client";

const SOCKET_URL = "https://localhost:3000";

const socket = io(SOCKET_URL, { transports: ['websocket'] });

export default socket;