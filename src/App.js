
import './App.css';
import Home from './Pages/Home/Home';
import { Route,Routes } from 'react-router-dom';
import BlogForm from './Component/BlogForm/BlogForm';
import ShowBlog from './Component/ShowBlog/ShowBlog'
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<BlogForm/>}></Route>
      <Route path='/blog/:id' element={<ShowBlog/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
