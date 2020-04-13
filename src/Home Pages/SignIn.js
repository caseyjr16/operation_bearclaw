import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './homepagescss/home.css';

export default class SignIn extends Component{
    constructor(props){

        super(props)
        this.state = {
            password: '',
            username: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
    }
    handleUserChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

//gathering data from information in textfields
    handleSubmit(event){
 
        var data = {
            password: this.state.password,
            username: this.state.username
        }
        
        console.log(data);
        event.preventDefault();
    }
    
                       
    render(){
        return(
            <div className="App"  class="background">
            <header className="App-header">

            <h1>Sign In!</h1>
            <label>
                <input type="text" value={this.state.username} onChange={this.handleUserChange} placeholder="UserName" />
                <br></br>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" />
                <br></br>
            </label>
            <Button class="button" variant="contained" onClick={this.handleSubmit}>Submit!</Button>
            </header>
            </div>

        );
    }
}