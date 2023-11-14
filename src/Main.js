import './Main.css'
import React, { Component } from 'react'
import Message from './components/Message'
import NotifUnreadCard from './components/NotifUnreadCard'
import NotifMessageCard from './components/NotifMessageCard'
import NotifIconCard from './components/NotifIconCard'

export default class Main extends Component{   

    constructor(props){
        super(props);

        this.state = {
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

        this.updateClassName = this.updateClassName.bind(this); 
        
    }

        componentDidMount() {
            this.props.updateCounter(3)  
            this.setState({counter:0})                       
        }      

        updateClassName = (id) => {
            this.setState({counter:0})                
            this.setState(                
                this.state.nots.map((el)=>{
                    if(el.id==id){el.className="notif_card"; el.cardType="NotifCard"} 
                })                
            )
            this.props.updateCounter(this.state.counter-1)
        }


    render(){
        return (
            <main>             
                {                    
                    this.state.nots.map((el)=>{                        
                        if(el.cardType==="NotifUnreadCard"){
                            this.state.counter++                               
                            return(
                            <NotifUnreadCard
                                id={el.id}
                                className={el.className}
                                url={el.url}
                                name={el.name}
                                reaction={el.reaction}
                                message = {el.message}
                                time={el.time}
                                updateClassName = {this.updateClassName}
                            /> )
                        }                        
                        if(el.cardType==="NotifCard"){
                            return(
                                <NotifUnreadCard
                                    id={el.id}
                                    className={el.className}
                                    url={el.url}
                                    name={el.name}
                                    reaction={el.reaction}
                                    message = {el.message}
                                    time={el.time}
                                />)
                        }
                        if(el.cardType==="NotifMessageCard"){
                            return(
                            <NotifMessageCard
                                id={el.id}
                                className={el.className}
                                classMessage={el.classMessage}
                                url={el.url}
                                name={el.name}
                                reaction={el.reaction}
                                time={el.time}
                            />)
                        }

                        if(el.cardType==="Message"){
                            return(
                            <Message
                                id={el.id}
                                message = {el.message}
                            />)
                        }
                        if(el.cardType==="NotifIconCard"){
                            return(
                            <NotifIconCard
                                id={el.id}
                                className={el.className}
                                url={el.url}
                                name={el.name}
                                reaction={el.reaction}
                                time={el.time}
                                icon_url={el.icon_url}
                            />)
                        }                        
                    }
                    )
                }                 
            </main>
            
          )
          
    }
}
