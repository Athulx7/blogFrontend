import React from 'react'
import Dashboard from './Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import MainDashboard from './components/MainDashboard';
import Home from './components/Home';
import AllBlogs from './components/AllBlogs';
import ShowmoreBlogs from './components/ShowmoreBlogs';
import AddBlog from './components/AddBlog';
import AddPage from './Pages/AddPage';
import SelectedBlog from './Pages/SelectedBlog';



function App() {
  return (
    <>
    {/* <Header /> */}
    
    <Routes >
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth register='register' />} />
      <Route path='/maindash' element={<MainDashboard />} />
      <Route path='/home' element={<Home />} />
      <Route path='/allblog' element={<AllBlogs />} />
      <Route path='/showmore' element={<ShowmoreBlogs />} />
      <Route path='/addblog' element={<AddBlog />} />
      <Route path='/editpage/:id' element={<AddPage editpage='editpage'/>} />
      <Route path='/addpage' element={<AddPage />} />
      <Route path='/selectedblogpage/:id' element={<SelectedBlog />} />
      
    </Routes>



    


   
      
      
      

    </>
  )
}

export default App
