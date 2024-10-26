const BookModel = require("../model/book.model");

exports.GetAllData=async (req, res) => {
  let Book;
  try {
    Book = await BookModel.find(); 
  } catch (err) {
    console.log(err);
  }

  if (!Book) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json(Book);
  }

exports.AddData=async (req, res) => {
    const { title, author, description, price, image,isbn } = req.body;
    let Book;
  try {
    Book=await BookModel.create({ title, author, description, price, image,isbn });
  } catch (error) {
    console.log(error);
  }

  if(!Book)
  {
    res.status(400).json({message:"Can't Add Book Details"})
  }
  else
  {
    res.status(200).json({message:"User Created Successfully"})
  }
}

exports.DeleteData=async (req, res) => {
    const { _id } = req.params;
    let Book
    try {
      Book=await BookModel.findByIdAndDelete(_id);
    } catch (error) {
      console.log(error)
    }

    if(!Book)
    {
      res.status(400).json({message:"Can't Delete Book Details"})
    }
    else
    {
      res.status(200).json({message:"User Data Deleted..."})
    }
  }

exports.UpadetData=async (req, res) => {
    const { _id } = req.params;
    const { title, author, description, price, image,isbn } = req.body;
    let Book
    try {
      Book=await BookModel.findByIdAndUpdate(_id, { title, author, description, price, image,isbn });
    
    } catch (error) {
      console.log(error)
    }

    if(!Book)
    {
      res.status(400).json({message:"Can't Update Book Details"})
    }
    else
    {
      res.status(200).json({message:"User Data Updated..."})
    }
  }

  
exports.GetSingleData=async(req, res) => {
  const {_id} = req.params
  let Book
  try {
    Book = await BookModel.findById(_id);
  } catch (err) {
    console.log(err);
  }

  if (!Book) {
    return res.status(400).json({ message: "No Book found" });
  }
  return res.status(200).json(Book);
  }

