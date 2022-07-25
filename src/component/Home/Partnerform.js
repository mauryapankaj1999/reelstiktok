import React from 'react';
import background from '../../img/partner-bg.png';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function partnerform(){
    return(
        <>
            <div className='bg-partnerform'>
            <div style={{ backgroundImage: `url(${background})` }} className="bg-partnr">
                        <Container>
                            <Row className='justify-content-center'>
                                <Col lg={7}>
                                    <div className='inrr-partnfrm'>
                                        <div className="text-center">
                                            <div class="hedingpart">
                                                <h4>APPLY TO JOIN LUXESTAR</h4>
                                                <p>Register yourself with us &amp; connect with your fans</p>
                                            </div>
                                        </div>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicName" >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control  required type="text" placeholder="Enter Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control  required type="Email" placeholder="Enter Email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicnumber">
                                            <Form.Label>Phone number</Form.Label>
                                            <Form.Control required type="number" placeholder="Enter Number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.Controlbio">
                                            <Form.Label> Provide your short bio </Form.Label>
                                            <Form.Control as="textarea" rows={2} />
                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label> Category you would like to be featured as </Form.Label>
                                                <Form.Select aria-label="Default select example" className="mb-3">
                                                    <option>Open this select menu</option>
                                                    <option value="Influencers">Influencers</option>
                                                    <option value="2">Youtuber</option>
                                                    <option value="3">Model</option>
                                                    <option value="4">Actor</option>
                                                    <option value="5">Tv Artists</option>
                                                    <option value="6">Athletes</option>
                                                    <option value="7">Public Figure</option>
                                                    <option value="8">Entertainers</option>
                                                </Form.Select>
                                            </Form.Group>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Label>Upload photo</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Label>Upload video</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>
                                        <Row>
                                            <Col lg={6}>
                                                <div className='d-grid'>
                                                    <Button variant="secondary" type="submit" className='btn-block'> Cancle</Button>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                            <div className='d-grid'>
                                                <Button variant="success" type="submit" className='btn-block'> Submit </Button>
                                            </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
            </div>
        </>
    )
}
export default partnerform;