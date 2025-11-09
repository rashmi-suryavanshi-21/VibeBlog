import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ShowBlog.css'
import { useNavigate } from "react-router-dom";
const ShowBlog = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        const findBlog = storedBlogs.find(blog => blog.id === Number(id)) ||
            storedBlogs.find(blog => String(blog.id) === String(id));
        setBlogs(findBlog)
    }, []);
    const deleteBlog = () => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        const deletedBlog = storedBlogs.filter(blog => String(blog.id) !== String(id));
        localStorage.setItem("blogs",JSON.stringify(deletedBlog))

                console.log(storedBlogs);
                console.log(deletedBlog);
        alert('Blog is Deleted!')
        navigate("/"); 
        }

    return (
        <div className='blog-details'>
            {blogs ? (
                <div>
                    <h1 >{blogs.category}</h1>
                    <div className='blog-detail'>
                        <div className="blog-info">
                            <img src={blogs.image} alt="" />
                        </div>
                        <div className="blog-content">
                            <h2>{blogs.title}</h2>
                            <p>{blogs.content}</p>
                            <p>By {blogs.author}</p>
                        </div>
                        <div className="buttons" onClick={deleteBlog}>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>

            ) : (
                <p>No blogs found</p>
            )}
        </div>
    );
}

export default ShowBlog