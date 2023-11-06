
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Upload } from 'react-feather';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
   
   <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand>
           
     <Link to={''} style={{textDecoration:"none"}} >
             <Upload color='white' size={48}/>
             <span className='text-light ms-4'>Videoooo Upload</span>
     </Link>

          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header