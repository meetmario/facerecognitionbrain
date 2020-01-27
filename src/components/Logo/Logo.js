import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
       <div className='ma4 logo'>
           <Tilt className="Tilt" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop: '5px'}} src={logo} alt="logo" /> </div>
           </Tilt>
       </div> 
    );
}

export default Logo;