import "./header.css"
import { Link } from "react-router"

export default function Header() {
  return (
   <div className="mainNav">
    <Link className="nuvLinks" to="/">Movie Explorer</Link>
    <Link className="nuvLinks" to="/favorite">favorite</Link>
   </div>
  )
}
