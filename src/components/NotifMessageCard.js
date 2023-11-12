import Avatar from './Avatar' 
import Description from './Description'

function NotifMessageCard(props) {
  return (

    <div id={props.id} className={props.className}>
        <div className={props.classMessage}>
            <Avatar url={props.url}/>
            <Description name={props.name} reaction={props.reaction} message = {props.message} time={props.time} link={props.link}/>
        </div>
    </div>

  )
}

export default NotifMessageCard