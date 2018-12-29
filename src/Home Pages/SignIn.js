import React, {Component} from 'react';



export default class SignIn extends Component{
    constructor(props){

        super(props)
        this.state = {
            firstName: '',
            lastName: '', 
            email: '',
            username: '',
        }
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

            <h1>Sign In!</h1>
            <label>
                <input type="text" placeholder="First Name" />
            </label>
            </header>
            </div>

        );
    }
}