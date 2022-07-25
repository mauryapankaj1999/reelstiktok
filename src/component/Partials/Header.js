import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../../img/logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
function Header(){
  const navigate = useNavigate()
    return(
        <>
          <div className='navtop'>
            <Navbar className='mynavbar' expand="lg">
              <Container>
                <Navbar.Brand onClick={()=>navigate('/')} className='logo'> <img src={logo} className="logo" width="145"></img>  </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='left_area'>
                  <Nav className="m-auto">
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                      <Container>
                        <Row>
                          <Col lg={4}>
                              <NavDropdown.Item href="#action/3.1">Influencer</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Youtuber</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Model</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Actor</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">TV Artist </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Athletes</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Public Figures</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Public Figures</NavDropdown.Item>
                          </Col>
                          <Col lg={4}>
                            <NavDropdown.Item href="#action/3.1">Influencer</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Youtuber</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Model</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Actor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">TV Artist </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Athletes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Public Figures</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Public Figures</NavDropdown.Item>
                          </Col>
                          <Col lg={4}>
                                <NavDropdown.Item href="#action/3.1">Influencer</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Youtuber</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Model</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Actor</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">TV Artist </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Athletes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Public Figures</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Public Figures</NavDropdown.Item>
                          </Col>
                          
                         
                        </Row>
                      </Container>
                     
                    </NavDropdown>
                    <NavDropdown title=" Greetings" id="basic-nav-dropdown">
                      <Container>
                          <Row>
                            <Col lg={4}>
                              <div className='link_a'>
                                  <NavDropdown.Item><Link to='/'> Influencer</Link></NavDropdown.Item>
                                  <NavDropdown.Item> <Link to='/'> Youtuber </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'>npm, Model </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'>Actor </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> TV Artist </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> Athletes  </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> Public Figures </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> Public Figures </Link></NavDropdown.Item>
                                </div>
                            </Col>
                            <Col lg={4}>
                            <div className='link_a'>
                                  <NavDropdown.Item><Link to='/'> Influencer</Link></NavDropdown.Item>
                                  <NavDropdown.Item> <Link to='/'> Youtuber </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'>npm, Model </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'>Actor </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> TV Artist </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> Athletes  </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> Public Figures </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> Public Figures </Link></NavDropdown.Item>
                            </div>
                            </Col>
                            <Col lg={4}>
                            <div className='link_a'>
                                  <NavDropdown.Item><Link to='/'> Influencer</Link></NavDropdown.Item>
                                  <NavDropdown.Item> <Link to='/'> Youtuber </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'>npm, Model </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'>Actor </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> TV Artist </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> Athletes  </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> Public Figures </Link></NavDropdown.Item>
                                  <NavDropdown.Item><Link to='/'> Public Figures </Link></NavDropdown.Item>
                                </div>
                            </Col>
                          </Row>
                      </Container>
                    </NavDropdown>
                    <Nav.Link onClick={()=>navigate('/Gretting')}>Greetings</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/Contact')}>Support</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/Partner')}>Partner</Nav.Link>

                    
                  </Nav>
                  <Form className="d-flex">
                  <InputGroup className="inputsearch">
                    <InputGroup.Text id="basic-addon1"><i class="bi bi-search"></i></InputGroup.Text>
                    <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </InputGroup>
                  </Form>
                </Navbar.Collapse>
                {/* <div style={{color:'white'}} onClick={()=>navigate('/About')} >Partner</div> */}

              </Container>
            </Navbar>
            </div>
        </>
    )
}

export default Header; 