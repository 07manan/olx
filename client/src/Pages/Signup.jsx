import React, { useState,useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./page.css";

function Signup() {
  const navigate = useNavigate();
  const [formdetails, setFormDetails] = useState({ firstName:"", lastName:"", email:"", password:"", confirmPassword:"" })
  const [error, setError] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    if(formdetails.password === formdetails.confirmPassword){
      axios.post('http://localhost:5000/user/register',{
        firstName: formdetails.firstName,
        lastName: formdetails.lastName,
        email: formdetails.email,
        password: formdetails.password
      })
      setFormDetails({firstName:"", lastName:"", email:"", password:"", confirmPassword:"" });
      navigate("/login");
    }
  };
  useEffect(() => {
    if(formdetails.confirmPassword !== formdetails.password){
      setError("Passwords do not match");
    } else{
      setError(null);
    }
  },[formdetails.confirmPassword, formdetails.password]);


  return (
    <>
      <div className="row" id="form">
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
            {/* <p> {error.firstName?.message} </p> */}
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
            {/* <p> {error.lastName?.message} </p> */}
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
            {/* <p> {error.email?.message} </p>/ */}
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
            {error !== "" ? <div className="error">{error}</div> : ""}
          </div>
          <input type="submit" value="Register" className="btn" />
        </form>
        <div className="col-md-6 col-lg-4"></div>
      </div>
    </>
  );
}

export default Signup;
