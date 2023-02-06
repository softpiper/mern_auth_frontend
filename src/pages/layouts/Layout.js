import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { logoutCall } from "../../redux/apiCalls";
import { isAuth, signout } from "../auth/helpers";

const Layout = ({children}) => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state)=>state.user);
  console.log(currentUser);
  const logoutHandler =(e)=>{
    e.preventDefault();
    logoutCall(dispatch);
  }
  return (
  <>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
          {!currentUser && <li><Link to="/signin">Signin</Link></li>}
          {!currentUser &&  <li><Link to="/signup">Signup</Link></li>}
        {currentUser && <button onClick={logoutHandler}>Logout</button>}

      </ul>
    </div>
    {children}
  </>
  );
};

export default Layout;
