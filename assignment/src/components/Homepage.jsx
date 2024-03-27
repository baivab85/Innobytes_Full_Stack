import React, { useState } from 'react';
import './Landing.css'; // Import your CSS file

function LandingPage() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="top_border">
        {/* Your top border content */}
        <div className="icons">
         
          <a href="#">
            {' '}
            <i style={{ marginLeft: '-328px' }} className="fa-brands fa-twitter"></i>
          </a>
          
          <a href="#">
            <i style={{ marginLeft: '20px' }} className="fa-brands fa-instagram"></i>
          </a>

          <a href="#">
            <i style={{ marginLeft: '20px' }} className="fa-brands fa-facebook"></i>
          </a>
         
          <a href="#">
            <i style={{ marginLeft: '20px' }} className="fa-brands fa-youtube"></i>
          </a>
 
          <a href="#">
            <i style={{ marginLeft: '20px' }} className="fa-brands fa-pinterest"></i>
          </a>
      
          <a href="#">
            <i style={{ marginLeft: '20px' }} className="fa-brands fa-linkedin"></i>
          </a>
     
          <a style={{ textDecoration: 'none' }} href="tel:8017472433">
            <i style={{ marginLeft: '198px', color: 'aliceblue' }} className="fa-solid fa-phone">
              {' '}
              +918999825013
            </i>
          </a>
          
          <a style={{ textDecoration: 'none', fontSize: 'small' }} href="mailto:internship.innobyteservices@gmail.com">
            <i style={{ marginLeft: '68px', color: 'aliceblue' }} className="fa-sharp fa-solid fa-envelope">
              {' '}
              internship.innobyteservices@gmail.com
            </i>
          </a>
          <a style={{ textDecoration: 'none', color: 'black' }} href="/gets_started">
            <div className="consult">
             <a style={{ marginTop: '10px', marginLeft: '8px', color:'white',fontSize:'20px'}}> GET STARTED</a>
            </div>
          </a>
        </div>
      </div>

      <div className="heading">
        {/* Your heading content */}
        <img src="img/landing_page.jpg" height="55px" width="55x" style={{ marginLeft: '-1400px', marginTop: '16px' }} />
        <p style={{ marginLeft: '-1030px', fontSize: 'xx-large', fontWeight: '1000', marginTop: '-55px' }}>INNOBYTES</p>

       

        <table style={{ marginLeft: '750px', marginTop: '-60px', height: '30px' }}>
          <tr>
            <td style={{ height: '30px' }}>
              <input
                type="search"
                name="search"
                className="form-control"
                placeholder="&#xF002; Search"
                style={{ fontFamily: 'Arial,FontAwesome' }}
              />
            </td>
          </tr>
        </table>
      </div>

      <div id="control" className="carousel slide col-12" data-pause="false" data-interval="4000" data-ride="carousel">
        {/* Your carousel content */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block tales" src="img/slider10.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block tales" src="img/slider8.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block tales" src="img/slider7.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#control" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#control" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="launch1"></div>

      <div className="launch">
        {/* Your launch section content */}
        <a href="">
          <i style={{ marginLeft: '-50px', marginTop: '70px',fontSize:'33px' }} className="fa-solid fa-rocket">
            {' '}
            LAUNCH A BUSSINESS
          </i>
        </a>
        <a href="">
          <i style={{ marginLeft: '30px',fontSize:'33px' }} className="fa-solid fa-blog">
            {' '}
            ONLINE MANAGEMENT
          </i>
        </a>
        <a href="">
          <i style={{ marginLeft: '30px',fontSize:'33px' }} className="fa-solid fa-business-time">
            {' '}
            BUSSINESS PLAN
          </i>
        </a>
      </div>

      <div className="bc" style={{ height: '580px', width: '100%', fontWeight: 700, backgroundImage: "url('img/bg-map-d.png')", backgroundRepeat: 'no-repeat' }}>
  <div className="about">
    {/* Your about section content */}
    <h1 style={{ textAlign: 'center', marginTop: '20px' }}><u>ABOUT</u></h1>
   
    <p style={{ marginLeft: '20px' }} id="myParagraph">InnoBytes Technologies embodies the essence of innovation, seamlessly blending cutting-edge products and services to cater to the diverse needs and requirements of our esteemed customers. Our foundation is built upon the pillars of creativity, talent, and a youthful vigor that propels us towards excellence.

At the heart of our success lies our unwavering commitment to fostering strong Industry-Academia Relations. Our team comprises individuals hailing from esteemed backgrounds in technology and manufacturing, bringing with them a wealth of experience and expertise. Through collaborative efforts, we harness the collective wisdom of industry veterans to fuel our journey of innovation.

Our recent participation in Prime Minister Narendra Modi’s “Make In India” program in Mumbai and the "Start Up India" Initiative in New Delhi stands as a testament to our dedication to driving forward the entrepreneurial spirit in India. Rubbing shoulders with luminaries from Silicon Valley, venture capitalists, and distinguished figures from both the government and industry, we have affirmed our position as trailblazers in the realm of innovation.

Now, as we set our sights on Hannover, Germany, we embark on a new chapter filled with boundless opportunities. Our mission transcends borders as we aspire to ignite passion and transform dreams into reality. In Hannover, we invite like-minded individuals who dare to dream and strive for innovation to join us on this exhilarating journey.

InnoBytes Technologies beckons to those who possess the spark of innovation and the courage to chase their aspirations. Here, amidst a melting pot of creativity and ambition, lies the perfect environment to nurture your ideas and witness them flourish. If you harbor dreams and seek to make a difference, then look no further—this is the place where innovation knows no bounds. Welcome to InnoBytes Technologies, where passion meets purpose, and dreams take flight.




<span id="dots">...</span><span id="more">.</span>
    </p>
    <div className="consult1">
      <button style={{ marginTop: '3px', marginLeft: '8px' }} onClick={toggleReadMore}> READ MORE</button>
    </div>
  </div>

  <div className="image_about">
    {/* Your image about content */}
    <img style={{ marginLeft: '60px' }} src="img/about_img-removebg-preview.png" alt="...." height="380px" width="480px" />
  </div>
</div>
<div className="services">
        <br />
        <h1 style={{ marginLeft: '20px' }}>OUR SERVICES</h1>
        <br/>

        <img src="img/UX.jpg" alt=".." height="320px" width="320px" style={{ marginLeft: '25px' }} />
        <img src="img/creative_ideas.jpg" alt=".." height="320px" width="320px" style={{ marginLeft: '50px' }} />
        <img src="img/retina.png" alt=".." height="320px" width="320px" style={{ marginLeft: '50px' }} />
        <img src="img/customer_exp.jpg" alt=".." height="320px" width="320px" style={{ marginLeft: '50px' }} />
      </div>

      <div className="ux">
        <br />
        <div className="chaka" style={{ marginLeft: '20px' }}><i className="fa-solid fa-user" style={{ marginLeft: '0px' }}></i></div>
        <p style={{ marginLeft: '58px', fontSize: 'larger', fontWeight: 'bolder', marginTop: '-26px' }}>USER EXPERIENCE</p>
      </div>

      <div className="uy">
        <br />
        <div className="chaka" style={{ marginLeft: '20px' }}><i className="fa-sharp fa-solid fa-pen-to-square" style={{ marginLeft: '6px' }}></i></div>
        <p style={{ marginLeft: '58px', fontSize: 'larger', fontWeight: 'bolder', marginTop: '-26px' }}>CREATIVE IDEAS</p>
      </div>

      <div className="uz">
        <br />
        <div className="chaka" style={{ marginLeft: '20px' }}><i className="fa-solid fa-eye" style={{ marginLeft: '4px' }}></i></div>
        <p style={{ marginLeft: '58px', fontSize: 'larger', fontWeight: 'bolder', marginTop: '-26px' }}>PROGRESSIVE WEBSITES</p>
      </div>

      <div className="uw">
        <br />
        <div className="chaka" style={{ marginLeft: '20px' }}><i className="fa-solid fa-users" style={{ marginLeft: '4px' }}></i></div>
        <p style={{ marginLeft: '58px', fontSize: 'larger', fontWeight: 'bolder', marginTop: '-26px' }}>CUSTOMER SUPPORT</p>
      </div>

      <footer>
        @Alrights reserved 2024 <i className="fa-solid fa-up-right-from-square"></i>
      </footer>
    </div>
  );
}

export default LandingPage;

