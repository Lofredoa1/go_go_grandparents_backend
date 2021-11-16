import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
import cors from "cors"


dotenv.config()

const PORT = (process.env.PORT || 7777);

// create express app
const app = express()

// global middleware
app.use(cors()) // cors headers
app.use(express.json())
app.use(morgan("tiny"))  // logging

// // ROUTERS GO HERE


// Routes
app.get("/", (req,res) => res.send("hello world!"))


app.listen(PORT, () => console.log(`server is running on ${PORT}`))