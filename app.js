import express from "express";
import connectDB from "./data/database.js";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
    path: "./data/config.env",
});

connectDB();

const app = express();

//using middlewire
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

//using routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);


app.get('/', (req, res) => {
    res.send("Nice Working")
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT} on ${process.env.NODE_ENV} mode`);
})