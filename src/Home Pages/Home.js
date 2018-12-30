
import React, {Component} from 'react';
import {NavLink} from 'react-dom';
import { Route, Redirect } from 'react-router';

export default class Home extends Component{


    constructor(props){

        super(props)
        this.state = {
            redirect: false
        }

        this.jumpToSignIn = this.jumpToSignIn.bind(this)
    }

    jumpToSignIn(event){
        this.setState({redirect: true});
    }

    render(){

        if(this.state.redirect === true){
            return <Redirect to='/signIn'/>
        }

        return(
            <div className="App">
            <header className="App-header">

            <h1>Welcome!</h1>
            <button title="Sign In" onClick={this.jumpToSignIn} />
            
            </header>
            </div>

        );
    }

    
    
}