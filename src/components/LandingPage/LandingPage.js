import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';


class LandingPage extends React.Component {
    render(){
        return(
            <div className="LandingPage">
                <img className="dove-img" src="https://i.imgur.com/RPwFA2V.png" alt="dove-img" />
                <h1 className="app-name">Faith Share</h1>

                <img className="scripture-img" src="https://i.imgur.com/ULs5Rg2.jpg" alt="scripture-img" />
                <div className="landing-page-main-links-div">
                    <Link to='/main'>
                        <button className="main-page-button">Go To Main Page</button>
                    </Link>
                    <Link to='/my-page'>
                        <button className="my-page-button">Go To My Page</button>
                    </Link>
                </div>
                <p className="about-app">
                    This app lets you join a group of like-minded people
                    interested in Christianity in sharing links, articles, videos, chats, etc. 
                    with each other.
                </p>
            </div>
        )
    }
}

export default LandingPage;