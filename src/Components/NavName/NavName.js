import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBook } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './NavName.css'

const NavName = () => {
    return (
        < div className='ms-5 navigation fixed-top bg-white '>
            
            <h2 className = "navbar-brand fw-bolder fs-1 text-danger " href="#"><FontAwesomeIcon icon={faBook} /> দাওয়াহ বুক হাউস </h2>
            
            
        </div>
    );
};

export default NavName;