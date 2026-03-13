import {Link} from "react-router-dom";
import { useState } from "react";

function Header(){
  const[ismenuOpen,setismenuOpen] = useState(false);
    return(
       
        <header>
      <div className="logo">-
        <Link to="/">MICO</Link>
      </div>
      <nav className="desktop_menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><Link to="/signup">Sign up</Link></li>
          

        </ul>
      </nav>
<div className={ismenuOpen?"menu_btn open":"menu_btn"} onClick={()=>setismenuOpen(!ismenuOpen)}>
  <i className={ismenuOpen?"fa-solid fa-xmark":"fa-solid fa-bars"}></i></div>
<div className={ismenuOpen?"mobile_menu open" : "mobile_menu"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact" >Contact Us</a></li>
          <li><Link to="/signup">Sign up</Link></li>
          

           
        
</div>
    </header>
    
    )
}
export default Header;