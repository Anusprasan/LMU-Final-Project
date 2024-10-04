import { Error } from '@blueprintjs/icons';
import React from 'react'
import { useState } from 'react';

export default function Login({ onLoginSuccess }) {

 const [userName,setUserName] = useState('');
 const [password,setPassword] = useState('');
 const [error,setError] = useState('');

 const handleLogin = (e) => {
  e.preventDefault();
  setError('');

  const user_name = userName.trim();
  if (!user_name || !password) {
    alert('Username and password are required');
    return;
  }
  // const password = password.trim();

  fetch('https://localhost:7096/api/User/Logini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_name,
      password
    }),
  })
    .then(response => {
      
      if (response.ok) {

        return response.json();
      } else {
        return response.json().then(errorData => {
          throw new Error(errorData.message || 'Error during login. Please try again.');
        });
      }
    })
    .then(data => {
      
      if (data.userToken) {
        // console.log(data.userToken)
        // localStorage.setItem('token', data.userToken);
        // localStorageStorage.setItem('fullName',data.fullName)
        // localStorage.setItem('userId',data.userId)
        onLoginSuccess(data);
        alert('Login successful');

      } else {
        setError('Invalid credentials');
      }
    })
    .catch(error => {
      setError(error.message);
    });
};

  return (

    <div >
    <div className='row d-flex justify-content-center align-items-center'>
      <div className='col-6 vehiclelist card text-bg-light  mx-5 mt-5'>
        {/* login header column */}
          <div className="row">
            <div className=" border col-12 d-flex justify-content-center">
              <h1>Login</h1>
            </div>
            
          </div> 

        {/* UserName Column */}
        <div className="row mx-5 my-3">
          <div className="col-12 ">
            <label for="username" className="form-label">Username</label>
          </div>
          <div className="col-12">
            <input  type="text" className="form-control" id="username" placeholder="Enter Your UserName"  value={userName} onChange={(e) => setUserName(e.target.value)}
            required />
          </div>
        </div>
        {/* password Column */}
        <div className="row mx-5  my-3">
          <div className="col-12 ">
            <label for="password" className="form-label">Password</label>
          </div>
          <div className="col-12">
            <input  type="password-" className="form-control" id="passwor" placeholder="Enter Your UserName" value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
          </div>
        </div>
        {/* login row */}
        <div className="row mx-5 my-3">
          <div className="col">
            <button type="button" class="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>

        </div>
      </div>
    </div>
     
  </div>
  )
}
