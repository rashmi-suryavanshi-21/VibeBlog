import React from 'react'
import './WriteBlog.css'
import { Link } from 'react-router-dom'
import BlogForm from '../../Component/BlogForm/BlogForm'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'


const WriteBlog = () => {
  return (
    <div>
    <Navbar />
    <Link to='/add'>
    < BlogForm />
    </Link>
    <Footer/>
    </div>
  )
}

export default WriteBlog