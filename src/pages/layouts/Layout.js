import React from "react";
import { Link, Navigate } from "react-router-dom";
import { isAuth, signout } from "../auth/helpers";

const Layout = ({children}) => {
  return (
  <>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isAuth() && 
      <React.Fragment>
          <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </React.Fragment>
        }

        {isAuth() && <button onClick={()=>{
            signout(()=>{
              <Navigate to="/"  replace/>
            })
          }}>Logout</button>
       
        }

      </ul>
    </div>
    {children}
  </>
  );
};

export default Layout;
