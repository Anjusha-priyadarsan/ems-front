import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>

      <Navbar className="bg-tertiary">
        <Container>
          <Navbar.Brand className='fw-bolder text-light' >
            <Link to={'/'} style={{textDecoration:"none"}}>


            <i class="fa-solid fa-users me-2"></i>
            EMS-APPLICATION

            
            
            </Link>
            
          </Navbar.Brand>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header