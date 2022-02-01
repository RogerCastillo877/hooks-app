import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
      
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          
            <Link className="navbar-brand" to="/">UseContext</Link>    
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink exact="true" activeclassname="active" to="/" className="nav-item nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact="true" activeclassname="active" to="/about" className="nav-item nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact="true" activeclassname="active" to="/login" className="nav-item nav-link">Login</NavLink>
                    </li>
                </ul>
       
            </div>
    </nav>
  )
};
