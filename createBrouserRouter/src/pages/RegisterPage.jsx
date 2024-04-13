import axios from "axios";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  let [userDetails, setUserDetails] = useState({
    loginId: "",
    emailId: "",
    password: "",
  });
 let navigate=useNavigate();
  let { loginId, emailId, password } = userDetails;
  let confirmPassword = useRef();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (password != "" && password === confirmPassword.current.value) {
      toast.success("Register Succesfully");
      console.log(userDetails);
      axios.post("http://localhost:5000/credentials", userDetails);
      navigate("/home");
    } else {
      toast.error("Password  Doesn't Match");
    }
  };
  return (
    <section className="registerPage">
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="formgrp">
          <label htmlFor="login">Login ID</label>
          <input
            type="text"
            name="loginId"
            id="login"
            onChange={handleChange}
            value={loginId}
          />
        </div>
        <div className="formgrp">
          <label htmlFor="emailId">Email ID</label>
          <input
            type="email"
            name="emailId"
            id="emailId"
            onChange={handleChange}
            value={emailId}
          />
        </div>
        <div className="formgrp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="formgrp">
          <label htmlFor="Conpassword">confirm Password</label>
          <input
            type="password"
            name=""
            id="Conpassword"
            ref={confirmPassword}
          />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default RegisterPage;
