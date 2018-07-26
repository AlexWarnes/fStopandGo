import React from 'react';
import { connect } from 'react-redux';

import './Landing.css';

import Header from './Header';
import LandingActions from './LandingActions';
import About from './AppDescription';
import CreateAcctForm from './Form-CreateAcct';
import LoginForm from './Form-Login';

export class Landing extends React.Component{
    render(){

        if (this.props.createAcctVisible === true) {
            return (<CreateAcctForm />);
        } else if (this.props.loginVisible === true) {
            return (<LoginForm />);
        } else {

            return(
                <div>
                    <header className="landing-header">
                        <Header />
                        <LandingActions />
                    </header>
                    <About />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        createAcctVisible: state.form_visibility.createAcct,
        loginVisible: state.form_visibility.login
    }
}

export default connect(mapStateToProps)(Landing);
