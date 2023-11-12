import React, { Component } from 'react'
import Avatar from './Avatar' 
import Description from './Description'

export default class NotifUnreadCard extends Component {
  constructor(props){
    super(props);

    this.state = {className: props.className}

  }

  render() {
    return (
      <div key={this.props.id} className={this.props.className} onClick={()=>{this.props.updateClassName(this.state.className)}}>
        <Avatar url={this.props.url}/>
        <Description name={this.props.name} reaction={this.props.reaction} message = {this.props.message} time={this.props.time} link={this.props.link}/>
      </div>
    )
  }
}




