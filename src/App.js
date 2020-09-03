import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import RegistrationPage from './components/RegistrationPage/RegistrationPage.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import MainPage from './components/MainPage/MainPage.js';
import MyPage from './components/MyPage/MyPage.js';
import AddPostPage from './components/AddPostPage/AddPostPage.js';

class App extends React.Component {
  render(){
    return (
      <main className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/register' component={RegistrationPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/main' component={MainPage} />
          <Route path='/my-page' component={MyPage}/>
          <Route path='/add-post' component={AddPostPage}/>
        </Switch>
      </main>
    );
  } 
}

export default App;
