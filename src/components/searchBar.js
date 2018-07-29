import React from 'react';

import './searchBar.css';

export default class SearchBar extends React.Component{
    render(){
        return(
            <div>
                <form className="dash-search-form" action="#">
                    <label htmlFor="dash-search-input"></label>
                    <input type="search" id="dash-search-input" placeholder="Search your shoots..." autoComplete="off" />
                    <button className="dash-search-button"><i className="fas fa-search"></i></button>
                </form>
            </div>
        );
    }
}