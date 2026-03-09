import {Link} from "react-router-dom";
function Header(){
    return(
       
        <header>
      <div class="logo">-
        <Link to="/">MICO</Link>
      </div>
      <nav class="desktop_menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><Link to="/signup">Sign up</Link></li>
          

        </ul>
      </nav>
<div class="menu_btn"><i class="fa-solid fa-bars"></i></div>
<div class="mobile_menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact" >Contact Us</a></li>
          <li><a href="forms.html">Sign up</a></li>
           
          

</div>
    </header>
    
    )
}
export default Header;