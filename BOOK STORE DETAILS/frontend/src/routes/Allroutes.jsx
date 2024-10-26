import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Booklist from '../components/Booklist'
import Addbook from '../components/Addbook'
import Editbook from '../components/Editbook'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Booklist />}></Route>
        <Route path='/addbook' element={<Addbook />}></Route>
        <Route path='/editbook/:_id' element={<Editbook />}></Route>
    </Routes>
  )
}

export default Allroutes
