import express from "express";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import http from "http";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import { notfound, errorHandler } from "./middleware/errorMiddleware.js";
import connectionDB from "./config/db.js";
import { Server } from "socket.io";
connectionDB();
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send(`<h1>Server is ready</h1>`));

app.use(notfound);
app.use(errorHandler);

// socket events
io.on("connection", (socket) => {
  console.log(`A user connected ${socket.id}`);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => console.log(`server started on port ${PORT}`));
