import React, { useState } from 'react';
import './BlogForm.css';
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const [formdata, setFormdata] = useState({
    title: "",
    category: "",
    author: "",
    image: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const newBlog = {
      id: uuidv4(),
      ...formdata,
      date: new Date().toISOString().slice(0, 10),
    };

    const updatedBlogs = [newBlog, ...storedBlogs];
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    alert("Blog added successfully!");
    navigate("/"); // redirect home
  };

  return (
    <div className="blog-form">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label >Title</label>
        <input 
          type="text" 
          name="title"
          value={formdata.title} 
          onChange={handleChange} 
          placeholder="Enter Title" 
          required 
        /><br />

        <label >Category</label>
        <input 
          type="text" 
          name="category"
          value={formdata.category} 
          onChange={handleChange} 
          placeholder="Enter Category" 
          required 
        /><br />

        <label>Author</label>
        <input 
          type="text" 
          name="author"
          value={formdata.author} 
          onChange={handleChange} 
          placeholder="Author Name" 
          required 
        />

        <label>Image URL</label>
        <input 
          type="url" 
          name="image"
          value={formdata.image} 
          onChange={handleChange} 
          placeholder="Enter Image URL" 
          required 
        /><br />

        <label>Content</label>
        <textarea 
          name="content"
          value={formdata.content}
          onChange={handleChange}
          placeholder="Write Here..."
          required
        ></textarea>

        <div className="add-button">
          <button type="submit">Add Blog</button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
