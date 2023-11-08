import './Main.css'
import Avatar from './components/Avatar' 
import Icon from './components/Icon' 
import Description from './components/Description'
import Message from './components/Message'

  

function Main() {
  return (
    <>
        <div className="notif_card unread">
            <Avatar url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"}/>
            <Description name={"Mark Webber"} reaction={"reacted to your post"} message = {"My first tournament today!"} time={"1m ago"}/>
        </div>

        <div className="notif_card unread">
            <Avatar url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Images.png"}/> 
            <Description name={"Angela Gray"} reaction={"Angela Gray followed you"} time={"5m ago"}/>
        </div>

        <div className="notif_card unread">
            <Avatar url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png"}/>
            <Description name={"Jacob Thompson"} reaction={"has joined your group"} time={"1 day ago"} link={"Chess Club"}/>
        </div>

        <div className="notif_card">
            <div className="message_card">
                <Avatar url={"https://www.pngall.com/wp-content/uploads/12/Avatar.png"}/>
                <Description name={"Rizky Hasanuddin"} reaction={"sent you a private message"} time={"5 days ago"}/>
            </div>
        </div>

        <Message message={"Hello, thanks for setting up the Chess Club. I`ve been a member for a few weeks now and I`m already having lots of fun and improving my game."}/>

        <div className="notif_card">
            <Avatar url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photo.png"}/>
            <Description name={"Kimberly Smith"} reaction={"commented on your picture"} time={"1 week ago"}/>
            <Icon url={"https://cdn3.iconfinder.com/data/icons/hobbies-and-free-time-10/64/Hobbies_Filled_Outline_1_chess-strategy-game-hobby-256.png"}/>
        </div>


        <div className="notif_card">
            <Avatar url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Transparent.png"}/>
            <Description name={"Nathan Peterson"} reaction={"reacted to your resent post"} message = {"5 end-game strategies to increase your win rate"} time={"2 weeks ago"}/>
        </div>

        <div className="notif_card">
            <Avatar url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-File.png"}/>
            <Description name={"Anna Kim"} reaction={"left the group"} link={"Chess Club"} time={"2 weeks ago"}/>
        </div>

    </>

  )
}

export default Main