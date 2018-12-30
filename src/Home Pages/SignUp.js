import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './homepagescss/home.css';
//this is the signUp page for users 

//initializing user's credentials 
export default class SignUp extends Component{
    constructor(props){

        super(props)
        this.state = {
            firstName: '',
            lastName: '', 
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleLastChange = this.handleLastChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
//gathering data from information in textfields
    handleSubmit(event){
        var data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        console.log(data)
        event.preventDefault();
    }
    
    handleFirstChange(event){
        this.setState({firstName: event.target.value});
    }

    handleLastChange(event){
        this.setState({lastName: event.target.value});
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }


    render(){
        return(
            <div className="App"  class="background">
            <header className="App-header">

            <h1>Sign Up!</h1>
            <label>
                <input type="text" value={this.state.firstName} onChange={this.handleFirstChange} placeholder="First Name" />
                <br></br>
                <input type="text" value={this.state.lastName} onChange={this.handleLastChange} placeholder="Last Name" />
                <br></br>
                <input type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="email" />
                <br></br>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" />
                <br></br>
                
                <Button class="button" variant="contained" onClick={this.handleSubmit}>Sign Up!</Button>
            </label>
            </header>
            </div>

        );
    }
}