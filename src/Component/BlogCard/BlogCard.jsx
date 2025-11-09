import React from 'react'
import './BlogCard.css'
import { Link } from 'react-router-dom'
const BlogCard = ({ blogs = [] }) => {
  return (
    <div className='show-blogs' >
      {blogs.length > 0 ? (
        blogs.map((data) => (
          <Link to={`/blog/${data.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}>
          <div key={data.id} 
          className="card">
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.category} | | {data.date}</p>
            <p>BY {data.author}</p>
            <p></p>
          </div>
        </Link>
        ))
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  )
}

export default BlogCard
