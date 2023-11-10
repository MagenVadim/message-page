import './Header.css'

function Header() {
  return (
      <header>
        <div className="notif_box">
              <h2 className="title">Notifications</h2>
              <span id="notifications"></span>
          </div>
          <p id="mark_all">Mark all as read</p>
      </header>
  )
}
export default Header