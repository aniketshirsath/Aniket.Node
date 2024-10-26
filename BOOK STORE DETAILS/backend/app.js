const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BookRouter=require("./routes/bookroutes")
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/book",BookRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Db")
        console.log(`server running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
    
})
