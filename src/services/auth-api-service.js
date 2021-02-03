import config from '../config';
import TokenService from './token-service';
import IdleService from './idle-service';

const AuthApiService = {
    //POST /users
    postUser(user) {
        return fetch(`${config.REACT_APP_API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res => (!res.ok) ?
            res.json().then(e => Promise.reject(e))
                :
            res.json()
        );
    },
    //POST /auth/login
    postLogin(credentials){
        return fetch(`${config.REACT_APP_API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        .then(res => (!res.ok) ?
            res.json().then(e => Promise.reject(e))
                :
            res.json()
        )
        .then(res => {
            /*
                Whenver a login is performed:
                    1. Save the token in local storage.
                    2. Queue auto logout when the user goes idle.
                    3. Queue a call to the refresh endpoint based on the JWT's exp value.
            */
            TokenService.saveAuthToken(res.authToken);
            IdleService.registerIdleTimerResets();
            TokenService.queueCallbackBeforeExpiry(() => {
                AuthApiService.postRefreshToken();
            });
            return res;        
        })
    },
    //POST /auth/refresh
    postRefreshToken() {
        return fetch(`${config.REACT_APP_API_BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => (!res.ok) ?
            res.json().then(e => Promise.reject(e))
                :
            res.json()
        )
        .then(res => {
          /*
            similar logic to whenever a user logs in, the only differences are:
            - we don't need to queue the idle timers again as the user is already logged in.
            - we'll catch the error here as this refresh is happening behind the scenes
          */
          TokenService.saveAuthToken(res.authToken);
          TokenService.queueCallbackBeforeExpiry(() => {
            AuthApiService.postRefreshToken();
          });
          return res;
        })
        .catch(err => {
            console.error(err);
        });
    }
};


export default AuthApiService;