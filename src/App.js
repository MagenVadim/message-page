import Header from './Header';
import Main from './Main';
import React, { Component } from 'react'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      counter:0,
      nots: [
          {
              id:111, 
              cardType:"NotifUnreadCard",
              className: "notif_card unread",
              url:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
              name:"Mark Webber",
              reaction:"reacted to your post",
              message: "My first tournament today!",
              time:"1m ago",
              updateClassName:""
          },
          {   
              id:112,
              cardType:"NotifUnreadCard",
              className:"notif_card unread",
              url:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Images.png",
              name:"Angela Gray",
              reaction:"followed you",
              message: "",
              time:"5m ago",
              updateClassName:""
          },
          {
              id:113,
              cardType:"NotifUnreadCard",
              className:"notif_card unread",
              url:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png",
              name:"Jacob Thompson",
              reaction:"has joined your group",
              time:"1 day ago",
              link:"Chess Club ",
              updateClassName:""
          },
          {
              id:114,
              cardType:"NotifMessageCard",
              className:"notif_card",
              classMessage:"message_card",
              url:"https://www.pngall.com/wp-content/uploads/12/Avatar.png",
              name:"Rizky Hasanuddin",
              reaction:"sent you a private message",
              time:"5 days ago",
          },
          {
              id:115,
              cardType:"Message",
              message:"Hello, thanks for setting up the Chess Club. I`ve been a member for a few weeks now and I`m already having lots of fun and improving my game."
          },
          {
              id:116,
              cardType:"NotifIconCard",
              className:"notif_card",
              url:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photo.png",
              name:"Kimberly Smith",
              reaction:"commented on your picture",
              time:"1 week ago",
              icon_url:"https://cdn3.iconfinder.com/data/icons/hobbies-and-free-time-10/64/Hobbies_Filled_Outline_1_chess-strategy-game-hobby-256.png",
          },
          {  
              id:117,
              cardType:"NotifCard",
              className:"notif_card",
              url:"https://www.pngall.com/wp-content/uploads/12/Avatar-Transparent.png",
              name:"Nathan Peterson",
              reaction:"reacted to your resent post",
              message :"5 end-game strategies to increase your win rate",
              time:"2 weeks ago",
          },
          {
              id:118,
              cardType:"NotifCard",
              className:"notif_card",
              url:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-File.png",
              name:"Anna Kim",
              reaction:"left the group",
              time:"2 weeks ago",
              link:"Chess Club ",
          }
      ]
    }

    this.updateCounter = this.updateCounter.bind(this)
    this.updateMarkAll = this.updateMarkAll.bind(this)
    this.updateNots = this.updateNots.bind(this); 
  }

  updateCounter = (value) =>{
    this.setState({counter: value})     
  }

  updateNots = (id) => {              
    this.setState(                
        this.state.nots.map((el)=>{
            if(el.id==id){el.className="notif_card"; el.cardType="NotifCard"}             
        })                
    )
  }


  updateMarkAll = ()=>{
    this.setState(
      this.state.nots.map((el)=>{
        if(el.className==="notif_card unread"){
          el.className="notif_card";
          el.cardType="NotifCard"
          console.log(el.id)
        } 
    })    
  )
  this.updateCounter(0)
}
  

  render() {
    return (
      <div className="container">
        <Header counter={this.state.counter} updateMarkAll={this.updateMarkAll}/>
        <Main nots={this.state.nots} updateNots={this.updateNots} updateCounter={this.updateCounter}/>       
    </div>
    )
  }
}


