import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialdata={
  title:"",
  price:0,
  image:"",
  author:"",
  description:"",
  isbn:""
}

const Addbook = () => {

  const [formdata,setformdata]=useState(initialdata)

  const {title,price,description,image,author,isbn}=formdata
  const navigate=useNavigate()

  
const handlechange=(e)=>{
  setformdata({...formdata,[e.target.name]:e.target.value})
}


  const handlesubmit=async(e)=>{

    e.preventDefault()
    try {
      await axios.post("http://localhost:3030/book",formdata)
      alert("Data Added...")
      navigate("/")
    } catch (error) {
      console.log(error)
    }
    
}

  return (
    <div style={{marginLeft:"33%"}}>
      <h1 style={{marginLeft:"10%",fontFamily:"sans-serif"}}>Add Book Here</h1>
      <div>
      <form action="" style={{borderRadius:"10px",width:"40%",padding:"20px",boxShadow:"10px 10px 20px grey"}} onSubmit={(e)=>handlesubmit(e)}>
        <input style={{width:"94%",padding:"10px"}} name='image' value={image} onChange={(e)=>handlechange(e)} type="text" placeholder='Image' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='title' value={title} onChange={(e)=>handlechange(e)} type="text" placeholder='Title' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='author' value={author} onChange={(e)=>handlechange(e)} type="text" placeholder='author' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='price' value={price} onChange={(e)=>handlechange(e)} type="text" placeholder='Price' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='isbn' value={isbn} onChange={(e)=>handlechange(e)} type="text" placeholder='ISBN' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='description' value={description} onChange={(e)=>handlechange(e)} type="text" placeholder='Description' /><br /><br></br>
        <button type='submit' style={{marginLeft:"0%",border:"none",backgroundColor:"black",color:"white",padding:"10px 180px 10px 200px"}}>ADD</button>
      </form>
      </div>
    </div>
  )
}

export default Addbook
