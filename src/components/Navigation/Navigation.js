import React from 'react';
import './Navigation.css'


const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (

        <nav>
          <ul>
            <li><a onClick={() => onRouteChange('home')}>Home</a></li>
            <li><a onClick={() => onRouteChange('Survey')}>Survey</a></li>
            <li><a onClick={() => onRouteChange('Chat')}>Chat</a></li>
            <li><a onClick={() => onRouteChange('Profiles')}>Profiles</a></li>
            <div class="toRight">
              <li ><a class="active"  onClick={() => onRouteChange('signout')}>Sign Out</a></li>
            </div>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav >
          <ul>
            <div class="toRight">
              <li onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'>Sign In</li>
              <li onClick={() => onRouteChange('register')} className='f3 link dim white underline pa3 pointer'>Register</li>
            </div>
          </ul>
        </nav>
      );
    }
}

export default Navigation;
