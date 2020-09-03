import React from 'react';
import './AddPostPage.css';

class AddPostPage extends React.Component {
    state = {error: null}

    render(){
        const { error } = this.state
        return(
            <div className="AddPostPage">

                <h2 className="registration-title">Create a Post</h2>
                <form className="add-post-form" onSubmit={e=>e.preventDefault()}>
                    <div role='alert'>
                       { error && <p className='red'>{error}</p> }
                    </div>    

                    <label htmlFor='image-url'>
                        Image URL:
                    </label>
                    <input type='text' name='image-url' id='image-url'/><br/>

                    <label htmlFor="text-box">Text: </label>
                    <textarea className="text-input-box" id="text-box"></textarea><br/>

                    <label htmlFor='video-link'>
                        Article or Video URL:
                    </label>
                    <input type='text' name='video-link' id='video-link'/><br/>
                    
                    <label htmlFor='url-link'>  
                        Webpage URL:
                    </label>
                    <input type='text' name='url-link' id='url-link'/><br/>
                    
                    <button className='submit-post-button' type="submit">Submit new post</button>
                    <button className='cancel-button' type="button" onClick={()=>this.props.history.goBack()}>Cancel</button>

                </form>
            </div>
        )

    }
}


export default AddPostPage;