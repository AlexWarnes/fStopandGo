import React from 'react';

import './Landing.css';

import Header from './Header';
// import LandingActions from './LandingActions';
import AppDescription from './AppDescription';

export const Landing = () => {
    return(
        <div>
            {/* <LandingActions />     */}
            <header className="landing-header">
                <Header />
            </header>
            <AppDescription />
        </div>
    );
}

export default Landing;