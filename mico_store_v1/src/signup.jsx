import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

function Signup() {
//     const phoneRef = useRef(null);
    
//   useEffect(() => {

//      const iti = intlTelInput(phoneRef.current, {
//       initialCountry: "gh",
//       separateDialCode: true,
//       preferredCountries: ["ng", "gh", "us", "gb"],
//       utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.7/build/js/utils.js",
//     });

//     return () => iti.destroy();
//   }, []);
const phoneRef = useRef(null);
const itiRef = useRef(null);

useEffect(() => {
  itiRef.current = intlTelInput(phoneRef.current, {
    initialCountry: "gh",
    separateDialCode: true,
    preferredCountries: ["ng", "gh", "us", "gb"],
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.7/build/js/utils.js",
  });

  return () => itiRef.current.destroy();
}, []);
  const [formData, setformData] = useState({
    name: "",
    gender: "",
    email: "",
    tel: "",
    password: "",
    cpassword: ""
  });
  const [error, seterror] = useState({});
  const mikechange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    console.log(formData);
    error[name] = "";
  };
  const validate = () => {
    let newerror = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    const phonenumber = itiRef.current.getNumber();
    alert(phonenumber);
    formData.tel = phonenumber;
    if (formData.name.trim() === "") {
      newerror.name = "Fullname is required";
    }
    if (formData.gender.trim() === "" || formData.gender === "Select Gender") {
      newerror.gender = "Gender is required";
    }

    if (!emailPattern.test(formData.email)) {
      newerror.email = "Please enter a valid email address";
    }
    if (formData.tel.trim() === "") {
      newerror.tel = "Please enter a valid phone number";
    }
    if (!passwordPattern.test(formData.password) ) {
      newerror.password = "Please enter a valid password";
    }

    if (formData.password !== formData.cpassword){
       newerror.cpassword = "Both password are not the same"; 
    }
    seterror(newerror);
    
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
            placeholder="Enter your Name"
            required
          />
          <small id="fullnameError">{error.name}</small>
        </div>
        <div className="row">
          <label>Gender:</label>
          <i id="icon_gender" className="fa fa-transgender"></i>
          <select name="gender" onChange={mikechange} id="gender">
            <option value="select gender">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <small id="Gendererror">{error.gender}</small>
        </div>

        <div className="row">
          <label>Email:</label>
          <i className="fa-solid fa-envelope"></i>
          <input
            type="text"
            onChange={mikechange}
            id="email"
            name="email"
            placeholder="email@gmail.com"
          />
          <small id="emailerror">{error.email}</small>
        </div>
        <div className="row">
          <label>Mobile:</label>
          <input
            type="tel" 
            value = {formData.tel}
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
          <i className="fa-solid fa-eye-slash" id="eye"></i>
          <input
            type="password"
            onChange={mikechange}
            className="password"
            id="password"
            name="password"
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
          />
          <small id="cPasswordError">{error.cpassword}</small>
        </div>
        <div className="sbtn">
          <a href="#" onClick={validate} className="btn">
            <i className="fa-solid fa-envelope"></i>Submit
          </a>
        </div>
      </form>
    </div>
  );
}
export default Signup;
