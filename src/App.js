import React, { Component } from 'react';
import './App.css';



class App extends Component {

constructor(props){

  super(props);
  this.state = {firstname: '',
lastname: ''};

this.handleChange = this.handleChange.bind(this);
this.handleChange2 = this.handleChange2.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
  this.setState({firstname: event.target.value})

}

handleChange2(event){
  this.setState({lastname: event.target.value})
  
}

handleSubmit(event) {
  alert('A name was sumbitted:' + this.state.firstname + " " + this.state.lastname);
  event.preventDefault();
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <form onSubmit={this.handleSubmit}>
         <label>
           First Name:
           <input type="text" value={this.state.firstname} 
           onChange={this.handleChange} />
           </label>
           
           <label>
           Last Name: 
           <input type="text" value={this.state.lastname} onChange={this.handleChange2} />
           </label>
           <input type="submit" value="Submit" /> 
           </form>

        </header>
      </div>
    ); 
  }
}

export default App;
