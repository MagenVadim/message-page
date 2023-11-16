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
            
        }

        this.updateClassName = this.updateClassName.bind(this); 
    }

        componentDidMount() {
            this.props.updateCounter(3)  
            this.setState({counter:0})                       
        }      

        updateClassName = (id) => {
            this.setState({counter:0})
            this.props.updateNots(id)
            this.props.updateCounter(this.state.counter-1)
        }

        
    render(){
        return (            
            <main>             
                {                    
                    this.props.nots.map((el)=>{                                  
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
