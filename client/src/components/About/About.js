import React from 'react';
import './About.css';
import Owner from './owner.png';
import Logo from './logo.png';
import Signature from './sig.png';

function About() {
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <p style={{fontSize:'70px', fontFamily:'Roboto'}}>Our Founder</p>
            <hr/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p style={{fontFamily:'Roboto'}}>James Nicklebee</p>
              <br/>
              <p style={{fontFamily:'Roboto'}}>Hello. James here! I hope you can enjoy my burger place. We are a family owned business. We please to serve others. Our secret recipe is a old family tradition. Grandma Nicklebee's recipe was founded back in the 1800s. My family and I are greatful to share this delicious recipe with the rest of the world. Please feel free to ask us about Grandma Nicklebee. She is a Nicklebee inspiration to all and may be a inspiration to you. We operate in a refill based business. If you do not leave satisfied we will give you your money back. No questions asked. Thats how passionate we are in what we do.</p>
              <br/>
              <img src={Signature}/>
            </div>
            <div className="col-lg-6">
              <img src={Owner} style={{height:'500px', width:'auto', fontFamily:'Roboto', borderRadius:'10px'}}/>
            </div>
          </div>
        </div>
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <div style={{textAlign:'center'}}>
            <img src={Logo} style={{height:'70px', borderRadius:'30px'}}/>
            </div>  
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default About;