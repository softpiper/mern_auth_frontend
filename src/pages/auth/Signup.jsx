import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });
  const{name, email, password, buttonText} = values;
  const handleChange =(e)=>{
    setValues({...values, 
      [e.target.name]: e.target.value}
      )
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    setValues({...values, buttonText: "Submitting"})
    axios.post('http://localhost:8000/api/signup', {name, email, password})
    .then(function (response) {
      console.log('success', response);
      setValues({...values, name: '', email: '', password: '', buttonText:'Submit'});
      toast.success(response.data.message);

    })
    .catch(function (error) {
      console.log('error', error.response.data);
      setValues({...values, buttonText:'Submit'});

        toast.error(error.response.data.error);
    });
  }
  console.log(values);
  return (
    <React.Fragment>
      <div className="container">
        <ToastContainer />
        <div className="row" style={{'display':'flex', 'justifyContent': 'center'}}>
          <div className="col-md-4">
        <h3>Sign Up</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name" className="text-muted">
                  Name
                </label>
                <input type="text" className="form-control" name="name" value={name} onChange={handleChange} />
              </div>

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

              <button className="btn btn-sm btn-success my-3" onClick={submitHandler}>{buttonText}</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
