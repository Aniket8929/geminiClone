import { useState } from "react"
import { assets } from "../assets/assets.js"
import "./Sidebar.css"
import { useContext } from "react"
import { UserContext } from "../context/context.jsx"
const Sidebar = () => {
  const [closed, setclosed] = useState(true);
  const { history  , setSelected} = useContext(UserContext);
  return (
    <div className="sidebar">
      <div className="top-sidebar">
        <div className="sidebar-menu">
          <img src={assets.menu_icon} alt={assets.menu_icon} onClick={() => {
            setclosed(!closed)
          }} />
        </div>
        <div className="sidebar-center">
          <div className="new-chart">
            <img src={assets.plus_icon} alt={assets.plus_icon} />
            {closed ? null : <p>New Chart</p>}
          </div>
          {closed ? null :
            <div className="recent-history">
              <h3>Recent</h3>
              {history.map((item) =>
                <div key={item.id} className="recent-data" onClick={() => {
                  setSelected(item)
                }}>
                  <p>{item.input}</p>
                </div>
              )}
            </div>
          }
        </div>
      </div>
      <div className="bottom-sidebar">
        <div className="sidebar-item">
          <img src={assets.question_icon} alt={assets.question_icon} />
          {closed ? null : <p>Help</p>}
        </div>

        <div className="sidebar-item">
          <img src={assets.history_icon} alt={assets.history_icon} />
          {closed ? null : <p>Activity</p>}
        </div>

        <div className="sidebar-item">
          <img src={assets.setting_icon} alt={assets.setting_icon} />
          {closed ? null : <p>Settings</p>}
        </div>
      </div>
    </div>

  )
}

export default Sidebar;