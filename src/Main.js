import './Main.css'
import Avatar from './components/Avatar' 
import Icon from './components/Icon' 
import Description from './components/Description'
import Message from './components/Message'
import NotifCard from './components/NotifCard'
import NotifMessageCard from './components/NotifMessageCard'
import NotifIconCard from './components/NotifIconCard'

function Main() {
  return (
    <main>
        <NotifCard
            status={"notif_card unread"}
            url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"}
            name={"Mark Webber"}
            reaction={"reacted to your post"}
            message = {"My first tournament today!"}
            time={"1m ago"}
        />

        <NotifCard
            status={"notif_card unread"}
            url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Images.png"}
            name={"Angela Gray"}
            reaction={"followed you"}
            time={"5m ago"}
        />

        <NotifCard
            status={"notif_card unread"}
            url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png"}
            name={"Jacob Thompson"}
            reaction={"has joined your group"}
            time={"1 day ago"}
            link={"Chess Club "}
        />
  

        <NotifMessageCard
            status={"notif_card"}
            classMessage={"message_card"}
            url={"https://www.pngall.com/wp-content/uploads/12/Avatar.png"}
            name={"Rizky Hasanuddin"}
            reaction={"sent you a private message"}
            time={"5 days ago"}
        />

        <Message message={"Hello, thanks for setting up the Chess Club. I`ve been a member for a few weeks now and I`m already having lots of fun and improving my game."}/>

        <NotifIconCard
            status={"notif_card"}
            url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photo.png"}
            name={"Kimberly Smith"}
            reaction={"commented on your picture"}
            time={"1 week ago"}
            icon_url={"https://cdn3.iconfinder.com/data/icons/hobbies-and-free-time-10/64/Hobbies_Filled_Outline_1_chess-strategy-game-hobby-256.png"}
        />

        <NotifCard
            status={"notif_card"}
            url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Transparent.png"}
            name={"Nathan Peterson"}
            reaction={"reacted to your resent post"}
            message = {"5 end-game strategies to increase your win rate"}
            time={"2 weeks ago"}
        />

        <NotifCard
            status={"notif_card"}
            url={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-File.png"}
            name={"Anna Kim"}
            reaction={"left the group"}
            time={"2 weeks ago"}
            link={"Chess Club "}
        />

    </main>

  )
}

export default Main