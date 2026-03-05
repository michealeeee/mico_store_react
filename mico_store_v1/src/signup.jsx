import {Link} from "react-router-dom";

function Signup(){
    return(
  <div>  
 <header>
      <div classname="form_logo">
        <link to="/App">Registration Form</link>
      </div>
      <nav classname="form_menu">
        <ul>
          <li> <link to="/App">Home</link></li>
          <li> <link to="#">Sign in</link></li>
        </ul>
      </nav> 


    </header>
    <form classname="signup" action="">
        <div classname="row">

<label>Full Name:</label>
<i classname="fa fa-user"></i>
    <input type="text" id="name" name="name" placeholder="Enter your Name" required />
    <small id="fullnameError"></small>
        </div>
    <div classname="row">
<label>Gender:</label>
 <i id="icon_gender" classname="fa fa-transgender"></i>  
<select name="gender" id="gender">
  <option value="select gender">Select Gender</option>
  <option value="Male" >Male</option> 
  <option value="Female">Female</option>
</select>
<small id="Gendererror"></small>
    </div>

    <div classname="row">
 <label>Email:</label>
 <i classname="fa-solid fa-envelope"></i>
    <input type="text" id="email" name="email"  placeholder="email@gmail.com" />
    <small id="emailerror"></small>
    </div>
<div classname="row">
        <label>Mobile:</label> 
    <input  type="tel" onblur="check_phone_number()"  classname="Phone" id="phone" name="phone" />
    <small id="NumberError"></small>
    </div>
    
    <div classname="row">
        <label>Enter New password:</label>
        <i classname="fa-solid fa-eye-slash" id="eye"></i>
    <input  type="password" classname="password" id="password" name="password" data="mtn" />
    <small id="PasswordError"></small>
    </div>
    <div classname="row">
    <label>Confirm password:</label>
    <i classname="fa-solid fa-eye-slash" id="eye2"></i>
    <input  type="password"  classname="cpassword" id="cpassword" name="cpassword" />
    <small id="cPasswordError"></small>
    </div>
<div classname="sbtn">
    <a href="#" classname="btn"><i classname="fa-solid fa-envelope"></i>Submit</a>

</div>
        

    </form>
    </div>
    
    )
}
export default Signup