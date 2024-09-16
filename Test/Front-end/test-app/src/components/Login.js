import React from 'react'

export default function Login() {
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
              <input  type="text" className="form-control" id="username" placeholder="Enter Your UserName" />
            </div>
          </div>
          {/* password Column */}
          <div className="row mx-5  my-3">
            <div className="col-12 ">
              <label for="password" className="form-label">Password</label>
            </div>
            <div className="col-12">
              <input  type="password-" className="form-control" id="passwor" placeholder="Enter Your UserName" />
            </div>
          </div>
          {/* login row */}
          <div className="row mx-5 my-3">
            <div className="col">
              <button type="button" class="btn btn-primary">Login</button>
            </div>

          </div>
        </div>
      </div>
       
    </div>
  )
}
