import React from 'react';
import model from '../../img/shreedakKaul.jpg';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function gretting(){
    return(
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Breadcrumb>
                            <Breadcrumb.Item><Link to='/'> Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to='/Partner'>  Partner </Link> </Breadcrumb.Item>
                            <Breadcrumb.Item active>Gratting</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <h4>Filters</h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        <h6>Category</h6>
                        <div className='categorybox'>
                            <Form.Check type="radio" id="1"  label="Check this switch" className='radbtn' />
                            <Form.Check type="radio" id="2"  label="Youtuber" className='radbtn' />
                            <Form.Check type="radio" id="3"  label="Model" className='radbtn' />
                            <Form.Check type="radio" id="4"  label="Public" className='radbtn' />
                            <Form.Check type="radio" id="5"  label="Tv Artists" className='radbtn' />
                            <Form.Check type="radio" id="6"  label="Chef" className='radbtn' />
                            <Form.Check type="radio" id="7"  label="Public Figure" className='radbtn' /> 
                        </div>
                        <br>
                        </br>
                        <h6>Sort by </h6>
                        <div className='categorybox'>
                        <Form.Check aria-label="option 1" label="Check this switch"  />
   
                        <Form.Check type="checkbox" id="1"  label="Check this switch" className='radbtn' />
                        <Form.Check type="checkbox" id="2"  label="Youtuber" className='radbtn' />
                        <Form.Check type="checkbox" id="3"  label="Model" className='radbtn' />
                       
                        </div>
                    </Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={3} Col={3}>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model} className="img-fluid" alt=''></img>
                                            <div className="price"><i className="fa fa-inr" aria-hidden="true"></i>660
                                            </div>
                                            <div className="heart"><i className="bi bi-heart"></i></div>
                                        </div>
                                        <div className="feature_cardfooter">
                                            <h4>Archna</h4>
                                            <p>Tv Artist</p>
                                            <Link to='/about'>Book Now </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Col>
                            <Col lg={3} Col={3}>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model} className="img-fluid" alt=''></img>
                                            <div className="price"><i className="fa fa-inr" aria-hidden="true"></i>660
                                            </div>
                                            <div className="heart"><i className="bi bi-heart"></i></div>
                                        </div>
                                        <div className="feature_cardfooter">
                                            <h4>Archna</h4>
                                            <p>Tv Artist</p>
                                            <Link to='/about'>Book Now </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Col>
                            <Col lg={3} Col={3}>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model} className="img-fluid" alt=''></img>
                                            <div className="price"><i className="fa fa-inr" aria-hidden="true"></i>660
                                            </div>
                                            <div className="heart"><i className="bi bi-heart"></i></div>
                                        </div>
                                        <div className="feature_cardfooter">
                                            <h4>Archna</h4>
                                            <p>Tv Artist</p>
                                            <Link to='/about'>Book Now </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Col>
                            <Col lg={3} Col={3}>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model} className="img-fluid" alt=''></img>
                                            <div className="price"><i className="fa fa-inr" aria-hidden="true"></i>660
                                            </div>
                                            <div className="heart"><i className="bi bi-heart"></i></div>
                                        </div>
                                        <div className="feature_cardfooter">
                                            <h4>Archna</h4>
                                            <p>Tv Artist</p>
                                            <Link to='/about'>Book Now </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Col>
                        </Row>
                        <Row className='mt-4'>
                            <Col lg={3} Col={3}>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model} className="img-fluid" alt=''></img>
                                            <div className="price"><i className="fa fa-inr" aria-hidden="true"></i>660
                                            </div>
                                            <div className="heart"><i className="bi bi-heart"></i></div>
                                        </div>
                                        <div className="feature_cardfooter">
                                            <h4>Archna</h4>
                                            <p>Tv Artist</p>
                                            <Link to='/about'>Book Now </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Col>
                            <Col lg={3} Col={3}>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model} className="img-fluid" alt=''></img>
                                            <div className="price"><i className="fa fa-inr" aria-hidden="true"></i>660
                                            </div>
                                            <div className="heart"><i className="bi bi-heart"></i></div>
                                        </div>
                                        <div className="feature_cardfooter">
                                            <h4>Archna</h4>
                                            <p>Tv Artist</p>
                                            <Link to='/about'>Book Now </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Col>
                            <Col lg={3} Col={3}>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model} className="img-fluid" alt=''></img>
                                            <div className="price"><i className="fa fa-inr" aria-hidden="true"></i>660
                                            </div>
                                            <div className="heart"><i className="bi bi-heart"></i></div>
                                        </div>
                                        <div className="feature_cardfooter">
                                            <h4>Archna</h4>
                                            <p>Tv Artist</p>
                                            <Link to='/about'>Book Now </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Col>
                            <Col lg={3} Col={3}>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model} className="img-fluid" alt=''></img>
                                            <div className="price"><i className="fa fa-inr" aria-hidden="true"></i>660
                                            </div>
                                            <div className="heart"><i className="bi bi-heart"></i></div>
                                        </div>
                                        <div className="feature_cardfooter">
                                            <h4>Archna</h4>
                                            <p>Tv Artist</p>
                                            <Link to='/about'>Book Now </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default gretting;