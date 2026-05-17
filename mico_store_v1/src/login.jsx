import {Link} from "react-router-dom";
import { useState } from "react";
function Login(){
     const [loginData, setloginData] = useState({
        email: "",
        password: ""
      });
      const [loading, setLoading] = useState(false);
      const [error, seterror] = useState({});
        const mikechange = (e) => {
          const { name, value } = e.target;
          setloginData({ ...loginData, [name]: value });
          console.log(loginData);
          error[name] = "";
        };

        const validate =async () => {
    let newerror = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordPattern = /^.{8,}$/;
    
    if (!emailPattern.test(loginData.email)) {
      newerror.email = "Please enter a valid email address";
    }
    
    if (!passwordPattern.test(loginData.password) ){
      newerror.password = "Please enter a valid password";
    }

    seterror(newerror);
    if (Object.keys(newerror).length===0){
        try{
          setLoading(true);
            const response = await fetch("https://mico-store-be-1.onrender.com/mico/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });

    const result = await response.json();
    if(response.ok){
      setloginData({
    email: "",
    password: ""
  });
   alert("Login successful");
}
    console.log(result);
        }
        catch(error){
            alert(error);
        }
        finally{
           setLoading(false);
        }
        
    }
    
  };


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
            <input className="login_input" type="email" name="email" id="email" placeholder="email@gmail.com" onChange={mikechange} />
            <small id="ViewEmailError">{error.email}</small>
        </div>
        <div className="login_row">
            <label htmlFor="password">Password:</label>
            <input className="login_input" type="password" name="password" id="password" onChange={mikechange}/>
            <small id="ViewPasswordError">{error.password}</small>
        </div>
        <div style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
    <a href="#" className="login_btn" onClick={validate}  ><i className="fa-solid fa-envelope"></i>{ loading ? "Submiting.....": "Submit"} </a>

</div>
{loading ? (
    <div className="spinner-overlay">
    <div className="spinner"></div>
  </div>
):""}
    </form>
        </div>
    )
}



export default Login;

