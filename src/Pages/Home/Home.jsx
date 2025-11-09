import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../Component/Navbar/Navbar'
import Category from '../../Component/Category/Category'
import BlogCard from '../../Component/BlogCard/BlogCard'
import dummyBlogs from '../../Data'
import Footer from '../../Component/Footer/Footer'
import { Link } from 'react-router-dom'


const Home = () => {


  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const rawBlogs = localStorage.getItem('blogs');
    // localStorage.removeItem('blogs');
    if (!rawBlogs) {
      localStorage.setItem("blogs", JSON.stringify(dummyBlogs))
      setBlogs(dummyBlogs);
    }
    else {
      setBlogs(JSON.parse(rawBlogs));
    }
  }, []);



  const filteredBlogs =
    blogs.length > 0
      ? category === "All"
        ? blogs
        : blogs.filter(blog => blog.category === category)
      : [];


  return (
    <div className='home'>

      <Navbar />
      <div className="content">
        <h1>Write Your Vlog</h1>
        <p>Turn your ideas into stories that inspire the world.</p>
        <Link to='/add'>
          <button className='start-button'>Start Now</button>
        </Link>

      </div>

      <Category className='category-blog' category={category} setCategory={setCategory} />

      {filteredBlogs.length > 0 ? (
        <BlogCard className='blogcard' blogs={filteredBlogs} />
      ) : (
        <p>Loading blogs...</p>
      )}

      <Footer />
    </div>
  )
}

export default Home