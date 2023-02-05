import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { login } from "../../redux/apiCalls";
import Layout from "../layouts/Layout";
import { authenticate, isAuth } from "./helpers";

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


  const submitHandler = (e)=>{
    e.preventDefault();
    setValues({...values, buttonText: "Submitting"})
    login(dispatch, {email, password});
    toast.success(` Welcome Back!`);
    

    // axios.post(`${process.env.REACT_APP_API}/signin`,{ email, password})
    // .then(function (response) {
    //   console.log('success', response);
    //   authenticate(response, ()=>{
    //     setValues({...values, email: '', password: '', buttonText:'Submit'});
    //     toast.success(`${response.data.user.name}, Welcome Back!`);
    //   });

    // })
    // .catch(function (error) {
    //   console.log('error', error.response.data);
    //   setValues({...values, buttonText:'Submit'});

    //     toast.error(error.response.data.error);
    // });


  }
  // console.log(values);
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
