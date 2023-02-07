import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { login } from "../../redux/apiCalls";
import Layout from "../layouts/Layout";
import jwt from 'jwt-decode'
import GoogleSignIn from "./GoogleSignIn";
import { toastMsg } from "../../redux/apiCalls";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userRedux";
import { publicRequest } from "../../requestMethods";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    response:"",
    buttonText: "Submit",
  });

  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state)=>state.user)

  // const res = useSelector((state)=>state.user);
  // console.log(res);

  const{ email, password, buttonText, response} = values;
  const handleChange =(e)=>{
    setValues({...values, 
      [e.target.name]: e.target.value}
      )
  }
//
//
//Login Handler
 const login = async (dispatch, user)=>{
  dispatch(loginStart());
  try{
      const res = await publicRequest.post("/signin", user);
      console.log(res.data);
      dispatch(loginSuccess(res.data));
  }catch(err){
    setValues({...values, buttonText: "Submitting", response: err.response.data.error});
      dispatch(loginFailure());

  }
}
  const submitHandler = (e)=>{
    e.preventDefault();
    login(dispatch, {email, password});
    toast.error(error);
  }

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
          {error && <p style={{'color':'red'}}>{response}</p> }

            </form>

            <GoogleSignIn/>

          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Signin;
