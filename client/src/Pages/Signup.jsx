import React, { useState,useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./page.css";
import {motion} from "framer-motion";

function Signup({updateUser}) {
  const navigate = useNavigate();
  const [formdetails, setFormDetails] = useState({ firstName:"", lastName:"", email:"", password:"", confirmPassword:"" })
  const [error, setError] = useState({ email:"", password:"" });
  const submitHandler = (e) => {
    e.preventDefault();
    if(formdetails.password === formdetails.confirmPassword){
      if(formdetails.email !==""){
        if(formdetails.confirmPassword !==""){
          axios.post(`${process.env.REACT_APP_DB_URL}/user/register`,{
            firstName: formdetails.firstName,
            lastName: formdetails.lastName,
            email: formdetails.email,
            password: formdetails.password
          })
          setFormDetails({firstName:"", lastName:"", email:"", password:"", confirmPassword:"" });
          setError({password:""});
          updateUser(formdetails.email);
          navigate("/profile");
        } else{
          setError({password:"Password can't be empty"})
        }
      }else{
        setError({email:"Email can't be empty"})
      }
    } else{
      setError({password:"Passwords do not match"});
    }
  };
  useEffect(() => {
    if(formdetails.confirmPassword !== formdetails.password){
      setError({ password: "Passwords do not match"});
    } else{
      setError({ password:"" });
    }
  },[formdetails.confirmPassword]);// eslint-disable-line react-hooks/exhaustive-deps


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
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              name="firstName"
              onChange={(e) =>
                setFormDetails({ ...formdetails, firstName: e.target.value })
              }
              value={formdetails.firstName}
            />
          </div>
          <div className="mb-3 form-field">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              onChange={(e) =>
                setFormDetails({ ...formdetails, lastName: e.target.value })
              }
              value={formdetails.lastName}
            />
          </div>
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
                setFormDetails({ ...formdetails, email: e.target.value })
              }
              value={formdetails.email}
            />
            {error.email !== "" ? <div className="error">{error.email}</div> : ""}
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
                setFormDetails({ ...formdetails, password: e.target.value })
              }
              value={formdetails.password}
            />
            {/* <p> {error.password?.message} </p> */}
          </div>
          <div className="mb-3 form-feild">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={(e) =>
                setFormDetails({ ...formdetails, confirmPassword: e.target.value })
              }
              value={formdetails.confirmPassword}
            />
            {error.password !== "" ? <div className="error">{error.password}</div> : ""}
          </div>
          <input type="submit" value="Register" className="btn" />
        </form>
        <div className="col-md-6 col-lg-4"></div>
      </motion.div>
    </>
  );
}

export default Signup;
