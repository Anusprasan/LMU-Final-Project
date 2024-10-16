import React from 'react'
import {useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Vehicle() {
  const navigate = useNavigate();
  const [searchTerm,setSearchTerm] = useState('');
  const [updateInputData ,setUpdateInputData] = useState('');
  const [vehicles,setVehicles] = useState([]);
  const [vehicleTypes,setVehicleTypes]= useState([]);
  const [newVehicleType,setNewVehicleType] = useState("Select");
  const [vehicleBrands,setVehicleBrands] = useState([]);
  const [newVehicleBrand,setNewVehicleBrand] = useState("Select");
  const [newVehicleModel,setNewVehicleModel] = useState("");
  const [newVehiclePlateNo,setNewVehiclePlateNo] = useState("");
  const [userId,setUserId] = useState("");
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

  const filteredVehicleDatas = vehicles.filter((data) => {
    return (
      data.vehicle_id.toString().includes(searchTerm) ||
      data.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.plate_no.toLowerCase().includes(searchTerm.toLowerCase()) 
      
    );
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUpdateClick = () =>{

      const  checkData = async ()=>{
        try{
            if(updateInputData==""){
              alert("Enter Valid Data For All Input Fields");
              return;

            }
            const repsonseOfCheckUserIdandVehicleId =await fetch (`https://localhost:7096/api/Vehicle/CheckVehicleIdAndUsertype?vehicleId=${updateInputData}&userId=${userId}`,{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },



            });

            if(!repsonseOfCheckUserIdandVehicleId.ok){
              throw new Error (`Http error! status:${repsonseOfCheckUserIdandVehicleId.status}`);
            }

            const data = await repsonseOfCheckUserIdandVehicleId.json();
            if(data.hasValidVehicleId != true){
              alert("Check Your Vehicle Id");
            }
            else if(data.hasValidUserType !=true){
              alert("You Do not Have Permission To Update this Data");
            }
            else{
              navigate(`/VehicleUpdate/${updateInputData}`);
            }

        }
        catch(err){
          Console.error(err);
          alert("Ann error Occured");
        }
      }
      checkData();
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

  const handleTableOnclick=(vehicle_id)=>{
    setUpdateInputData(vehicle_id);
};

 
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
      <div className='row mx-1 mt-3'>
                <div className='col'>
                  <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    
                  />
                </div>
                <div className='col-3 d-flex justify-content-end'> 
                  <input className='form-control ' type="text" id="updateRepair" placeholder="Enter VehicleId..." value={updateInputData} onChange={(e)=>setUpdateInputData(e.target.value)} />
                  <button className='btn btn-success mx-1' onClick={handleUpdateClick}>Update</button>
                  <button className='btn btn-primary w-50' onClick={()=>handleAddButtonClick()}>Add</button>
                  
                  

                </div>
              </div>
              <div className='row justify-content-center mt-3 mx-1'>
                <div class =" col-md-12">
                  
                  <table id="tblCategory" class=" table table-striped table-bordered table-hover" >
                    <thead>
                      <tr>
                        <th>Vehicle ID</th>
                        <th>Vehicle Type</th>
                        <th>Brand</th>
                        <th>Vehicle Model</th>
                        <th>Plate No</th>
                        <th>Vehicle Status</th>
                        
                        <th></th>
                        <th></th>
                      </tr>

                    </thead>
                    <tbody>
                      {filteredVehicleDatas.length>0?(
                        filteredVehicleDatas.map((data)=>(
                          <tr key={data.vehicle_id} onClick={()=>handleTableOnclick(data.vehicle_id)}>
                            <td>{data.vehicle_id}</td>
                            <td>{data.type}</td>
                            <td>{data.brand}</td>
                            <td>{data.model}</td>
                            <td>{data.plate_no}</td>
                            <td style={{color: data.vehicleStatus === 'Available' ? 'green' :data.vehicleStatus==='On Journey' ? 'Blue': 'Red',fontWeight: 'bold',}}>{data.vehicleStatus}</td>
                            
                            <td className='text-center'><button className='btn btn-info w-75' onClick={()=>handleViewClick(data.vehicle_id)}>View</button></td>
                            <td className='text-center'><button className='btn btn-danger w-75'onClick={() => onClickDelete(data.vehicle_id)}>Delete</button></td>
                          

                        </tr>
                        ))
                      ):(
                        <tr>
                          <td colSpan="7" className="text-center">No results found</td>
                        </tr>
                      )}
                     
                      
                    </tbody>
                  </table>
                </div>
              </div>
    </div>
  )
}
