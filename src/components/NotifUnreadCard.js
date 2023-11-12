import React, { Component } from 'react'
import Avatar from './Avatar' 
import Description from './Description'

export default class NotifUnreadCard extends Component {
  constructor(props){
    super(props);

    this.state = {className: "notif_card"}
    this.handleClick = this.handleClick.bind(this);
    

  }
  handleClick = (e) =>{
    this.props.updateClassName(e.target.id);
    }

  render() {
    return (
      // this.props.updateClassName(this.state.className);
      <div id={this.props.id} className={this.props.className} onClick={this.handleClick}>
        <Avatar url={this.props.url}/>
        <Description name={this.props.name} reaction={this.props.reaction} message = {this.props.message} time={this.props.time} link={this.props.link}/>
      </div>
    )
  }
}




