import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let [loginDetails, setLoginDetails] = useState([]);
  let [userDetails, setUserDetails] = useState({
    loginId: "",
    password: "",
  });
  let navigate = useNavigate();
  let { loginId, password } = userDetails;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let loggedIn = loginDetails.find((ele, id) => {
      if (ele.loginID == loginId && ele.password == password) {
        return true;
      }
    });
    if (loggedIn) {
      toast.success("Logged In Succesfully");
      navigate("/allusers");
    } else {
      toast.error("Wrong Credentials");
    }
  };
  let fetchCredentials = async () => {
    let { data } = await axios.get("http://localhost:5000/credentials");
    console.log(data);
    setLoginDetails(data);
  };

  useEffect(() => {
    fetchCredentials();
  }, []);
  return (
    <section className="loginPage">
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="formgrp">
          <label htmlFor="login">Login ID </label>
          <input
            type="text"
            name="loginId"
            id="login"
            onChange={handleChange}
            value={loginId}
            placeholder="royalUser1"
          />
        </div>
        <div className="formgrp">
          <label htmlFor="password">Password  </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={password}
            placeholder="user1@123"
          />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default LoginPage;
