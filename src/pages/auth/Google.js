import { GoogleLogin } from '@leecheuk/react-google-login';
import React from 'react'

const Google = () => {
    const responseGoogle = (response) => {
        console.log(response);
      }
  return (
    <div>
        <GoogleLogin
    clientId="212016179859-0sklacduf5egaj2kd79tqk3k8gfho97m.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    // cookiePolicy={'single_host_origin'}
  />

    </div>
  )
}

export default Google