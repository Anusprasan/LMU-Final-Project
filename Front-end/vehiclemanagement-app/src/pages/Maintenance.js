import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Maintenance() {
  return (
    <div>
      {/* nav row */}
      <div className="row">
          <nav>
            <div class="nav nav-tabs " id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Add Repairs</button>
              <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Maintenance History</button>
             
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="row">
              <div className="col-6">
                <div className='startjourneycontent card text-bg-light  mx-1 mt-3'>
                    {/* heading row */}
                      <div className="row mt-2 mx-2 ">
                        <div className="col d-flex justify-content-center">
                          <h4>Vehicle Repairs</h4>
                        </div>
                        
                      </div>

                    {/* save and cancel row */}
                    <div className="row d-flex mt-4 mx-2 "> 
                      <div className="col-3 d-flex gap-2">
                        <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}}>Save</button>
                        <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}}>Cancel</button>
                      </div>
                      
                    </div>
            
                    
                    {/* plateno */}
                    <div className="row mt-4 mx-2 ">
                        <div className="col-5">
                          <label for="plateno" className="form-label">Plate No</label>
                        </div>
                        <div className="col-3">
                          <div class="btn-group w-100">
                            <button type="button" class="btn btn-secondary" style={{backgroundColor:'#24314C'}}>Select</button>
                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#24314C'}}>
                              <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                              <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                          </div>

                        </div>
                      </div>

                    {/* date row */}
                    <div className="row mt-4 mx-2 ">
                      <div className="col-5">
                        <label for="dateinput" className="form-label">Date</label>
                      </div>
                      <div className="col-6" >
                      <input type="Date" className='form-control' id="dateinput" />
                      </div>
                    </div>

                    {/* Garage Name */}
                    <div className="row mt-4 mx-2 ">
                      <div className="col-5">
                        <label for="garagenameinput" className="form-label">Garage Name</label>
                      </div>
                      <div className="col-6">
                        
                        <input  type="text" className="form-control w-100" id="garagenameinputs" />
                      </div>
                    </div>
                    {/* Garage Address */}
                    <div className="row mt-4 mx-2 ">
                    <div className="col-5">
                      <label for="garageaddressinput" className="form-label">Address</label>
                    </div>
                    <div className="col-6">
                      
                      <input  type="text" className="form-control " id="garageaddressinput" />
                    </div>
                  </div>

                  {/* Garage Phone No */}
                  <div className="row mt-4 mx-2 ">
                    <div className="col-5">
                      <label for="garagephonenoinput" className="form-label">Phone No</label>
                    </div>
                    <div className="col-6">
                      
                      <input  type="text" className="form-control " id="garagephonenoinput" />
                    </div>
                  </div>

                  {/* Malfunction details */}
                  <div className="row mt-4 mx-2 ">
                    <div className="col-5">
                      <label for="malfunctioninput" className="form-label">Malfunction Details</label>
                    </div>
                    <div className="col-6">
                      
                      <textarea className="form-control " id="malfunctioninput" />
                    </div>
                  </div>

                  {/* Total Payment */}
                  <div className="row mt-4 mx-2 ">
                    <div className="col-5">
                      <label for="totalamountinput" className="form-label">Total Amount</label>
                    </div>
                    <div className="col-6">
                      
                      <input  type="number" className="form-control " id="totalamountinput" />
                    </div>
                  </div>

                  {/* repaired parts */}
                  <div className="row mt-4 mx-2 ">
                      <div className="col-5">
                        <label for="repairedpartsinput" className="form-label">Repaired Parts</label>
                      </div>
                      <div className="col-6 d-flex gap-2">
                        
                        <input  type="text" className="form-control w-100" id="repairedpartsinput" />
                        <button type="button" class="btn " style={{backgroundColor:'#24314C',color:'white'}}>+</button>

                      </div>
                    </div>

                  
                  
            
                     

                    
                </div>

              </div>
              <div className="col-6">
                <div className='startjourneycontent card text-bg-light  mx-1 mt-3'>
                    {/* heading row */}
                      <div className="row mt-2 mx-2 ">
                        <div className="col d-flex justify-content-center">
                          <h4>General Services</h4>
                        </div>
                        
                      </div>

                    {/* save and cancel row */}
                    <div className="row d-flex mt-4 mx-2 "> 
                      <div className="col-3 d-flex gap-2">
                        <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}}>Save</button>
                        <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}}>Cancel</button>
                      </div>
                      
                    </div>
            
                    
                    {/* plateno */}
                    <div className="row mt-4 mx-2 ">
                        <div className="col-5">
                          <label for="plateno" className="form-label">Plate No</label>
                        </div>
                        <div className="col-3">
                          <div class="btn-group w-100">
                            <button type="button" class="btn btn-secondary" style={{backgroundColor:'#24314C'}}>Select</button>
                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#24314C'}}>
                              <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                              <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                          </div>

                        </div>
                      </div>

                    {/* date row */}
                    <div className="row mt-4 mx-2 ">
                      <div className="col-5">
                        <label for="dateinput" className="form-label">Date</label>
                      </div>
                      <div className="col-6" >
                      <input type="Date" className='form-control' id="dateinput" />
                      </div>
                    </div>

                    {/* odemeter reading row */}
                    <div className="row mt-4 mx-2">
                      <div className="col-5">
                        <label for="odometerreadinginput" className="form-label">Odometer Reading(Km)</label>
                      </div>
                      <div className="col-6">
                        
                        <input  type="text" className="form-control w-100" id="odometerreadinginput" />
                      </div>
                    </div>

                    {/* Service Center */}
                    <div className="row mt-4 mx-2 ">
                      <div className="col-5">
                        <label for="servicecenterinput" className="form-label">Service Center</label>
                      </div>
                      <div className="col-6">
                        
                        <input  type="text" className="form-control w-100" id="servicecenterinput" />
                      </div>
                    </div>
                   
                  {/* Service  Phone No */}
                  <div className="row mt-4 mx-2 ">
                    <div className="col-5">
                      <label for="centerphonenoinput" className="form-label">Phone No</label>
                    </div>
                    <div className="col-6">
                      
                      <input  type="text" className="form-control " id="centerphonenoinput" />
                    </div>
                  </div>

                  {/* Service Description */}
                  <div className="row mt-4 mx-2 ">
                    <div className="col-5">
                      <label for="servicedescriptioninput" className="form-label">Service Description </label>
                    </div>
                    <div className="col-6">
                      
                      <textarea className="form-control " id="servicedescriptioninput" />
                    </div>
                  </div>

                  {/* Total Payment */}
                  <div className="row mt-4 mx-2 ">
                    <div className="col-5">
                      <label for="totalamountinput" className="form-label">Total Amount</label>
                    </div>
                    <div className="col-6">
                      
                      <input  type="number" className="form-control " id="totalamountinput" />
                    </div>
                  </div>

                  {/* Additional Expenses */}
                  <div className="row mt-4 mx-2 ">
                      <div className="col-5">
                        <label for="additionalexpenses" className="form-label">Additional Expenses</label>
                      </div>
                      <div className="col-7 d-flex gap-2">
                        
                        <input  type="text" className="form-control w-100" id="additionalexpenses" placeholder='description'/>
                        <input  type="number" className="form-control w-100" id="additionalexpenses" placeholder='Amount'/>
                        <button type="button" class="btn " style={{backgroundColor:'#24314C',color:'white'}}>+</button>

                      </div>
                    </div>

                  
                  
            
                     

                    
                </div>

              </div>

            </div>
            
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            </div>
            
          </div>
      </div>

    </div>
  )
}
