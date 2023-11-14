import './Header.css'
import React, { Component } from 'react'

export default class Header extends Component{

  constructor(props){
    super(props);

    
  }

  render(){
    return (
      <header>
        <div className="notif_box">
              <h2 className="title">Notifications</h2>
              <span id="notifications">{this.props.counter}</span>
          </div>
          <p id="mark_all">Mark all as read</p>
      </header>
    )
  }
}
