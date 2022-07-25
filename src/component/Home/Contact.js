import React from 'react';
import background from '../../img/partner-bg.png';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function contact(){
    return(
        <>
        <div className='top-hp'>
            <Container>
                <Row>
                    <Col lg={12} className='text-center'>
                        <h1>Contact Us</h1>
                    </Col>
                </Row>
            </Container>
        </div>
          <div className="conta_top_hader">
            <Container>
                <Row>
                    <Col lg={12}>
                    <div className='abou_text-topl' >
                        <Row>
                            <Col lg={4}>
                                <div className="location-item text-center">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <h3>Location</h3>
                                    <p>E-53 SECOND FLOOR,
                                    above CORPORATION BANK,
                                    Mahipalpur, New Delhi,
                                    Delhi 110037.</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                            <div className="location-item text-center">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <h3>Email</h3>
                                    <p>info@luxestar.co.in</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                            <div className="location-item text-center">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                                    <h3>Phone</h3>
                                    <p>+9196251 49654 </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='frm_mid'>
            <Container fluid>
                <Row>
                    <Col lg={7} className='p-0'>
                       <div className='drop-img'>
                            <div className='dorpleft'>
                            <Form>
                                <Row>
                                    <Col lg={12}>
                                        <h2>Drop your message for any info or question.</h2>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="Name">
                                            <Form.Control required type="text" placeholder="Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="Name">
                                            <Form.Control required type="email" placeholder="Email" />
                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="Name">
                                            <Form.Control required type="number" placeholder="Phone number" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="Name">
                                            <Form.Control required type="text" placeholder="subject" />
                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                <Col lg={12}>
                                    <Form.Group className="mb-3">
                                      
                                        <Form.Select>
                                        <option>Disabled select</option>
                                        <option>Disabled select</option>
                                        <option>Disabled select</option>
                                        <option>Disabled select</option>
                                        <option>Disabled select</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                </Row>
                                <Row>
                                <Col lg={12}>
                                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                                </Col>
                                <Col lg={12} className='mt-4'>
                                    <div className='d-grid'>
                                        <Button variant="success" type="submit" className='btn-block'> Submit </Button>
                                    </div>
                                </Col>
                                </Row>
                            </Form>
                            </div>
                        </div> 
                    </Col>
                    <Col lg={5} className='p-0'>
                            <div className='speciality-right'>
                                
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default contact;