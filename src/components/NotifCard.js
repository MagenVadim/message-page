import Avatar from './Avatar' 
import Description from './Description'

function NotifCard(props) {
  return (

    <div className={props.status}>
            <Avatar url={props.url}/>
            <Description name={props.name} reaction={props.reaction} message = {props.message} time={props.time} link={props.link}/>
    </div>

  )
}

export default NotifCard
