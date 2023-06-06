import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/pages/Header"
import SignUp from "./components/pages/SignUp"
import Home from "./components/pages/Home"
import Footer from "./components/pages/Footer"
import Login from "./components/pages/Login"
import AddCategory from "./components/pages/AddCategory"
import VeiwCategory from "./components/pages/VeiwCategory"
import AddBlog from "./components/pages/AddBlog"
import ViewBlog from "./components/pages/ViewBlog"
 
 import './App.css';
import UpdateCat from "./components/pages/UpdateCat";
import UpdateBlog from "./components/pages/UpdateBlog";
import Changepass from "./components/pages/Changepass";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/category" element={<AddCategory/>}/>
        <Route path="/viewcategory" element={<VeiwCategory/>}/>
        <Route path="/cat" element={<UpdateCat/>}/>
        <Route path="/addblog" element={<AddBlog/>}/>
        <Route path="/viewblog" element={<ViewBlog/>}/>
        <Route path="/blog" element={<UpdateBlog/>}/>
        <Route path="/change" element={<Changepass/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
