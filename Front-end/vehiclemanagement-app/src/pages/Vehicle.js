import React from 'react'
import{Toaster,EditableText} from '@blueprintjs/core';
import {useEffect,useState } from 'react';


import { useNavigate } from 'react-router-dom';
export default function Vehicle() {
  const navigate = useNavigate();

  const [vehicles,setVehicles] = useState([]);
  const [vehicleTypes,setVehicleTypes] = useState([]);
  const [newVehicleType,setNewVehicleType] = useState("Select");
  const [vehicleBrands,setVehicleBrands] = useState([]);
  const [newVehicleBrand,setNewVehicleBrand] = useState("Select");
  const [newVehicleModel,setNewVehicleModel] = useState("");
  const [newVehiclePlateNo,setNewVehiclePlateNo] = useState("");
  const [newRevenueLicenceIssuedDate,setNewRevenueLicenceIssuedDate] = useState("");
  const [newRevenueLicenceExpiryDate,setNewRevenueLicenceExpiryDate] = useState("");
  const [newInsuranceIssuedDate,setNewInsuranceIssuedDate] = useState("");
  const [newInsuranceExpirydate,setNewInsuranceExpiryDate] = useState("");
  const [vehicleStatus,setVehicleStatus] = useState("");
  const [hoveredVehicleId, setHoveredVehicleId] = useState(null);
  const [userId,setUserId] = useState('');
  const [companyId,setCompanyId] = useState('');
 

  useEffect(()=>{
    // GetVehicleData();
    const userId = localStorage.getItem("userId");
    setUserId(userId);

    const CompanyId = localStorage.getItem("companyId");
    setCompanyId(CompanyId); 
    
    
    fetch('https://localhost:7096/api/VehicleType/GetAllVehicleTypes')
    .then((response)=>response.json())
    .then((data)=>{

      setVehicleTypes(data)
      console.log(data)
    }
      
      
    )
    .catch((err)=>console.log(err))

    fetch('https://localhost:7096/api/VehicleBrand/GetAllVehicleBrands')
    .then((response)=>response.json())
    .then((data)=>{
      
      
      setVehicleBrands(data)}
      
    )
    .catch((err)=>console.log(err))
     
    fetch(`https://localhost:7096/api/Vehicle/GetAllVehicles?companyId=${CompanyId}`)
    .then((response)=>response.json())
    .then((data)=>{
      
      
      setVehicles(data)}
      
      
    )
    .catch((err)=>console.log(err))
          

  },[]);
  //function for get all vehicle data
//   function GetVehicleData(){
   
// }


   

  function handlesubmit(){
     const type = newVehicleType.trim();
     const brand = newVehicleBrand.trim();
     const model = newVehicleModel.trim();
     const plate_no = newVehiclePlateNo.trim();
     const LicenceIssuedDate =newRevenueLicenceIssuedDate.trim();
     const LicenceExpiryDate = newRevenueLicenceExpiryDate.trim();
     const InsuranceIssuedDate = newInsuranceIssuedDate.trim();
     const InsuranceExpiryDate = newInsuranceExpirydate.trim();
     const User_id  = userId;
     const CompanyId =companyId;
     
     
    // console.log(type);
    // console.log(model);
    // console.log(brand);
    // console.log(plate_no);
    // console.log(LicenceIssuedDate);
    // console.log(LicenceExpiryDate);
    // console.log(InsuranceIssuedDate);
    // console.log(InsuranceExpirydate);

  
    fetch('https://localhost:7096/api/Vehicle/AddVehicle', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type,
        brand,
        model,
        plate_no,
        LicenceIssuedDate,
        LicenceExpiryDate,
        InsuranceIssuedDate,
        InsuranceExpiryDate,
        vehicleStatus:"",
        User_id,
        CompanyId
        
      })
    })
      
      .then(data => {
        console.log(data); // The response data from the API
        alert("Vehicle added successfully");
        
        
        // Reset form fields (optional)
        // setNewVehicleModel("");
        // setNewVehiclePlateNo("");
      })
      .catch((err) => {
        console.error('Error:', err); // Catch and log any errors
        alert("An error occurred while adding the vehicle.");
        // GetVehicleData();
      });
      
      
    

  }
    const onClickUpdate= (vehicleid)=>{
      navigate(`/Vehicleupdate/${vehicleid}`)
    }

    const onClickDelete=(vehicle_id)=>{
        fetch(`https://localhost:7096/api/Vehicle/DeleteVehicle?Vehicle_id=${vehicle_id}`,
          {
            method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            
            
            
          }
        
          ).then ((response)  =>console.log(response.data))
            
          .then(data =>{
            console.log(data)
            // setVehicles([...vehicles,data]);
            alert("Vehicle Deleted successfully");
            // GetVehicleData();
            
            
    
            // setNewVehicleModel(" ");
            // setNewVehiclePlateNo(" ");
          })
          .catch((err)=>console.log(err));
          
        
    };

    // const handleStatusUpdate=(vehicle_id,vehicleCurrentStatus)=>{
        
       
      
    // }
    const handleMouseEnter = (vehicleId) => {
      setHoveredVehicleId(vehicleId);  // Set the hovered vehicle ID
    };
  
    const handleMouseLeave = () => {
      setHoveredVehicleId(null);  // Reset the hovered vehicle ID when mouse leaves
    };

    function handleStatusUpdate(){
      
    }

  return (
    <div>
      {/* <h1>{newVehicleModel}</h1>
      <h1>{newVehicleType}</h1>
      <h1>{newVehiclePlateNo}</h1>
      <h1>{newVehicleBrand}</h1>
      <h1>{newRevenueLicenceIssuedDate}</h1>
      <h1>{newRevenueLicenceExpiryDate}</h1>f
      <h1>{newInsuranceIssuedDate}</h1>
      <h1>{newInsuranceExpirydate}</h1> */}
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
    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  <div className='vehiclelist card text-bg-light mx-5 mt-5' 
    style={{
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '15px'
    }}>
    
    {/* Header Row */}
    <div className="row pt-3 mx-1" style={{borderBottom: '2px solid #007BFF', paddingBottom: '10px'}}>
      
      <div className="col-1 d-flex justify-content-center"><h5 style={{ fontWeight: 'bold', color: '#007BFF' }}>ID</h5></div>
      <div className="col-2"><h5 style={{ fontWeight: 'bold', color: '#007BFF' }}>Vehicle Type</h5></div>
      <div className="col-2"><h5 style={{ fontWeight: 'bold', color: '#007BFF' }}>Brand</h5></div>
      <div className='col-2'><h5 style={{ fontWeight: 'bold', color: '#007BFF' }}>Vehicle Model</h5></div>
      <div className='col-2'><h5 style={{ fontWeight: 'bold', color: '#007BFF' }}>Plate No</h5></div>
      
      <div className="col-2"><h5 style={{ fontWeight: 'bold', color: '#007BFF' }}>Action</h5></div>
      <div className='col-1'><h5 style={{ fontWeight: 'bold', color: '#007BFF' }}>Status</h5></div>
    </div>

    {/* Vehicle Rows */}
    {vehicles.map((vehicle) => (
      <div className="row pt-4 mx-1 d-flex justify-content-center align-items-center" 
        key={vehicle.vehicle_id}
        onMouseEnter={() => handleMouseEnter(vehicle.vehicle_id)}
        onMouseLeave={handleMouseLeave}
        style={{
          cursor: 'pointer',
          backgroundColor: hoveredVehicleId === vehicle.vehicle_id ? '#e9f7ff' : 'white',
          borderBottom: '1px solid #007BFF',
          transition: 'background-color 0.3s ease'
        }}
      >
        <div className="col-1 d-flex justify-content-center align-items-center" style={{ fontWeight: '500' }}>{vehicle.vehicle_id}</div>
        <div className="col-2">{vehicle.type}</div>
        <div className="col-2"><EditableText value={vehicle.brand}/></div>
        <div className="col-2">{vehicle.model}</div>
        <div className="col-2"><EditableText value={vehicle.plate_no}/></div>
        <div className="col-2 d-flex align-items-center">
          <button className='btn' style={{ backgroundColor: '#007BFF', color: 'white', marginRight: '10px', borderRadius: '5px', padding: '5px 15px' }} onClick={() => onClickUpdate(vehicle.vehicle_id)}>Update</button>
          <button className='btn' style={{ backgroundColor: '#dc3545', color: 'white', marginRight: '10px', borderRadius: '5px', padding: '5px 15px' }} onClick={() => onClickDelete(vehicle.vehicle_id)}>Delete</button>
          
        </div>
        <div className="col-1" style={{color: vehicle.vehicleStatus === 'Available' ? 'green' :vehicle.vehicleStatus==='On Journey' ? 'Blue': 'Red',fontWeight: 'bold',}}>{vehicle.vehicleStatus }</div>
      </div>
    ))}
  </div>
</div>

      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div className='row'>
          <div className='col'>
          <div className="addvehiclecontent card text-bg-light mx-1 mt-3 p-3 shadow-lg" style={{ borderRadius: '15px' }}>
            {/* heading row */}
           <div className="card-header" >
              <h4 className='text-center'>Vehicle General Information</h4>
           </div>  
           
           <div className="card-body">
           <div className="row">
              {/* vehicle general information */}
              <div className="col-6">
                {/* vehicleType row */}
                <div className="row my-3">
                  <div className="col-4">
                    <label htmlFor="plateno" className="form-label" >Vehicle Type</label>
                  </div>
                  <div className="col-6">
                    <div className="btn-group w-100">
                      <button type="button" className="btn btn-secondary">{newVehicleType}</button>
                      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu">
                        {vehicleTypes.map((types) => (
                          <li key={types.type}><a className="dropdown-item" href="#" onClick={() => setNewVehicleType(types.type)}>{types.type}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* vehiclebrand row */}
                <div className="row my-3">
                  <div className="col-4">
                    <label htmlFor="plateno" className="form-label" >Brand</label>
                  </div>
                  <div className="col-6">
                    <div className="btn-group w-100">
                      <button type="button" className="btn btn-secondary">{newVehicleBrand}</button>
                      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu">
                        {vehicleBrands.map((brands) => (
                          <li key={brands.brand}><a className="dropdown-item" href="#" onClick={() => setNewVehicleBrand(brands.brand)}>{brands.brand}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* vehicle model row */}
                <div className="row my-3">
                  <div className="col-10">
                    <label htmlFor="vehicleModel" className="form-label" >Vehicle Model</label>
                    <input type="text" className="form-control" id="vehicleModel" placeholder="Enter Vehicle Model..." onChange={(e) => setNewVehicleModel(e.target.value)} />
                  </div>
                </div>

                {/* vehicle plate no row */}
                <div className="row my-3">
                  <div className="col-10">
                    <label htmlFor="vehicleplateno" className="form-label" >Vehicle Plate No</label>
                    <input type="text" className="form-control" id="vehicleplateno" placeholder="Enter Vehicle Plate No..." onChange={(e) => setNewVehiclePlateNo(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="col-6">
                {/* revenue licence row */}
                <div className="row mb-3">
                  <div className="col-12">
                    <h6 style={{ color: '#007BFF', fontWeight: 'bold' }}>Revenue Licence</h6>
                  </div>
                  <div className="col-12 d-flex">
                    <div className="col-4">
                      <label htmlFor="issueddateinput" className="form-label" >Issued Date</label>
                    </div>
                    <div className="col-8">
                      <input type="date" className="form-control" id="issueddateinput" onChange={(e) => setNewRevenueLicenceIssuedDate(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12 d-flex mt-3">
                    <div className="col-4">
                      <label htmlFor="expirydateinput" className="form-label" >Expiry Date</label>
                    </div>
                    <div className="col-8">
                      <input type="date" className="form-control" id="expirydateinput" onChange={(e) => setNewRevenueLicenceExpiryDate(e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* insurance details row */}
                <div className="row mb-3">
                  <div className="col-12">
                    <h6 style={{ color: '#007BFF', fontWeight: 'bold' }}>Vehicle Insurance</h6>
                  </div>
                  <div className="col-12 d-flex">
                    <div className="col-4">
                      <label htmlFor="Insuranceissueddateinput" className="form-label" >Issued Date</label>
                    </div>
                    <div className="col-8">
                      <input type="date" className="form-control" id="Insuranceissueddateinput" onChange={(e) => setNewInsuranceIssuedDate(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12 d-flex mt-3">
                    <div className="col-4">
                      <label htmlFor="Insuranceexpirydateinput" className="form-label" >Expiry Date</label>
                    </div>
                    <div className="col-8">
                      <input type="date" className="form-control" id="Insuranceexpirydateinput" onChange={(e) => setNewInsuranceExpiryDate(e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row ">
                <div className="col-6">
                  <label for="imageUpload" className="form-label ">Choose an image:</label>
                  <input type="file" id="imageUpload" className="form-control"accept="image/*"/>
                </div>
            </div> */}

            {/* Add and Cancel row */}
            <div className="row justify-content-center mt-4 ">
              <div className="col-6 ">
               <button type="button" className="btn btn-success w-100"  onClick={handlesubmit}>Add</button>
              </div>
            </div>

            <div className="row justify-content-center mt-4 ">
              <div className="col-3">
                <button type="button" className="btn btn-danger w-100" >Cancel</button>
              </div>
            </div>

            
            </div>


          </div>
        
          </div>
        </div>
          
      </div>

              
    </div>
      
    </div>
  )
}
