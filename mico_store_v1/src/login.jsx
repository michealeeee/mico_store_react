import {Link} from "react-router-dom";
function Login(){
    return(
        <div className="login_body" >
             <header>
        
        <div className="login_logo">
        <Link to="/">Sign in</Link>
      </div>
      <nav>
      <div className="login_menu">
        <ul><li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
        </ul>
      </div>
      </nav>
    </header>
    <form className="login_form" action="#">
        <div className="login_row">
            <label htmlFor="email">Email:</label>
            <input className="login_input" type="email" name="email" id="email" placeholder="email@gmail.com"/>
            <small id="ViewEmailError"></small>
        </div>
        <div className="login_row">
            <label htmlFor="Password">Password:</label>
            <input className="login_input" type="password" name="Password" id="Password"/>
            <small id="ViewPasswordError"></small>
        </div>
        <div style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
    <a href="#" className="login_btn" ><i className="fa-solid fa-envelope"></i>Submit</a>
</div>
    </form>
        </div>
    )

}
export default Login;

