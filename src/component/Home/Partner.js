import React from 'react';
import Banner from '../../img/banner-top.jpg';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import partner from '../../img/partner-img2.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Partner() {
    return (
        <>
            
        <div className='top_headr_partner'>
            <img src={partner} className="img-fluid"></img>
            <div className="content">
                <h1>JOIN US AND GET A CHANCE TO CONNECT WITH YOUR FANS AND EARN</h1>
                <Link to='/Partnerform' className='btn-book btn btn-primary'>Join now</Link>
            </div>
        </div>
        <div className='abs-partnr hpt_40 hpb_40'>
            <Container>
                <Row>
                    <Col lg={4} sm={4} md={4}>
                        <div className="join-box">
                            <div className="img-why">
                                <img src="http://luxestar.co.in/front_assets/img/connection-icon.png" className="img-fluid" alt=""></img>
                            </div>
                            <h5>Engage with Fans</h5>
                            <p> With Luxe Star, you can establish the quickest and easiest way to connect with your fans. Fulfil their wish by creating a personalized video message or just a dm on their birthdays, anniversary or any special occasion. </p>
                        </div>
                    </Col>
                    <Col lg={4} sm={4} md={4}>
                        <div className="join-box">
                            <div className="img-why">
                                <img src="http://luxestar.co.in/front_assets/img/connection-icon.png" className="img-fluid" alt=""></img>
                            </div>
                            <h5>Exclusive Brand Deals</h5>
                            <p>  Get the best business deals possible from well-known brands and woke with them from the comfort of your home. </p>
                        </div>
                    </Col>
                    <Col lg={4} sm={4} md={4}>
                    <div className="join-box">
                            <div className="img-why">
                                <img src="http://luxestar.co.in/front_assets/img/connection-icon.png" className="img-fluid" alt=""></img>
                            </div>
                            <h5>More Visibility among Audience</h5>
                            <p>  Working with brands and reaching new audiences will get you more & more recognition. All that leads to making new fans and will attract even more brands to your talent </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default Partner;