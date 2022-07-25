import React from 'react';
import Container from 'react-bootstrap/Container';
import fimg from '../../img/fimg.png';
function Footer(){
  
    return(
        <>
          <div className='foter'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-sm-4 col-md-4'>
                        <div className='box-ft'>
                            <div className='fot-log0'>
                                <img src={fimg}  className='ftr-loqgo' alt='d'></img>
                                <p>At LUXE STAR, we are thin boundaries between brand, celebrities and fans. We make your work easier by finding the right Influencer, Celebrities, Models, Athletes, Graphic designers, Photographers, Cinematographers, Creative Content writers, etc.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-4 col-md-4'>
                        <div className='fox-foter'>
                        <h5>Corporate Office</h5>
                        <ul>
						<li> E-53 SECOND FLOOR,</li>
						<li> above CORPORATION BANK,</li>
						<li> Mahipalpur, New Delhi,</li>
						<li> Delhi 110037.</li>
						
					</ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-4 col-md-4'>
                        <div class="fox-foter">
                            <h5>Company</h5>
                            <ul>
                            <li><a href="category.php">Category</a></li> 
                                <li><a href="about-us.php">About Us</a></li>
                                <li><a href="contact-us.php">Support</a></li>
                                <li><a href="partner.php">Partner</a></li>
                                <li><a href="faq.php">Faq</a></li>
                                <li><a href="our-gallery.php">Gallery</a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-4 col-md-4'>
                        <div class="fox-foter">
                        <h5>Contact Us</h5>
                        <ul>
                            <li><a href="mailto:Info@luxestar.co.in">Email-Info@luxestar.co.in</a></li>
                            <li><a href="tel:9625149654">Phone No: +91 96251 49654</a></li>
                            <li><a href="#">Follow us at</a></li>
                        </ul>
                        <div class="socal-icon">
						<ul>
						
							<li><a href="https://www.instagram.com/luxestarindia/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
							<li><a href="https://www.facebook.com/luxestarindia" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
						
							<li><a href="https://wa.me/9625149654" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
							<li><a href="tel:9625149654"><i class="fa fa-phone" aria-hidden="true"></i></a></li>

						</ul>
					</div>
                        </div>
                        
                    </div>
                </div>
            </div>
          </div>
          <div className='subftr'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                    <p> Designed and Developed by  <a href="https://ebslon.com/" target="_blank"> Ebslon Infotech </a></p>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Footer; 