
import React, {Component} from 'react';
import {NavLink} from 'react-dom';

export default class Home extends Component{
    constructor(props){

        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }
//gathering data from information in textfields
    handleSubmit(event){
        event.preventDefualt()
        var data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            username: this.state.username
        }
        console.log(data)
    }
    

    render(){
        return(
            <div className="App">
            <header className="App-header">

            <h1>Welcome!</h1>
            <button title="Sign In" onPress={() => this.props.navigation.push('Signin')} />
            </header>
            </div>

        );
    }

    
    
}