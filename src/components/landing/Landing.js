import React from 'react';

import './Landing.css';

import Header from './Header';
import LandingActions from './LandingActions';
import AppDescription from './AppDescription';

export const Landing = () => {
    return(
        <div>
            <header className="landing-header">
                <Header />
                <LandingActions />    
            </header>
            <AppDescription />
        </div>
    );
}

export default Landing;