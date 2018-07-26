import React from 'react';
import './Header.css';

export default class HeaderIntro extends React.Component{
    render(){
        return(
            <section className="header-intro">
                <h1 className="title">f/StopandGo</h1>
                <p>Meet your photography goals with an easy way to integrate and organize those goals into photoshoots.</p>
            </section>
        );
    }
};