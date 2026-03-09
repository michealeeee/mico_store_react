import {Link} from "react-router-dom";

function Signup(){
    return(
  <div className='signup_body'>  
 <header>
      <div className="form_logo">
        <Link to="/">Registration Form</Link>
      </div>
      <nav className="form_menu">
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/login">Sign in</Link></li>
        </ul>
      </nav> 


    </header>
    <form className="signup" action="">
        <div className="row">

<label>Full Name:</label>
<i className="fa fa-user"></i>
    <input type="text" id="name" name="name" placeholder="Enter your Name" required />
    <small id="fullnameError"></small>
        </div>
    <div className="row">
<label>Gender:</label>
 <i id="icon_gender" className="fa fa-transgender"></i>  
<select name="gender" id="gender">
  <option value="select gender">Select Gender</option>
  <option value="Male" >Male</option> 
  <option value="Female">Female</option>
</select>
<small id="Gendererror"></small>
    </div>

    <div className="row">
 <label>Email:</label>
 <i className="fa-solid fa-envelope"></i>
    <input type="text" id="email" name="email"  placeholder="email@gmail.com" />
    <small id="emailerror"></small>
    </div>
<div className="row">
        <label>Mobile:</label> 
    <input  type="tel" onblur="check_phone_number()"  className="Phone" id="phone" name="phone" />
    <small id="NumberError"></small>
    </div>
    
    <div className="row">
        <label>Enter New password:</label>
        <i className="fa-solid fa-eye-slash" id="eye"></i>
    <input  type="password" className="password" id="password" name="password" data="mtn" />
    <small id="PasswordError"></small>
    </div>
    <div className="row">
    <label>Confirm password:</label>
    <i className="fa-solid fa-eye-slash" id="eye2"></i>
    <input  type="password"  className="cpassword" id="cpassword" name="cpassword" />
    <small id="cPasswordError"></small>
    </div>
<div className="sbtn">
    <a href="#" className="btn"><i className="fa-solid fa-envelope"></i>Submit</a>

</div>
        

    </form>
    </div>
    
    )
}
export default Signup;