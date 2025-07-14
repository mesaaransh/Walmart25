import { FaBox, FaCartShopping, FaPen } from "react-icons/fa6"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">

        <ul>
            <li> <FaPen/> New Chat</li>
            <li> <FaCartShopping/> Cart</li>
            <li> <FaBox/> Orders</li>
        </ul>

    </div>
  )
}
