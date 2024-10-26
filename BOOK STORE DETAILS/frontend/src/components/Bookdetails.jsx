import React from 'react'

const Bookdetails = ({title,image,author,price,description,isbn}) => {
  return (
    <div>
      <div> 
            <img height={180} width={180} src={image} alt="" />
            <h1>{title}</h1>
            <p>Author: {author}</p>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <p>ISBN: {isbn}</p>
        </div>
    </div>
  )
}

export default Bookdetails
