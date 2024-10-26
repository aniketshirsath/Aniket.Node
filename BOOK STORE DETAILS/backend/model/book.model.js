const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      isbn: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      }})

const BookModel=mongoose.model("bookdetail",userSchema)

module.exports=BookModel