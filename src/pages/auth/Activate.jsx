import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const Activate = ({match}) => {
  const [token,setToken] = useState('');
  const [show, setShow] = useState(true);

  let tok = useParams().token;
  
  useEffect(()=>{
    setToken(tok)
  },[tok])
  // console.log(token);
  const submitHandler = (e)=>{
    e.preventDefault();
    // setValues({...values, buttonText: "Submitting"})
    axios.post(`${process.env.REACT_APP_API}/account-activation`,{token})
    .then(function (response) {
      console.log('success', response);
      // setValues({...values, name: '' });
      toast.success(response.data.message);

    })
    .catch(function (error) {
      console.log('error', error.response.data);
      // setValues({...values, buttonText:'Submit'});

        toast.error(error.response.data.error);
    });
  }
  // console.log(values);
  return (
    <React.Fragment>
      <div className="container">
        <ToastContainer />
        <div className="row" style={{'display':'flex', 'justifyContent': 'center'}}>
          <div className="col-md-4">
        <h3>Activate Account</h3>
        <div>
          <h4 >Hey Ready to activate your account </h4>
          <button className="btn btn-sm btn-warning" onClick={submitHandler}>Activate</button>
        </div>
       
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Activate;
