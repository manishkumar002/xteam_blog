import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';


function Header() {
 let auth=JSON.parse(window.localStorage.getItem("auth"));
 let navigate=useNavigate();
 function logout(){
  navigate('/login')
  window.localStorage.removeItem("auth")
}
  return (
   <> {  auth==true ? <>
    <Navbar style={{background:'#636691'}} expand="lg">
     <Container>
       <h3 className='text-danger'>Welcome Admin</h3>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link as={Link} to="/category" className='top2'>AddCategory</Nav.Link>
           <Nav.Link as={Link} to="/viewcategory" className='top2'>VeiwCategory</Nav.Link>
           {/* <Nav.Link as={Link} to="/cat" className='top2'>UpdateCat</Nav.Link> */}
           <Nav.Link as={Link} to="/addblog" className='top2'>AddBlog</Nav.Link>
           <Nav.Link as={Link} to="/viewblog" className='top2'>ViewBlog</Nav.Link>
           <Nav.Link as={Link} to="/change" className='top2'>Changepassword</Nav.Link>
           {/* <Nav.Link as={Link} to="/blog" className='top2'>UpdateBlog</Nav.Link> */}
           <div onClick={logout} className='top2'>Logout</div>
           {/* <Nav.Link as={Link} to="/login" className='top2'>Login</Nav.Link> */}
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
   </>   :  <>
   <Navbar style={{background:'#636691'}} expand="lg">
      <Container>
        <h3 className='text-danger'>Xteam</h3>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='top2'>Home</Nav.Link>
            <Nav.Link as={Link} to="/sign" className='top2'>SignUp</Nav.Link>
            {/* <Nav.Link as={Link} to="/login" className='top2'>Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </> }

  </>
  );
}

export default Header;
