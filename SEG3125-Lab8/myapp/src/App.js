import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinjas from './AddNinjas'

class App extends Component{
  state = {
    ninjas : [
      {name : "Ryu", age:29, belt:'black', id:1},
      {name: 'yoshi', age: 12, belt:'green', id:2}
    ]
  }
  addNinja = (ninja) =>{
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  } 
  deleteNinja = (id) =>{
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }

  render(){  
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja = {this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinjas addNinja={this.addNinja}/>
      </div>
    );
  }
}


export default App;
