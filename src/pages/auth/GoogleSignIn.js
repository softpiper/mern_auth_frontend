import React, { useEffect } from 'react'
import jwt from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { loginWithGoogle } from '../../redux/apiCalls';

const GoogleSignIn = () => {
const dispatch = useDispatch();

//
//
// Google login

  const handleCallbackResponse = (res)=>{
    console.log(res.credential);
    var userObject = jwt(res.credential);
    // console.log(userObject.email);
    loginWithGoogle(dispatch, {idToken: res.credential});

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
    <div>
        <div id="signDiv"></div>
    </div>
  )
}

export default GoogleSignIn