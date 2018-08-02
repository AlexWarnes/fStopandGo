import React from 'react';
import { Link } from 'react-router-dom';

import './devNav.css'

export const DevNav = () => {
    return (
        <div className="devNavBar">
            <p><Link to="/">Landing</Link></p>
            <p><Link to="/dashboard">Dashboard</Link></p>
            <p><Link to="/dashboard/about">DB/About</Link></p>
        </div>
    )
}