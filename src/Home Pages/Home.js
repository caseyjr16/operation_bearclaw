
import React, {Component} from 'react';
import {NavLink} from 'react-dom';
import { Route, Redirect } from 'react-router';


export default class Home extends Component{


    constructor(props){

        super(props)
        this.state = {
            redirect1: false,
            redirect2: false
        }

        this.jumpToSignIn = this.jumpToSignIn.bind(this)
        this.jumpToSignUp = this.jumpToSignUp.bind(this)
    }

    jumpToSignIn(event){
        this.setState({redirect1: true});
    }

    jumpToSignUp(event){
        this.setState({redirect2: true});
    }
    render(){

        if(this.state.redirect1 === true ){
            return <Redirect to='/signIn'/>
            
        }
        
    
        if(this.state.redirect2 === true){
            return <Redirect to='/signUp'/>
        }
    

        return(
            <div className="App">
            <header className="App-header">

            <h1>Welcome!</h1>
            <button title="Sign In" onClick={this.jumpToSignIn} >Sign In</button>
            <button title="Sign Up" onClick={this.jumpToSignUp} >Sign Up</button>
            </header>
            </div>

        );
    }

    
    
}