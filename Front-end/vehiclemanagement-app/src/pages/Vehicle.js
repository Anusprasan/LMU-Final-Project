import React from 'react'



export default function Vehicle() {
  return (
    <div> 
      <div className="row">
        <div className="col">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Vehicle List</button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Add vehicle</button>
            
            </div>
          </nav>
      </div>
    </div>
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">fdgfdgfdgf
        
      </div>
      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <form>
            {/* 1st row dropdowns */}
            <div className="row px-5 pt-5">
              <div className="col-2"> 
                <div class="btn-group w-100">
                  <button type="button" class="btn btn-secondary " >Vehicle Type</button>
                  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
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

              <div className="col-2">
                <div class="btn-group w-100">
                    <button type="button" class="btn btn-secondary " >Make</button>
                    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
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
            {/* 2 nd row */}
            <div className="row px-5 py-5">
              <div className="col-2">
                <div className="mb-3">
                  <label for="vehicleModel" className="form-label">Vehicle Model</label>
                  <input type="text" className="form-control" id="vehicleModel" placeholder="Enter Your Vehicle Model..."/>
                </div>
              </div>

              <div className="col-2">
                <div className="mb-3">
                  <label for="vehicleModel" className="form-label">Plate No</label>
                  <input type="text" className="form-control" id="vehicleModel" placeholder="Enter Your Plate No"/>
                </div>
              </div>
            </div>

            <div className="row px-5 py-5">
              <div className="col-4 d-flex justify-content-end">
                <button type="button" class="btn btn-primary">ADD</button>
              </div>
            </div>
        </form>
        
        

      </div>
              
    </div>
       
        
    </div>
  )
}
