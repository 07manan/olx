import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./page.css";
import {motion} from "framer-motion"

function Login({ updateUser, user }) {
  const [logindetails, setLogindetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:5000/user/login/${logindetails.email}/${logindetails.password}`
      )
      .then((Response) => {
        // console.log(Response);
        if (Response.data) {
          updateUser(logindetails.email);
          navigate("/profile");
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("User")) {
      navigate("/profile");
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <motion.div initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: {duration: 0.2} }} 
        className="row" 
        id="form">
        <div className="col-md-3 col-lg-4"></div>
        <form
          onSubmit={submitHandler}
          className="form easein col-sm-12 col-md-6 col-lg-4 my-5 py-5 px-5 "
        >
          <div className="mb-3 form-field">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@example.com"
              name="email"
              onChange={(e) =>
                setLogindetails({ ...logindetails, email: e.target.value })
              }
            />
          </div>
          <div className="mb-3 form-feild">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              name="password"
              onChange={(e) =>
                setLogindetails({ ...logindetails, password: e.target.value })
              }
            />
          </div>
          <input type="submit" value="LOGIN" className="btn" />
        </form>
        <div className="col-md-6 col-lg-4"></div>
      </motion.div>
    </>
  );
}

export default Login;
