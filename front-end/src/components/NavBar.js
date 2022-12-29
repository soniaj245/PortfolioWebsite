import {  Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../images/logo-white.png"

function NavBar(){
    return(
        <div className = "NavBar">
            <ul>
                <li class='active'><Link to = "/">Home</Link></li>
                <li><Link to = "/Projects">Work</Link></li>
            </ul>
            <Link to = "/" alt = "Logo"><img src = {logo} /></Link>
            <ul className = "rightNav">
                <li><Link to = "/AboutMe">About Me</Link></li>
                <li><Link to = "/Contact">Contact Me</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;