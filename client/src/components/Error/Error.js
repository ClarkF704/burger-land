import React from 'react';
import './Error.css'
import sad from './sad.png';

function Error() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 style={{textAlign:'center'}}>OOPS 404</h1>
                </div>
            </div>
        </div>
        <br/>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div style={{textAlign:'center'}}>
            <img src={sad} style={{height:'200px', width:'auto'}}/>
            </div>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default Error;