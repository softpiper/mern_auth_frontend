import React from "react";
import { Link } from "react-router-dom";

const Layout = ({children}) => {
  return (
  <>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup">Signup</Link></li>

      </ul>
    </div>
    {children}
  </>
  );
};

export default Layout;
