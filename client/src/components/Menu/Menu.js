import React from 'react';
import './Menu.css';
import MenuI from './menu.jpg';
import Logo from './logo.png';
import Cheese from './cheese-1.png';
import Veggie from './veg.png';
import CHX from './chx.png';
import PP from './pulledp.png';
import RIB from './ribs.png';
import SAL from './sal.png';

function Menu() {
  return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <p style={{textAlign:'center', fontSize:'60px', fontFamily:'roboto', marginBottom:'50px'}}>Menu</p>
            <hr/>
            </div>
          </div>
        </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
              <p style={{textAlign:'center', fontFamily:'roboto', fontSize:'30px'}}>Cheese Burger</p>
              <div style={{textAlign:'center'}}>
              <img src={Cheese} style={{width:'200px', height:'auto' }}/>
              </div>
              <p style={{textAlign:'center', fontSize:'15px', fontFamily:'roboto'}}>Cheeseburger may include toppings, such as lettuce, tomato, onion, pickles, bacon, mayonnaise, ketchup, mustard or other toppings.</p>
              </div>
              <div className="col-lg-4">
              <p style={{textAlign:'center', fontFamily:'roboto', fontSize:'30px'}}>Veggie Burger</p>
              <div style={{textAlign:'center'}}>
              <img src={Veggie} style={{width:'200px', height:'auto' }}/>
              </div>
              <p style={{textAlign:'center', fontSize:'15px', fontFamily:'roboto'}}>A veggie burger is a burger patty that does not contain meat or any such kind of meat. Such burgers may be made from ingredients like beans, especially soybeans and tofu, nuts, grains, seeds or fungi such as mushrooms or mycoprotein.</p>
              </div>
              <div className="col-lg-4">
              <p style={{textAlign:'center', fontFamily:'roboto', fontSize:'30px'}}>Chicken Sandwich</p>
              <div style={{textAlign:'center'}}>
              <img src={CHX} style={{width:'200px', height:'auto' }}/>
              </div>
              <p style={{textAlign:'center', fontSize:'15px', fontFamily:'roboto'}}>Our Chicken Sandwich typically consists of a boneless, skinless breast of chicken served between slices of bread, on a bun, or on a roll.</p>
              </div>
            </div>
            <div className="row">
            <div className="col-lg-4">
              <p style={{textAlign:'center', fontFamily:'roboto', fontSize:'30px'}}>Pork Burger</p>
              <div style={{textAlign:'center'}}>
              <img src={PP} style={{width:'200px', height:'auto' }}/>
              </div>
              <p style={{textAlign:'center', fontSize:'15px', fontFamily:'roboto'}}>This blissfully meaty, juicy, perfectly grilled beef burger is studded with barbecue pulled pork and crispy bits of bacon, topped with melted pepperjack cheese, tangy barbecue sauce, and tender lettuce on a toasted bun.</p>
              </div>
              <div className="col-lg-4">
              <p style={{textAlign:'center', fontFamily:'roboto', fontSize:'30px'}}>Baby Back Ribs</p>
              <div style={{textAlign:'center'}}>
              <img src={RIB} style={{width:'200px', height:'auto' }}/>
              </div>
              <p style={{textAlign:'center', fontSize:'15px', fontFamily:'roboto'}}>Our ribs are taken from the top of the rib cage between the spine and the spare ribs, below the loin muscle. Then smothered in our homemade BBQ sauce.</p>
              </div>
              <div className="col-lg-4">
              <p style={{textAlign:'center', fontFamily:'roboto', fontSize:'30px'}}>Fresh Garden Salad</p>
              <div style={{textAlign:'center'}}>
              <img src={SAL} style={{width:'200px', height:'auto' }}/>
              </div>
              <p style={{textAlign:'center', fontSize:'15px', fontFamily:'roboto'}}>A garden salad consisting of lettuce, cucumber, scallions, cherry tomatoes, olives, sun-dried tomatoes, and cheese. Main ingredients. A base of vegetables, fruits, meat, eggs, or grains; mixed with a sauce.</p>
              </div>
            </div>
          </div>
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

export default Menu;