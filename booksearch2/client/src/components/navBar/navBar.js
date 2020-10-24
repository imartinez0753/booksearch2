import React from "react"
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
             <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Book Search</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/fav">Favorite</Nav.Link>
      <Nav.Link href="/">Search</Nav.Link>
      
    </Nav>
    
  </Navbar>
        </div>
    )
}
export default NavBar;