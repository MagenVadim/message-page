import './Header.css'
import React, { Component } from 'react'

export default class Header extends Component{

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);    
  }

    handleClick = ()=>{
      this.props.updateMarkAll()
    }

  render(){
    return (
      <header>
        <div className="notif_box">
              <h2 className="title">Notifications</h2>
              <span id="notifications">{this.props.counter}</span>
          </div>
          <p id="mark_all" onClick={this.handleClick}>Mark all as read</p>
      </header>
    )
  }
}
