import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from "../layouts/Layout";

const Activate = ({match}) => {
  const [token,setToken] = useState('');
  const [show, setShow] = useState(true);
  const [buttonText, setButtonText] = useState('Activate');


  let tok = useParams().token;
  
  useEffect(()=>{
    setToken(tok)
  },[tok])
  // console.log(token);
  const submitHandler = (e)=>{
    e.preventDefault();
    setButtonText('Wait...');
    axios.post(`${process.env.REACT_APP_API}/account-activation`,{token})
    .then(function (response) {
      console.log('success', response);
      setButtonText('Activated');
      setShow(false);

      toast.success(response.data.message);

    })
    .catch(function (error) {
      console.log('error', error.response.data);
      setButtonText('Activate');


        toast.error(error.response.data.error);
    });
  }
  // console.log(values);
  return (
    <Layout>
      <div className="container">
        <ToastContainer />
        <div className="row" style={{'display':'flex', 'justifyContent': 'center'}}>
          <div className="col-md-4">
        <h3>Activate Account</h3>
        <div>
          <h4 >Hey Ready to activate your account </h4>
          <button className="btn btn-sm btn-warning" disabled={!show} onClick={submitHandler}>{buttonText}</button>
         {!show &&  <Link to="/signin">
          <button className="btn btn-sm btn-warning">Login</button>
          </Link>}
          
        </div>
       
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Activate;
