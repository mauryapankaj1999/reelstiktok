import React from 'react';
import Banner from '../../img/banner-top.jpg';
import icon from '../../img/wish-list1.png';
import icon1 from '../../img/online-marketing1.png';
import icon2 from '../../img/illustration1.png';
import icon3 from '../../img/content1.png';
import model from '../../img/shreedakKaul.jpg';
import model1 from '../../img/bhavika-singh.jpg';
import testimonial_img from '../../img/testimonial_img.png';
import faqimg from '../../img/faq-banner1.png';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Accordion from 'react-bootstrap/Accordion';





function Home() {
    return (
        <>
           <div className='headertop'>
            <img src={Banner} className='img-fluid' alt=''></img>
           </div>
           <div className='section2 wrapp-inner'>
            <Container>
            <Row>
                <Col lg={12}>
                    <h3>OUR TRENDING SERVICES </h3>
                </Col>
                <Col lg={3} sm={6} md={6}>
                <div className='servi_contert'>
                    <img src={icon} className="img-fluid" alt=''></img>
                    <h4>Make a Wish </h4>
                    <p>Book Wishes For Your Loved One Or Yourself From Your Favourite Celebrity</p>
                    <Link to='/about'>Enquire Now &nbsp; <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                </div>
                </Col>
                <Col lg={3} sm={6} md={6}>
                <div className='servi_contert'>
                <img src={icon1} className="img-fluid" alt=''></img>
                    <h4>Brand promotion  </h4>
                    <p>Book Wishes For Your Loved One Or Yourself From Your Favourite Celebrity</p>
                    <Link to='/about'>Enquire Now &nbsp; <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                </div>
                </Col>
                <Col lg={3} sm={6} md={6}>
                <div className='servi_contert'>
                <img src={icon2} className="img-fluid" alt=''></img>
                    <h4>Designing Services  </h4>
                    <p>Book Wishes For Your Loved One Or Yourself From Your Favourite Celebrity</p>
                    <Link to='/about'>Enquire Now &nbsp; <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                </div>
                </Col>
                <Col lg={3} sm={6} md={6}>
                <div className='servi_contert'>
                <img src={icon3} className="img-fluid" alt=''></img>
                    <h4>Content Writing  </h4>
                    <p>Book Wishes For Your Loved One Or Yourself From Your Favourite Celebrity</p>
                    <Link to='/about'>Enquire Now &nbsp; <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                </div>
                </Col>
            </Row>
            </Container>
            </div>  

          <div className='slideritem hpt_40 hpb_40'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h2>BOOK YOUR FAVOURITE CELEBRITIES</h2>
                    </Col>
                    <Col lg={6} className='text-end'>
                            <Link to='/' >View More</Link>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                    <Swiper 
                        spaceBetween={10} slidesPerView={4}>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            </Swiper>
                    </Col>
                </Row>
            </Container>

          </div>
          <div className='slideritem hpt_40 hpb_40'>
            <Container>
            <Row>
                    <Col lg={6}>
                        <h2>Models</h2>
                    </Col>
                    <Col lg={6} className='text-end'>
                            <Link to='/' >View More</Link>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                    <Swiper 
                   modules={[Navigation, Autoplay]}
                   spaceBetween={10}
                   slidesPerView={4}
                   navigation
                   autoplay={{ delay: 3000 }}
                  >
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            </Swiper>
                    </Col>
                </Row>
            </Container>

          </div>
          <div className='slideritem hpt_40 hpb_40'>
            <Container>
            <Row>
                    <Col lg={6}>
                        <h2>TRENDING</h2>
                    </Col>
                    <Col lg={6} className='text-end'>
                            <Link to='/' >View More</Link>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                    <Swiper 
                   modules={[Navigation, Autoplay]}
                   spaceBetween={10}
                   slidesPerView={4}
                   navigation
                   autoplay={{ delay: 5000 }}
                  >
                            <SwiperSlide>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model1} className="img-fluid" alt=''></img>
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
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model1} className="img-fluid" alt=''></img>
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
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model1} className="img-fluid" alt=''></img>
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
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model1} className="img-fluid" alt=''></img>
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
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model1} className="img-fluid" alt=''></img>
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
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model1} className="img-fluid" alt=''></img>
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
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="filter_section">
                                <div className="item-carsol">
                                    <div className="feature-card">
                                        <div className="fimg">
                                            <img src={model1} className="img-fluid" alt=''></img>
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
                            </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
              </div>
            <div className='bok_video pt-60'>
                <Container>
                    <Row>
                        <Col lg={12} className="mb-4">
                            <h3>HOW TO BOOK A VIDEO?</h3>
                        </Col>
                        <Col lg={3}>
                        <div class="box_dark">
                        <div class="counqt">1</div>
                        <div class="heading">SHARE MESSAGE</div>
                            <p>Share Message - Write the message you want your star to convey in the video/dm and make sure
                            to include everything in the form</p>
                        </div>
                        </Col>
                        <Col lg={3}>
                        <div class="box_dark">
                        <div class="counqt">2</div>
                        <div class="heading">SHARE MESSAGE</div>
                            <p>Share Message - Write the message you want your star to convey in the video/dm and make sure
                            to include everything in the form</p>
                        </div>
                        </Col>
                        <Col lg={3}>
                        <div class="box_dark">
                        <div class="counqt">3</div>
                        <div class="heading">SHARE MESSAGE</div>
                            <p>Share Message - Write the message you want your star to convey in the video/dm and make sure
                            to include everything in the form</p>
                        </div>
                        </Col>
                        <Col lg={3}>
                        <div class="box_dark">
                        <div class="counqt">4</div>
                        <div class="heading">SHARE MESSAGE</div>
                            <p>Share Message - Write the message you want your star to convey in the video/dm and make sure
                            to include everything in the form</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>


           <div className='testimonitl_sec'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                        <Swiper 
                   modules={[Navigation, Autoplay]}
                   spaceBetween={10}
                   slidesPerView={1}
                   navigation
                   autoplay={{ delay: 5000 }}  >
                            <SwiperSlide>
                                <div className='section_testimonial'>
                                    <div className='img_testi'>
                                        <img src={testimonial_img} className="img-fluid"></img>
                                        <p class="mb-0 mt-4"><i class="fa fa-quote-left"></i> &nbsp;
                                            Select Celebrity - search from the widest range of stars and fSelect Celebrity - search from the widest range of stars and find the right one for aind the right one for any occasion &nbsp;<i class="fa fa-quote-right"></i>
                                        </p>
                                        <div className='heding_testi_name mt-3'>
                                            <h5>Kajal</h5>
                                            <p class="starck"><i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='section_testimonial'>
                                    <div className='img_testi'>
                                        <img src={testimonial_img} className="img-fluid"></img>
                                        <p class="mb-0 mt-4"><i class="fa fa-quote-left"></i> &nbsp;
                                            Select Celebrity - search from the widest range of stars and find Select Celebrity - search from the widest range of stars and find the right one for athe right one for any occasion &nbsp;<i class="fa fa-quote-right"></i>
                                        </p>
                                        <div className='heding_testi_name mt-3'>
                                            <h5>ajay</h5>
                                            <p class="starck"><i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='section_testimonial'>
                                    <div className='img_testi'>
                                        <img src={testimonial_img} className="img-fluid"></img>
                                        <p class="mb-0 mt-4"><i class="fa fa-quote-left"></i> &nbsp;
                                            Select Celebrity - search from the widest range of stars and find Select Celebrity - search from the widest range of stars and find the right one for athe right one for any occasion &nbsp;<i class="fa fa-quote-right"></i>
                                        </p>
                                        <div className='heding_testi_name mt-3'>
                                            <h5>ajay</h5>
                                            <p class="starck"><i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='section_testimonial'>
                                    <div className='img_testi'>
                                        <img src={testimonial_img} className="img-fluid"></img>
                                        <p class="mb-0 mt-4"><i class="fa fa-quote-left"></i> &nbsp;
                                            Select Celebrity - search from the widest range of stars and find Select Celebrity - search from the widest range of stars and find the right one for athe right one for any occasion &nbsp;<i class="fa fa-quote-right"></i>
                                        </p>
                                        <div className='heding_testi_name mt-3'>
                                            <h5>ajay</h5>
                                            <p class="starck"><i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='section_testimonial'>
                                    <div className='img_testi'>
                                        <img src={testimonial_img} className="img-fluid"></img>
                                        <p class="mb-0 mt-4"><i class="fa fa-quote-left"></i> &nbsp;
                                            Select Celebrity - search from the widest range of stars and find Select Celebrity - search from the widest range of stars and find the right one for athe right one for any occasion &nbsp;<i class="fa fa-quote-right"></i>
                                        </p>
                                        <div className='heding_testi_name mt-3'>
                                            <h5>ajay</h5>
                                            <p class="starck"><i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i> &nbsp; <i class="fa fa-star" aria-hidden="true"></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='accrodin pt-60 hpb_40'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='hding'>
                                <h3>Frequently Asked Questions</h3>
                            </div>
                        </Col>
                        <Col lg={6}>
                           
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is Luxe Star? </Accordion.Header>
                                    <Accordion.Body>
                                    <p>
                                        Luxe star is a platform where we bring famous and trending artists, celebs, influencers, TV Actors, Public Figures, etc., and try to connect them with their fans and brands. We try to offer the best deals for the growing brands and help them grow with the help of digital video promotions. We also try to build a connection between the Stars and their fans and deliver their passionate fans a lovely personalized message.
                                    </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How do I book a Celeb on Luxe Star? </Accordion.Header>
                                    <Accordion.Body>
                                    <p>
                                        You can easily book a celebrity with us in just few clicks. You simply choose your favourite Celebrity, fill out all the required details and complete message that you would like your celeb to convey in the video/dm. Once your celeb will create the video, we’ll send it to you through email or whatsApp
                                    </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How long does it take to get my personalized message? </Accordion.Header>
                                    <Accordion.Body>
                                    <p>
                                        Usually, all the orders get delivered within 7 days of placing the order. Luxe Star also provides you the option to schedule your order in case of birthday wishes, Anniversary wishes or best wishes for a specific occasion.
                                    </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Which payment methods are accepted? </Accordion.Header>
                                    <Accordion.Body>
                                    <p>
                                        You can place your order using any kind of payment methods you like such as – Debit cards, Credit cards and all other UPI payment methods are accepted.
                                    </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>What type of wishes can we get from Luxe Stars? </Accordion.Header>
                                    <Accordion.Body>
                                    <p>
                                        It can be anything whether it be a birthday wish, anniversary wish, acongratulation message on achievements or just a normal message for motivation. Make sure you’re not asking the celebrity to abuse or anything that goes against our policy and please do not include any type of link in the request message.
                                    </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>What other services are provided in Luxe Star? </Accordion.Header>
                                    <Accordion.Body>
                                    <p>
                                        Luxe Star is more than just connecting Celebs to their fans and reputed brands. We also do the work of bringingtalentedartists like Graphic Designers, Videographers, photographers, video &amp; photo editors and creative content writers into spotlight and help them get the best business deals
                                    </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Can I book a wish for my friends or family? </Accordion.Header>
                                    <Accordion.Body>
                                    <p>
                                        A wish can be booked for anyone you want, whether it is for a family member, a friend or even for your yourself
                                    </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>What if a celebrity cannot complete my request? </Accordion.Header>
                                    <Accordion.Body>
                                    <p>
                                        In the unlikely eventwhenthe celebrity cannot fulfill your request, a full refund will be issued
                                    </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                               
                                </Accordion>
                         </Col>
                        <Col lg={6}>
                            <div className='faq_bimg'>
                                <img src={faqimg} className='img-fluid'></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        
        </>
    )
}
export default Home;