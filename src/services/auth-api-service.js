import config from '../config';


const AuthApiService = {

    //POST /user
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



        
        })




    }



}


export default AuthApiService;