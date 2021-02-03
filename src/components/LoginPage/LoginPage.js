import React, { Component} from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';

class LoginPage extends Component {

    //to store any error messages that occur when the user tries to login
    state = { error:null }

    //to handle a successful login attempt
    handleLoginSuccess = () => {
        const { history } = this.props;
        history.push('/');
    };

    //to handle when the user submits information to login
    handleSubmitJwtAuth = ev => {
        ev.preventDefault();
        const { user_name, password } = ev.target;
        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                user_name.value = '';
                password.value = '';
                this.handleLoginSuccess();
            })
            .catch(res => {
                this.setState({ error: res.error });
            });
    };

    render(){
        //console.log("render@LoginPage.js")
        const { error } = this.state;
        return(
            <div className="LoginPage">
                <Link className="Link" to="/">
                    <h1 className="app-name">Faith Share</h1>
                </Link>
                <img className="dove-img" src="https://i.imgur.com/RPwFA2V.png" alt="dove-img" />

                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
                    <div role="alert">
                        {error && <p className='red'>{error}</p>}
                    </div>    
                    <label htmlFor='login_user_name'>
                        Username:
                    </label>
                    <input type='text' name='user_name' id='login_user_name' required/><br/>
                    
                    <label htmlFor='login_password'>
                        Password:
                    </label>
                    <input type='text' name='password' id='login_password' required/><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )

    }

}

export default LoginPage;