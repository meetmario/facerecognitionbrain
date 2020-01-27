import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
    return (
       <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
           <p 
           className='f3 link dim yellow underline ph4 pointer'
           onClick={() => onRouteChange('signout')}
           >
               Logga Ut
            </p>
       </nav> 
    );
} else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signin')}
          className='f3 link dim green underline ph4 pointer'
        >
          Logga In
        </p>
        <p
          onClick={() => onRouteChange('register')}
          className='f3 link dim yellow underline ph4 pointer'
        >
          Registrera
        </p>
      </nav>
    );
  }
};

export default Navigation;