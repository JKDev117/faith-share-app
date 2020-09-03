import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav(){

        let location = useLocation()
              
        switch (location.pathname) {
          case '/':
            return (
                <nav>
                    <Link className='login-link' to="/login">Login</Link>
                            {' '}
                    <Link className='register-link' to='/register'>Register</Link>
                </nav>
            )
          case '/main':
              return (
                <nav>
                    <Link className='my-page-link' to="/my-page">My Page</Link>
                            {' '}
                    <Link className='logout-link' to="/">Logout</Link>         
                </nav>
              )  
          case '/my-page':
            return (
                <nav>
                    <Link className="main-page-link" to="/main">Main Page</Link>
                            {" "}
                    <Link className='logout-link' to="/">Logout</Link>         
                </nav>        
            )
          default:
            return (
                <></>        
            )
        }
}