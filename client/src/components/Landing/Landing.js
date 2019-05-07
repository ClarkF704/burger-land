import React from 'react';
import './Landing.css';
import Facebook from './fb.svg';
import Twitter from './twit.svg';
import Github from './gh.svg';
import Logo from './logo.png';



function Landing() {

return (
<div>
<h1 className="mission"> Our Pledge: We only use the finest ingredients. All of our ingredients are imported straight from Spain to your table. </h1>
<img src={Logo}  class="it" style={{borderRadius:'10px', height:'300px'}}></img>
<section id="sociallinks">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
<h4 className="media"> Follow us on social media!</h4>
<img src={Facebook} alt="facebook"/>
<img src={Twitter} alt="facebook"/>
<img src={Github} alt="facebook"/>
</section>



</div>
  );
}

export default Landing;