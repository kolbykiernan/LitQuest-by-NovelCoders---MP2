import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

function Login({ onLoginSuccess }) {
  const onSuccess = (response) => {
    console.log('Login Success:', response.profileObj);
    onLoginSuccess(response.profileObj);
  };

  const onFailure = (response) => {
    console.error('Login Failed:', response);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default Login;
