import React from 'react';
import Banner from '../../img/banner-top.jpg';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



function About                                      () {
    return (
        <>
           <div className='headertop'>
            <img src={Banner} className='img-fluid' alt=''></img>
           </div>
           <div className='section2 wrapp-inner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h3>OUR TRENDING SERVICES </h3>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-6'>
                            <div className='servi_contert'>
                                <h4>Make a Wish </h4>
                                <p>Book Wishes For Your Loved One Or Yourself From Your Favourite Celebrity</p>
                                <Button variant="link">Link</Button>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-6'></div>
                        <div className='col-lg-4 col-sm-6 col-md-6'></div>
                    </div>
                </div>
            </div>  
           {/* <div className='tabs_section pt-60'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3>BOOK YOUR FAVOURITE CELEBRITIES</h3>
                        <h5>POPULAR CATEGORIES ARE</h5>  
                    </div>
                </div>
            </div>
           </div>
           <div className='tabs-area mt-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Tabs defaultActiveKey="Featured" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="Featured" title="Featured" className='tablist'>
                                <p>lo</p>
                            </Tab>
                            <Tab eventKey="Trending" title="Trending" className='tablist'>
                                s;ldfksd;g sdf
                            </Tab>
                            <Tab eventKey="Moviestars" title="Movie stars" className='tablist'>
                                sldfkjgskdfg
                            </Tab>
                            <Tab eventKey="Models" title="Models" className='tablist'>
                                sldfkjgskdfg
                            </Tab>
                            <Tab eventKey="tvstars" title="tvstars" className='tablist'>
                                sldfkjgskdfg
                            </Tab>
                            <Tab eventKey="Singers" title="Singers" className='tablist'>
                                sldfkjgskdfg
                            </Tab>
                            
                            <Tab eventKey="More" title="More" className='tablist'>
                                sldfkjgskdfg
                            </Tab>
                    </Tabs>
                    </div>
                </div>
            </div>
           </div> */}
        
        </>
    )
}
export default About;