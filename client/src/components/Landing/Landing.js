import React from 'react';
import './Landing.css';
import Facebook from './fb.svg';
import Twitter from './twit.svg';
import Github from './gh.svg';
import Logo from './logo.png';



function Landing() {

return (
<div className="fix">
<div className="container">
<div className="row">
<div className="col-sm-12">
<div style={{ backgroundColor:'rgba(0,0,0,0.5)', borderRadius:'2%'}}>
<p style={{textAlign:"center", fontSize:'50px', color:'white', marginTop:'60px'}}> Welcome to BurgerLand </p>
<p style={{textAlign:'center', color:'white', fontSize:'25px', fontStyle:'italic'}}>Our Pledge: We only use the finest ingredients. All of our ingredients are imported straight from Spain to your table.</p>
<br/>
</div>

</div>
</div>
</div>
<section id="sociallinks">



<img src={Facebook} alt="facebook"/>
<img src={Twitter} alt="facebook"/>
<img src={Github} alt="facebook"/>
</section>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/>
<br/>
<br/>



</div>
  );
}

export default Landing;