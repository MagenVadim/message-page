
function Message(props) {

  return (
    <>
        <div id={props.id} className="message">
            <p>{props.message}</p>
        </div>
    </>

  )
}

export default Message
