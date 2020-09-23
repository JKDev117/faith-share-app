import React from 'react';
import { Link } from 'react-router-dom';
import './MyPage.css';


class MyPage extends React.Component {
    render(){
        return(
            <div className="MyPage">
                <section className="my-bio">
                    <div className="bio-user-img-and-name">
                        <img className="bio-user-img" src="https://i.imgur.com/1TFqjAS.jpg" alt="user-img" />
                        <h3 className="bio-username-my-page">Steve</h3>
                        <p className="bio-info">Hello, world.</p>
                        <Link className='new-post-link' to='/add-post'>+ New Post</Link>
                    </div>
                    <img className="cover-img" src="https://i.imgur.com/nYN45VB.jpg" alt="cover-img" />
                </section>
                <button className='share-new-post-button'>+ New Post</button>

                <h2 className="my-posts-header">My Posts</h2>

                <section className='user-posts-section'>
                    <div className="user-post">
                        <div className="user-img-and-name">
                            <h3><a className="user-name-anchor-tag" href='/my-page'>Steve</a></h3>
                            <img className="user-img" src="https://i.imgur.com/1TFqjAS.jpg" alt="user-img" />
                        </div>
                        <div className="user-post-content-and-buttons">
                            <p className="date">Aug 30</p>
                            <div className="user-post-content">
                                Quantum Theory is the closest thing to secular minds catching up to the Bible. 
                                The duality of light as particle & wave (the God-Man Jesus). Quantum nonlocality (Omnipresence). 
                                Action at a distance or instantaneous affect of one particle on another regardless of distance (Prayer).
                            </div>
                            <div className="like-and-comment-buttons">
                                <button className="like-button">Like</button>
                                <button className="comment-button">Comment</button>
                                <button className="delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="user-post">
                        <div className="user-img-and-name">
                            <h3><a className="user-name-anchor-tag" href='/my-page'>Steve</a></h3>
                            <img className="user-img" src="https://i.imgur.com/1TFqjAS.jpg" alt="user-img" />
                        </div>
                        <div className="user-post-content-and-buttons">
                            <p className="date">Aug 28</p>
                            <div className="user-post-content">
                                "You must have a capacity to receive, or even omnipotence can't give." -C.S. Lewis
                            </div>
                            <div className="like-and-comment-buttons">
                                <button className="like-button">Like</button>
                                <button className="comment-button">Comment</button>
                                <button className="delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="user-post">
                        <div className="user-img-and-name">
                            <h3><a className="user-name-anchor-tag" href='/my-page'>Steve</a></h3>
                            <img className="user-img" src="https://i.imgur.com/1TFqjAS.jpg" alt="user-img" />
                        </div>
                        <div className="user-post-content-and-buttons">
                            <p className="date">July 28</p>
                            <div className="user-post-content">
                                If my interpretation of the Bible is correct, there will be a new strain of coronavirus named something 
                                like chrysoscoronavirus or Covidaurum. A lot of times the Bible plays on words that become common or 
                                clear later. Like chloroquine is a play on chloros + equine = green horse.
                            </div>                            
                            <div className="like-and-comment-buttons">
                                <button className="like-button">Like</button>
                                <button className="comment-button">Comment</button>
                                <button className="delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MyPage;