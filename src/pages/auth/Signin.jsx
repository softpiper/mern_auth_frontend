import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { login } from "../../redux/apiCalls";
import Layout from "../layouts/Layout";
import jwt from 'jwt-decode'


const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    response:"",
    buttonText: "Submit",
  });

  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state)=>state.user)

  const{ email, password, buttonText} = values;
  const handleChange =(e)=>{
    setValues({...values, 
      [e.target.name]: e.target.value}
      )
  }
//
//
//Login Handler
  const submitHandler = (e)=>{
    e.preventDefault();
    setValues({...values, buttonText: "Submitting"})
    login(dispatch, {email, password});
  }

//
//
// Google login

  const handleCallbackResponse = (res)=>{
    console.log(res.credential);
    var userObject = jwt(res.credential);
    console.log(userObject.email);
  }

  useEffect(()=>{
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id: "212016179859-0sklacduf5egaj2kd79tqk3k8gfho97m.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(
      document.getElementById("signDiv") ,
      {theme: "outline", size: "large"}
    )
  },[])




  return (
    <Layout>
      <div className="container">
        <ToastContainer />
        <div className="row" style={{'display':'flex', 'justifyContent': 'center'}}>
          <div className="col-md-4">
        <h3>Sign In</h3>
            <form>
              <div className="form-group">
                <label htmlFor="email" className="text-muted">
                  Email
                </label>
                <input type="email" className="form-control" name="email" value={email} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="text-muted">
                  Password
                </label>
                <input type="password" className="form-control" name="password" value={password} onChange={handleChange} />
              </div>

              <button className="btn btn-sm btn-success my-3" onClick={submitHandler} disabled={isFetching} >{isFetching ? "Loading...": "LOGIN"}</button>
          {error && <p>Somthing went wrong...</p> }

            </form>

            <div id="signDiv"></div>

            {/* <Google/> */}
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Signin;
