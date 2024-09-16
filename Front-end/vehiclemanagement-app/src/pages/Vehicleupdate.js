import { VerticalBarChartDesc } from '@blueprintjs/icons/lib/esm/generated/20px/paths';
import React from 'react'


import {useEffect,useState } from 'react';


import { Link ,useParams} from 'react-router-dom';

export default function Vehicleupdate() {
  
  const params = useParams();
  const vehicle_id = params.vehicle_id;
  const [vehicleById,setVehicleById] = useState([]);
  const [type,setType] = useState("");
  const [vehicleTypes,setVehicleTypes] = useState([]);
  const [brand,setBrand] = useState("");
  const [model,setModel] =useState("");
  const [vehicleBrands,setVehicleBrands] = useState([]);
  const [plate_no,setPlate_no] = useState("");
  const [licenceIssuedDate,setLicenceIssuedDate] = useState("");
  const [licenceExpiryDate,setLicenceExpirydate] = useState("");
  const [insuranceIssuedDate,setInsuranceIssuedDate] = useState("");
  const [insuranceExpiryDate,setInsuranceExpiry] = useState("");


  
  useEffect(()=>{

    
        fetch(`https://localhost:7096/api/Vehicle/GetVehicleById?Vehicle_id=${vehicle_id}`)
        .then((response)=>response.json())
        
        .then((data)=>{
         
          setVehicleById(data);
                
       }).catch(err=>console.log(err))


       fetch('https://localhost:7096/api/VehicleType/GetAllVehicleTypes')
       .then((response)=>response.json())
       .then((data)=>setVehicleTypes(data))

       fetch('https://localhost:7096/api/VehicleBrand/GetAllVehicleBrands')
       .then((response)=>response.json())
       .then((data)=>setVehicleBrands(data))
        
      
        
    
  },[]);
  useEffect(() => {
    vehicleById.map((vehicledata)=>(
      setType(vehicledata.type),
      setBrand(vehicledata.brand),
      setModel(vehicledata.model),
      setPlate_no(vehicledata.plate_no),
      setLicenceIssuedDate(vehicledata.licenceIssuedDate?.split('T')[0] || ""),
      setLicenceExpirydate(vehicledata.licenceExpiryDate?.split('T')[0] || ""),
      setInsuranceIssuedDate(vehicledata.insuranceIssuedDate?.split('T')[0] || ""),
      setInsuranceExpiry(vehicledata.insuranceExpiryDate?.split('T')[0] || "")
    ))

  }, [vehicleById]);
       
  function handleUpdate(){
    const updateVehicle_id = vehicle_id;
    const vehicletype = type.trim();
    const vehiclebrand = brand.trim();
    const vehiclemodel = model.trim();
    const vehicleplate_no = plate_no.trim();
    const vehiclelicenceIssuedDate = licenceIssuedDate.trim();
    const vehiclelicenceExpiryDate =  licenceExpiryDate.trim();
    const vehicleinsuranceIssuedDate = insuranceIssuedDate.trim();
    const vehicleinsuranceExpiryDate = insuranceExpiryDate.trim();


    // console.log(vehicletype);
    // console.log(vehiclebrand);
    // console.log(vehiclemodel);
    // console.log(vehicleplate_no);
    // console.log(vehiclelicenceIssuedDate);
    // console.log(vehiclelicenceExpiryDate);
    // console.log(vehicleinsuranceIssuedDate);
    // console.log(vehicleinsuranceExpiryDate);

    fetch('https://localhost:7096/api/Vehicle/UpdateVehicle',
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          vehicle_id:updateVehicle_id,
          type:vehicletype,
          brand:vehiclebrand,
          model:vehiclemodel,
          plate_no:vehicleplate_no,
          LicenceIssuedDate:vehiclelicenceIssuedDate,
          LicenceExpiryDate:vehiclelicenceExpiryDate,
          InsuranceIssuedDate:vehicleinsuranceIssuedDate,
          InsuranceExpiryDate:vehicleinsuranceExpiryDate
        })

        
        
      }
    
      ).then ((response)  =>console.log(response.data))
        
      .then(data =>{
        console.log(data)
        // setVehicles([...vehicles,data]);
        alert("user added successfully");
        

        // setNewVehicleModel(" ");
        // setNewVehiclePlateNo(" ");
      })
      .catch((err)=>console.log(err));

      
    

  }
  


  return (
    <div>
      
      {/* <h1>{plate_no}</h1>
      <h1>{licenceIssuedDate}</h1>
      <h1>{licenceExpiryDate}</h1>
      <h1>{insuranceIssuedDate}</h1>
      <h1>{insuranceExpiryDate}</h1> */}
      <form>
      <div className='addvehiclecontent card text-bg-light  mx-1 mt-3'>
         {/* heading row */}
         <div className="row mt-2 mx-2 ">
                  <div className="col d-flex justify-content-center">
                    <h4>Vehicle General Information</h4>
                  </div>
                  
              </div>
        <div className="row">
          {/* vehicle general information */}
          <div className="col-6">
            

              {/* vehicleType row */}
              <div className="row mt-4 mx-2">
                <div className="col-4">
                  <label for="plateno" className="form-label">Vehicle Type</label>
                </div>
                <div className="col-4"> 
                  <div class="btn-group w-100">
                    
                      <button type="button" class="btn btn-secondary " placeholder="Select">{type}</button>
                   
                    
                    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      {vehicleTypes.map((types)=>(
                          <li><a  class="dropdown-item" href="#" onClick={()=>setType(types.type)}>{types.type}</a></li>
                      ))}
                      
        
                    </ul>
                  
                  </div>
                </div>
              </div>

              {/* vehiclebrandrow */}
              <div className="row mt-4 mx-2">
                <div className="col-4">
                  <label for="plateno" className="form-label">Brand</label>
                </div>
                <div className="col-4">
                  <div class="btn-group w-100">
                      <button type="button" class="btn btn-secondary " >{brand}</button>
                      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul class="dropdown-menu">
                          {vehicleBrands.map((brands)=>(
                            <li><a class="dropdown-item" href="#" onClick={()=>setBrand(brands.brand)}>{brands.brand}</a></li>
                          ))}
                          
                      </ul>
                      
                  </div>
                
                </div>
              </div>

              {/* vehicle modelrow */}
              <div className="row mt-4 mx-2">
                <div className="col-4">
                    <label for="vehicleModel" className="form-label">Vehicle Model</label>    
                </div>
                <div className="col-4">
                  
                    <input  type="text" className="form-control" id="vehicleModel" placeholder="Enter Vehicle Model..." value={model} onChange={(e)=>setModel(e.target.value)}/>
                  
                  
                </div>
              </div>

              {/* vehicle plate no row */}

              <div className="row mt-4 mx-2">
                <div className="col-4">
                    <label for="vehicleplateno" className="form-label">Vehicle PlateNo</label>    
                </div>
                <div className="col-4">
                  
                   <input  type="text" className="form-control" id="vehicleplateno" placeholder="Enter Vehicle Model..." value={plate_no} onChange={(e)=>setPlate_no(e.target.value)}/>
              
                  
                </div>
              </div>
              
              
          </div>
          <div className="col-6">
            {/* revenuelicence row */}
            <div className="row ">
              <div className="col-12">
                  <h6>Revenue Licence</h6>
              </div>
              <div className="col-12 d-flex mx-3">
                  <div className="col-4">
                    <label for="issueddateinput" className="form-label">Issued Date</label>
                  </div>
                  <div className="col-4">
                    
                      <input type="Date" className='form-control' id="issueddateinput"  value={licenceIssuedDate} onChange={(e)=>setLicenceIssuedDate(e.target.value)}/> 
                      
                    
                       
                  </div>
              </div>
              <div className="col-12 d-flex mx-3">
                  <div className="col-4">
                    <label for="expirydateinput" className="form-label">Expiry Date</label>
                  </div>
                  <div className="col-4 mt-2">
                    <input type="Date" className='form-control' id="expirydateinput" value={licenceExpiryDate} onChange={(e)=>setLicenceExpirydate(e.target.value)}/>     
                  </div>
              </div>
              
            </div>
            {/* insurance details row */}
            <div className="row ">
              <div className="col-12">
                  <h6>Vehicle Insurance</h6>
              </div>
              <div className="col-12 d-flex mx-3">
                  <div className="col-4">
                    <label for="Insuranceissueddateinput" className="form-label">Issued Date</label>
                  </div>
                  <div className="col-4 mt-2">
                    <input type="Date" className='form-control' id="Insuranceissueddateinput" value={insuranceIssuedDate} onChange={(e)=>setInsuranceIssuedDate(e.target.value)}/>     
                  </div>
              </div>
              <div className="col-12 d-flex mx-3">
                  <div className="col-4">
                    <label for="Insuranceexpirydateinput" className="form-label">Expiry Date</label>
                  </div>
                  <div className="col-4 mt-2">
                    <input type="Date" className='form-control' id="Insuranceexpirydateinput" value={insuranceExpiryDate} onChange={(e)=>setInsuranceExpiry(e.target.value)}/>     
                  </div>
              </div> 
              
            </div>

          </div>
        </div>
        {/* Add and Cancel row */}
        <div className="row">
          <div className="col-10"></div>
          <div className="col d-flex justify-content-end gap-2">
           <button type="button" class="btn btn-primary w-100" onClick={handleUpdate}>Update</button>
           <button type="button" class="btn btn-primary w-100"><Link to="/Vehicle" className='text-decoration-none' style={{color:'White'}}>Cancel</Link></button>
          </div>
        </div> 
      </div>
          
      </form>
          
       
    </div>
  )
}
