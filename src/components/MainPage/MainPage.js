import React, {Component} from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';

class MainPage extends Component {

    render(){
        return(
            <div className="MainPage">
                <h2>Today's Daily Bread</h2>
                <p className="daily-bible-verse">‘Man shall not live on bread alone, but on every word that comes from the mouth of God.’ - Matthew 4:4</p>
                <section className="add-post-section">
                    <Link className='new-post-link' to='/add-post'>+ Share a New Post</Link>
                </section>
                <h2 className="timeline-header">Timeline</h2>
                <section className='users-posts-section'>

                    <div className="users-post">
                        <div className="users-img-and-name">
                            <h3><a className="user-name-anchor-tag" href='/my-page'>Steve</a></h3>
                            <img className="users-img" src="https://i.imgur.com/1TFqjAS.jpg" alt="users-img" />
                        </div>
                        <div className="users-post-content-and-buttons">
                            <p className="date">Aug 30</p>
                            <div className="users-post-content">
                                If my interpretation of the Bible is correct, there will be a new strain of coronavirus named something 
                                like chrysoscoronavirus or Covidaurum. A lot of times the Bible plays on words that become common or 
                                clear later. Like chloroquine is a play on chloros + equine = green horse.
                            </div>
                            <div className="like-and-comment-buttons">
                                <button className="like-button">Like</button>
                                <button className="comment-button">Comment</button>
                            </div>
                        </div>
                    </div>

                    <div className="users-post">
                        <div className="users-img-and-name">
                            <h3><a className="user-name-anchor-tag" href='/main'>Christine</a></h3>
                            <img className="users-img" src="https://i.imgur.com/9vln7v6.jpg" alt="users-img" />
                        </div>
                        <div className="users-post-content-and-buttons">
                            <p className="date">Aug 30</p>
                            <div className="users-post-content">
                               Sitting with friends watching a stunning SoCal sunset is good for my soul.
                               <img style={{width: '320px', height: '200px'}} src="https://i.imgur.com/VArOc1b.jpg" alt="socal-sunset" />
                            </div>
                            <div className="like-and-comment-buttons">
                                <button className="like-button">Like</button>
                                <button className="comment-button">Comment</button>
                                <button className="delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="users-post">
                        <div className="users-img-and-name">
                            <h3><a className="user-name-anchor-tag" href='/main'>Eitan</a></h3>
                            <img className="users-img" src="https://i.imgur.com/hW5QDM5.jpg" alt="users-img" />
                        </div>
                        <div className="users-post-content-and-buttons">
                            <p className="date">Aug 28</p>
                            <div className="users-post-content">
                                Check out our facebook page at <a href="https://www.facebook.com/oneforIsrael/" rel="noopener noreferrer" target="_blank">https://www.facebook.com/oneforIsrael/</a>
                            </div>
                            <div className="like-and-comment-buttons">
                                <button className="like-button">Like</button>
                                <button className="comment-button">Comment</button>
                            </div>
                        </div>
                    </div>

                </section>
            </div>    
        )
    }


}


export default MainPage;