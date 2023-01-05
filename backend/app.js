import express from 'express';
import hotelsRoute from './routes/hotel.js';
import usersRoute from './routes/users.js';
import roomsRoute from './routes/rooms.js';
import authRoute from './routes/auth.js';
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();


// middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())


app.use("/api/v1/hotels", hotelsRoute)
app.use("/api/v1/users", usersRoute)
app.use("/api/v1/rooms", roomsRoute)
app.use("/api/v1/auth", authRoute)


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMesage = err.message || "Something went to wrong";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMesage,
        stack: err.stack
    })
    next()
})


export default app;