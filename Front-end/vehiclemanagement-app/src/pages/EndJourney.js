import React from 'react'

export default function EndJourney() {
  return (
    <div>
      
            <div className='card '>
            <div className="row">
              <div className="col-6">
                
                <div className='startjourneycontent card-body text-bg-light  mx-1 mt-3'>
                    
                    {/* plateno */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                        <div className="col-5">
                          <label for="plateno" className="form-label">Active Vehicles</label>
                        </div>
                        <div className="col-4">
                          <div class="btn-group w-100">
                            <button type="button" class="btn btn-secondary" style={{backgroundColor:'#24314C'}}>Select</button>
                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#24314C'}} required>
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
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                      <div className="col-5">
                        <label for="dateinput" className="form-label">Date</label>
                      </div>
                      <div className="col-4" >
                      <input type="Date" className='form-control' id="dateinput" required />
                      </div>
                    </div>

                    {/* time row */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                      <div className="col-5">
                        <label for="timeinput" className="form-label">Time</label>
                      </div>
                      <div className="col-4">
                        <input type="time" className='form-control' id="timeinput" required/>
                      </div>
                    </div>

                    {/* odemeter reading row */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                      <div className="col-5">
                        <label for="odometerreadinginput" className="form-label">Odometer Reading(Km)</label>
                      </div>
                      <div className="col-4">
                        
                        <input  type="text" className="form-control w-100" id="odometerreadinginput" required/>
                      </div>
                    </div>
                    {/* Fuel Cost */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="fuelcostinput" className="form-label">Fuel Cost(optional)</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="fuelcostinput" required/>
                    </div>
                  </div>

                  {/* Driver Payement */}
                  <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="driverpaymentinput" className="form-label">Driver Payement(optional)</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="iverpaymentinput" required/>
                    </div>
                  </div>

                  {/* Other Vehicle Expenses*/}
                  <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="othervehicleexpensesinput" className="form-label">Driver Payement(optional)</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="othervehicleexpensesinput" required/>
                    </div>
                  </div>

                  {/* Malfunctions/Scratch*/}
                  <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="malfunctioninput" className="form-label">Malfunction/Scratch</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="malfunctioninput" />
                    </div>
                  </div>

                  {/* save and cancel row */}
                  <div className="row d-flex justify-content-center mt-5"> 
                    <div className="col-2 d-flex gap-2">
                      <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}} onClick={handleSubmit}>Save</button>
                      <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}}>Cancel</button>
                    </div>
                    
                  </div>
            
                     

                    
                </div>

              </div>
            </div>
            </div>
            
          
    </div>
  )
}
