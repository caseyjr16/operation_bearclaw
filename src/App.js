import React, { Component } from 'react';
import Home from './Home Pages/Home';
import SignIn from './Home Pages/SignIn';
import SignUp from './Home Pages/SignUp';
import {BrowserRouter, Route} from 'react-router-dom';
import './Home Pages/homepagescss/home.css';


class App extends Component {
    render() {
      return (

        

        <BrowserRouter>
          <div>
            <Route exact={true} path='/' render={() => (
              <div className="App">
                <Home />
              </div>
            )}/>
            <Route exact={true} path='/signin' render={() => (
              <div className="App">
                <SignIn />
              </div>
            )}/>
            <Route exact={true} path='/signup' render={() => (
              <div className="App">
                <SignUp />
              </div>
            )}/>
          </div>
        </BrowserRouter>
      );
    }
  }

export default App;
