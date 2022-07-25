import React from 'react';
import Banner from '../../img/slider-img.png';
import { Link } from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Home() {
    return (
        <>
           <div className='headertop'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <div className='caption'> 
                            <h2>ENDORSE YOUR BRAND <br/> WITH THE BIG <br/> CELEBRITIES</h2>
                            <Link to='/' className='book-btn btn btn-link'>Book Know</Link>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div><img src={Banner} className='topimg img-fluid' alt=''></img></div>
                    </div>
                </div>
            </div>
           </div>
           <div className='tabs_section pt-60'>
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
           </div>
           
        </>
    )
}
export default Home;