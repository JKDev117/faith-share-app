import React from 'react';
import './RegistrationPage.css';
import { Link } from 'react-router-dom';

class RegistrationPage extends React.Component {
    state = {error: null}

    render(){
        const { error } = this.state
        return(
            <div className="RegistrationPage">
                <Link className="Link" to="/">
                    <h1 className="app-name">Faith Share</h1>
                </Link>

                <img className="dove-img" src="https://i.imgur.com/RPwFA2V.png" alt="dove-img" />

                <h2 className="registration-title">Create Your Account</h2>
                <form className="registration-form" onSubmit={()=>{}}>
                    <div role='alert'>
                       { error && <p className='red'>{error}</p> }
                    </div>    
                    <label htmlFor='first_name'>
                        First Name:
                    </label>
                    <input type='text' name='first_name' id='first_name' required/><br/>

                    <label htmlFor='last_name'>
                        Last Name:
                    </label>
                    <input type='text' name='last_name' id='last_name' required/><br/>
                    
                    <label htmlFor='register_user_name'>
                        Username:
                    </label>
                    <input type='text' name='user_name' id='register_user_name' required/><br/>
                    
                    <label htmlFor='register_password'>
                        Password:
                    </label>
                    <input type='text' name='password' id='register_password' required/><br/>
                    
                    <button className='create-account-button' type="submit">Create account</button>
                </form>
            </div>
        )

    }
}


export default RegistrationPage;