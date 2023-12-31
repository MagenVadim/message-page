import Avatar from './Avatar' 
import Description from './Description'
import Icon from './Icon' 

function NotifIconCard(props) {
  return (

    <div id={props.id} className={props.className}>
            <Avatar url={props.url}/>
            <Description name={props.name} reaction={props.reaction} message = {props.message} time={props.time} link={props.link}/>
            <Icon url={props.icon_url}/>
    </div>

  )
}

export default NotifIconCard