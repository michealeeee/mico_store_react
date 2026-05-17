import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/utils";
import "intl-tel-input/build/css/intlTelInput.css";

function Signup() {

const phoneRef = useRef(null);
const itiRef = useRef(null);
const [loading, setLoading] = useState(false);
const [pwd, setpwd] = useState(false);
const [pwd2, setpwd2] = useState(false);
useEffect(() => {
  itiRef.current = intlTelInput(phoneRef.current, {
    initialCountry: "gh",
    separateDialCode: true,
    preferredCountries: ["ng", "gh", "us", "gb"],
    loadUtils: () => import("intl-tel-input/build/js/utils"),
  });

  return () => itiRef.current.destroy();
}, []);
  const [formData, setformData] = useState({
    name: "",
    gender_: "",
    email: "",
    tel: "",
    password: "",
    cpassword: ""
  });
  
  const [error, seterror] = useState({});
  const pwdchange = () => {
    if (pwd === true){
      setpwd(false);
    }
    else{
      setpwd(true);
    }
  }
  const mikechange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    console.log(formData);
    error[name] = "";
  };
  const validate =async () => {
    let newerror = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordPattern = /^.{8,}$/;
    const phonenumber = itiRef.current.getNumber();
    setformData({ ...formData, ["tel"]: phonenumber });
    if (formData.name.trim() === "") {
      newerror.name = "Fullname is required";
    }
    if (formData.gender_.trim() === "" || formData.gender_ === "Select Gender") {
      newerror.gender_ = "Gender is required";
    }

    if (!emailPattern.test(formData.email)) {
      newerror.email = "Please enter a valid email address";
    }
    if (!itiRef.current.isValidNumber()) {
      newerror.tel = "Please enter a valid phone number";
    }
    if (!passwordPattern.test(formData.password) ) {
      newerror.password = "Please enter a valid password";
    }

    if (formData.password !== formData.cpassword){
       newerror.cpassword = "Both password are not the same"; 
    }
    seterror(newerror);
    if (Object.keys(newerror).length===0){
        try{
          setLoading(true);
            const response = await fetch("https://mico-store-be-1.onrender.com/mico/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if(response.ok){
      setformData({ name: "",
    gender_: "Select Gender",
    email: "",
    tel: "",
    password: "",
    cpassword: ""
  });
  itiRef.current.setNumber("");
   alert("registration successful");
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

  return (
    <div className="signup_body">
      <header>
        <div className="form_logo">
          <Link to="/">Registration Form</Link>
        </div>
        <nav className="form_menu">
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Sign in</Link>
            </li>
          </ul>
        </nav>
      </header>
      <form className="signup" action="">
        <div className="row">
          <label>Full Name:</label>
          <i className="fa fa-user"></i>
          <input
            type="text"
            onChange={mikechange}
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter your Name"
            required
          />
          <small id="fullnameError">{error.name}</small>
        </div>
        <div className="row">
          <label>Gender:</label>
          <i id="icon_gender" className="fa fa-transgender"></i>
          <select name="gender_" onChange={mikechange} id="gender" value={formData.gender_}>
            <option value="select gender">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <small id="Gendererror">{error.gender_}</small>
        </div>

        <div className="row">
          <label>Email:</label>
          <i className="fa-solid fa-envelope"></i>
          <input
            type="text"
            onChange={mikechange}
            id="email"
            name="email"
            value={formData.email}
            placeholder="email@gmail.com"
          />
          <small id="emailerror">{error.email}</small>
        </div>
        <div className="row">
          <label>Mobile:</label>
          <input
            type="tel" 
            onChange={mikechange}
            className="Phone"
            id="phone"
            name="tel"
            ref={phoneRef}
          />
       
          <small id="NumberError">{error.tel}</small>
        </div>

        <div className="row">
          <label>Enter New password:</label>
          <i onClick={pwdchange} className={pwd?"fa-solid fa-eye":"fa-solid fa-eye-slash"} id="eye"></i>
          <input
            type={pwd?"text":"password"}
            onChange={mikechange}
            className="password"
            id="password"
            name="password"
            value={formData.password}
            data="mtn"
          />
          <small id="PasswordError">{error.password}</small>
        </div>
        <div className="row">
          <label>Confirm password:</label>
          <i className="fa-solid fa-eye-slash" id="eye2"></i>
          <input
            type="password"
            onChange={mikechange}
            className="cpassword"
            id="cpassword"
            name="cpassword"
            value={formData.cpassword}
          />
          <small id="cPasswordError">{error.cpassword}</small>
        </div>
        <div className="sbtn">
          <a href="#" onClick={validate} className="btn">
            <i className="fa-solid fa-envelope"></i>{
              loading ? "Submiting.....": "Submit"
            }
          </a>
        </div>
        {loading ? (
    <div className="spinner-overlay">
    <div className="spinner"></div>
  </div>
):""}

      </form>
    </div>
  );
}
export default Signup;
