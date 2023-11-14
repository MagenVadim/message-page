import Header from './Header';
import Main from './Main';
import React, { Component } from 'react'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={counter:0}
    this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter = (value) =>{
    this.setState({counter: value}) 
  }
  
  render() {
    return (
      <div className="container">
        <Header counter={this.state.counter}/>
        <Main updateCounter={this.updateCounter}/>       
    </div>
    )
  }
}


