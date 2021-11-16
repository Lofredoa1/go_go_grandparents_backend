// import dotenv from "dotenv"
// import mongoose from "mongoose"
// dotenv.config()

// const {MONGODB_URL} = process.env
// const config = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useFindAndModify: false
// }

// mongoose.connect(MONGODB_URL, config)

// mongoose.connection
//     .on("open", () => console.log("connected to mongo"))
//     .on("closed", () => console.log("disconnected from mongo"))
//     .on("error", (err) => console.log("error: ", err))

// module.exports = mongoose