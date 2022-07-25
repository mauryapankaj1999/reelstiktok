import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function Header(){
    return(
        <>
          <div className='navtop'>
            <Navbar className='mynavbar' expand="lg">
              <Container>
                <Navbar.Brand href="#home" className='logo'>Luke<span>star </span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='left_area'>
                  <Nav className="m-auto">
                   
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Greetings</Nav.Link>
                    <Nav.Link href="#link">Support</Nav.Link>
                    <Nav.Link href="#link">Partner</Nav.Link>
                    
                  </Nav>
                  <Form className="d-flex">
                  <InputGroup className="inputsearch">
                    <InputGroup.Text id="basic-addon1"><i class="bi bi-search"></i></InputGroup.Text>
                    <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </InputGroup>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </div>
        </>
    )
}

export default Header; 