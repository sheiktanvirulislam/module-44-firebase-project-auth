import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from './logo1.jpg';
import './Header.css'
function Header() {
    const styles = {
        backgroundImage:`url(${logo1}),linearGradient(rgba(0,0,0,0.4))`
    }
    
    return (
        <div className="header">
          
           <nav className="nav">
              <ul>
                <li><Link to="/home">
                       Home
                    </Link></li>
                <li><Link to="/login">Login</Link></li>
                <li>
                   <Link to="book" >Book</Link>
               </li>    
              </ul>  
           </nav>'
           <div className="title">
               <h1>Burj Al Arab</h1>
               <h2>A Global Icon Of Arabian Luxury</h2>
           </div>
        </div>
    );
}

export default Header;