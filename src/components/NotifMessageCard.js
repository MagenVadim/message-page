import Avatar from './Avatar' 
import Description from './Description'
import Icon from './Icon' 

function NotifMessageCard(props) {
  return (

    <div className={props.className}>
        <div className={props.classMessage}>
            <Avatar url={props.url}/>
            <Description name={props.name} reaction={props.reaction} message = {props.message} time={props.time} link={props.link}/>
            {/* <Icon url={props.icon_url}/> */}
        </div>
    </div>

  )
}

export default NotifMessageCard