function Description(props) {
    return (
        <>
            <div className="description">
                <p className="user_activity">
                    <strong>{props.name}</strong> {props.reaction} <b>{props.message}</b> <strong className="link">{props.link}</strong>
                </p>
                <p className="time">{props.time}</p>
            </div>
        </>
      
    )
  }
  
  export default Description