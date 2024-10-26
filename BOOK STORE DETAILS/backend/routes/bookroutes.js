const express = require('express');
const { GetAllData, AddData, DeleteData, UpadetData, GetSingleData } = require('../controllers/book.controller');
const BookRouter = express.Router();

BookRouter.get("/",GetAllData)
BookRouter.post("/",AddData)
BookRouter.delete("/:_id",DeleteData)
BookRouter.patch("/:_id",UpadetData)
BookRouter.get("/:_id",GetSingleData)

module.exports=BookRouter