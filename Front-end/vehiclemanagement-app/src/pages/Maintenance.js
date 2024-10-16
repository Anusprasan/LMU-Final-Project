import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Maintenance() {
  const navigate = useNavigate();
  const [userId,setUserId] = useState('');
  const [vehicleIds, setVehicleIds] = useState([]);
  const [vehicleId,setVehicleId] =useState('');
  const [repairDate,setRepairDate] = useState('');
  const [garageName,setGarageName] = useState('');
  const [address,setAddress] = useState('');
  const [phoneNo,setPhoneNo] = useState('');
  const [malfunctionDetails,setMalfunctionDetails] =useState('');
  const [totalAmount, setTotalAmount] =useState('');
  const [companyId,setCompanyId] = useState('');
  const [allRepairDatas,setAllRepairDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [updateInputData, setUpdateInputData]  = useState('');
  const [repairId , setRepairId] = useState('');

  // service Datas
  const [allserviceDatas,setAllServiceDatas] = useState([]);
  const [serviceCompanyId, setServiceCompanyId] = useState('');
  const [serviceVehicleId, setServiceVehicleId] = useState('');
  const [vehicleServicedate, setVehicleServiceDate] = useState();
  const [serviceOdoReading, setServiceOdoReading] = useState();
  const [service,setService] = useState('');
  const [servicePhoneNo, setServicePhoneNo] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceTotalAmount,setServiceTotalAmount] = useState('');
  const [serviceSearchTerm,setServiceSearchTerm] = useState('');
  const [serviceUpdateInputData , setSerViceUpdateInputData] = useState('');



  useEffect(()=>{
    const userid = localStorage.getItem("userId");
    setUserId(userid);

    const CompanyId = localStorage.getItem("companyId");
    setCompanyId(CompanyId);

    fetch(`https://localhost:7096/api/Repair/GetAllRepairData?companyId=${CompanyId}`)
    .then(response =>{
      if(!response.ok){
        throw new Error(`Http error! status:${response.status}`);
      }
      return response.json();
    })
    .then(data=>{
      console.log(data);
      setAllRepairDatas(data);
    })
    .catch(error =>{
      console.error('Error fetching repair Data',error);
    })

    fetch(`https://localhost:7096/api/Repair/GetVehicleId?userId=${userid}`)
    .then(response=>{
      if(!response.ok){
        throw new Error ('Network response was not ok ');
      }
      return response.json();
    })
    .then(data =>{
        setVehicleIds(data);
    
    })
    .catch(err =>{

      console.error(err)
    })
  },[]);

  // useEffect for Service Tab
  useEffect(()=>{
    const CompanyId = localStorage.getItem("companyId");
    setServiceCompanyId(CompanyId)

    fetch(`https://localhost:7096/api/Service/GetAllServiceData?companyId=${CompanyId}`)
    .then(response =>{
      if(!response.ok){
        throw new Error(`Http Error !Status :${response.status}`);
      }
      return response.json();
    })
    .then(data =>{
      console.log(data);
      setAllServiceDatas(data);
      
    })
    .then(err =>{
      console.log(err);

    })
  },[])

  function handleRepairSubmit(){
    const repairData = {
        vehicle_id : vehicleId,
        garage_name : garageName,
        date: repairDate,
        address : address,
        phone_no : phoneNo,
        malfunction_details : malfunctionDetails,
        total_amount : totalAmount,
        created_by : userId,
        userId,
        companyId

        

    }

    if(!vehicleId||!repairDate||!garageName||!address||!phoneNo||!malfunctionDetails||!totalAmount){
      alert("Enter Valid Data For All Fields");
    }
    else{
      fetch('https://localhost:7096/api/Repair/InsertVehicleRepairs',
        {
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },

          body:JSON.stringify(repairData)
        }
      )
      .then(response =>{
        if(!response.ok){
          throw new Error(`Http error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data =>{
        console.log(data);
        alert("Repairs added successfully")

      })
      .catch((err)=>{
        console.error(err);
        alert("Operation Failed")
      })
    }

    
  }

  function handleServiceSubmit(){

    const serviceData ={
      vehicle_Id : serviceVehicleId,
      service_center : service,
      phone_no : servicePhoneNo,
      odometer_reading : serviceOdoReading,
      description : serviceDescription,
      date :vehicleServicedate,
      amount :serviceTotalAmount,
      created_by : userId,
      companyId,
      userId
    

    }

    if(!serviceVehicleId||!service||!servicePhoneNo||!serviceOdoReading||!serviceDescription||!vehicleServicedate||!serviceTotalAmount){
      alert("Enter valid data for all fields");
    }else{
        fetch ('https://localhost:7096/api/Service/InsertService',
      {
        method : "POST",
        headers:{
          "Content-Type": "application/json"
        },

        body:JSON.stringify(serviceData)

      }
    )
    .then(response =>{
      if(!response.ok){
        throw new Error(`Http error!Status :${response.status}`);
      }
      return response.json();
    })
    .then(data =>{
      console.log(data);

      alert("Service Added SuccessFully")
    })
    .catch(err=>{
      console.log(err);
      alert("operaton Failed");
    })
    }

  
  }

  // function handleCancel(){
  //   setVehicleId('');
  //   setRepairDate('');
  //   setGarageName('');
  //   setAddress('');
  //   setPhoneNo('');
  //   setMalfunctionDetails('');
  //   setTotalAmount('');
  //   setVehicleId('');

  // }

  // function handleServiceCancel(){
  //   setServiceVehicleId('');
  //   setVehicleServiceDate('');
  //   setServiceOdoReading('');
  //   setService('');
  //   setServicePhoneNo('');
  //   setServiceDescription('');
  //   setServiceTotalAmount('');
  // }

  function handleViewClick(repairId){
    navigate(`/RepairViewMore/${repairId}`);
    
  }

  const filteredRepairDatas = allRepairDatas.filter((data) => {
    return (
      data.repair_id.toString().includes(searchTerm) ||
      data.date.includes(searchTerm) ||
      data.vehicle_id.toString().includes(searchTerm) ||
      data.garage_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.phone_no.toString().includes(searchTerm) ||
      data.total_amount.toString().includes(searchTerm)
    );
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

 const handleTableOnclick=(repairId)=>{
      setUpdateInputData(repairId);
  };
  
  const handleUpdate=()=>{
    const navigateToRepairUpdate = async () => {
      try{

        const UserId = localStorage.getItem('userId');
        setUserId(UserId);
        if(updateInputData == ""){
          alert("Enter Valid Repair ID");
        
        }else{
          const responseCheckUserType= await fetch(`https://localhost:7096/api/Repair/CheckUserType?userId=${UserId}`,{
            "method":"POST",
            "headers":{
              "Content-Type": "application/json"
            },

          });
          if(!responseCheckUserType.ok){
            throw new Error(`Http error! status:${responseCheckUserType.status}`);
          }

          const data = await responseCheckUserType.json();
          console.log(data);
          navigate(`/RepairUpdate/${updateInputData}`);

        }
      }
      catch(err){
        console.error('Error',err)
        alert("You Do not Have Permission To Update Repair Data");
      }
    
    }
    navigateToRepairUpdate();
    
  }

  const handleRepairDelete=(repairId)=>{
    fetch(`https://localhost:7096/api/Repair/DeleteRepairData?repairId=${repairId}`,{
      method:"POST",
      headers:{

        "Content-Type": "application/json"
      },

    })
    .then(response =>{
      if(!response.ok){
        throw new Error (`Http error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data =>{
      console.log(data);
      alert("Reapir Data Deleted Successfully")
    })
    .catch(error =>{
      console.error(error);
      alert("Opereation Failed");
    })
  }

  const handleAddButtonClick = () =>{
      navigate("/AddRepair");
  }

  const filteredServiceDatas = allserviceDatas.filter((data) => {
    return (
      data.service_id.toString().includes(serviceSearchTerm) ||
      data.date.includes(serviceSearchTerm) ||
      data.vehicle_Id.toString().includes(serviceSearchTerm) ||
      data.service_center.toLowerCase().includes(serviceSearchTerm.toLowerCase()) ||
      data.phone_no.toString().includes(serviceSearchTerm) ||
      data.odometer_reading.toString().includes(serviceSearchTerm)||
      data.amount.toString().includes(serviceSearchTerm)
    );
  });

  const handleServiceTableClick = (serviceId) =>{
    setSerViceUpdateInputData(serviceId);
  }

  const serviceAddButtonClick = ()=>{
    navigate("/AddService");
  }

  const handleServiceDelete=(serviceId)=>{
    fetch (`https://localhost:7096/api/Service/DeleteServiceData?serviceId=${serviceId}`,
      {
        method : "POST",
        headers:{
          "Content-Type": "application/json"
        },

        

      }
    )
    .then(response =>{
      if(!response.ok){
        throw new Error(`Http error!Status :${response.status}`);
      }
      return response.json();
    })
    .then(data =>{
      console.log(data);

      alert("Service Deleted SuccessFully")
    })
    .catch(err=>{
      console.log(err);
      alert("operaton Failed");
    })
  }

  async function handleServiceUpdate(){

    try{
      const UserId = localStorage.getItem("userId");

      if(serviceUpdateInputData==""){
        alert("Enter Valid Service ID");
        return;

      }


      const responseCheckServiceId = await fetch(`https://localhost:7096/api/Service/CheckUserTypeAndServiceId?userId=${UserId}&serviceId=${serviceUpdateInputData}`,{
        method : "POST",
        header: {
          "Content-Type": "application/json"
        },
      });
      if(!responseCheckServiceId.ok){
        throw new Error(`Http error! status:${responseCheckServiceId.status}`);
      }
      const accessStatus = await responseCheckServiceId.json();
      console.log(accessStatus);

      if(accessStatus.isValidRepairId != true){
        alert("You Do not Have Any Data For Given Service Id");
      }
      else if(accessStatus.isValidUserType != true){
        alert("You Do not Have Permission to Update This Data");

      }else{
          navigate(`/ServiceUpdate/${serviceUpdateInputData}`);
      }
      
    }
    catch(err){
      console.error("Error",err);
      alert("An Error Occured");
    }
  }
  return (
    <div>
      {/* {serviceSearchTerm} */}
      {/* {vehicleIds} */}
      {/* {vehicleId}
      {repairDate}
      {garageName}
      {address}
      {phoneno}
      {malfunctionDetails}
      {totalAmount} */}

      {vehicleServicedate}
      {serviceOdoReading}
      {service}
      {servicePhoneNo}
      {serviceDescription}
      {serviceTotalAmount}
      {serviceVehicleId}

      {/* nav row */}
      <div className="row">

          <nav>
            <div class="nav nav-tabs " id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-RepairHistory-tab" data-bs-toggle="tab" data-bs-target="#nav-RepairHistory" type="button" role="tab" aria-controls="nav-RepairHistory" aria-selected="true">Repair History</button>
              <button class="nav-link " id="nav-ServiceHistory-tab" data-bs-toggle="tab" data-bs-target="#nav-ServiceHistory" type="button" role="tab" aria-controls="nav-ServiceHistory" aria-selected="false">Service History</button>
            
              
             
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-RepairHistory" role="tabpanel" aria-labelledby="nav-RepairHistory-tab">
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
                  <input className='form-control ' type="text" id="updateRepair" placeholder="Enter RepairId..." value={updateInputData} onChange={(e)=>setUpdateInputData(e.target.value)} />
                  <button className='btn btn-success mx-1' onClick={handleUpdate}>Update</button>
                  <button className='btn btn-primary w-50' onClick={()=>handleAddButtonClick()}>Add</button>
                  
                  

                </div>
              </div>
              <div className='row justify-content-center mt-3 mx-1'>
                <div class =" col-md-12">
                  
                  <table id="tblCategory" class=" table table-striped table-bordered table-hover" >
                    <thead>
                      <tr>
                        <th>Repair ID</th>
                        <th>Date</th>
                        <th>Vehicle Id</th>
                        <th>Garage Name</th>
                        <th>Contact Number</th>
                        <th>Total Amount(LKR)</th>
                        <th></th>
                        <th></th>
                      </tr>

                    </thead>
                    <tbody>
                      {filteredRepairDatas.length>0?(
                        filteredRepairDatas.map((data)=>(
                          <tr key={data.repair_id} onClick={()=>handleTableOnclick(data.repair_id)}>
                            <td>{data.repair_id}</td>
                            <td>{data.date}</td>
                            <td>{data.vehicle_id}</td>
                            <td>{data.garage_name}</td>
                            <td>{data.phone_no}</td>
                            <td>{data.total_amount}</td>
                            <td className='text-center'><button className='btn btn-info w-75' onClick={()=>handleViewClick(data.repair_id)}>View</button></td>
                            <td className='text-center'><button className='btn btn-danger w-75'onClick={()=>handleRepairDelete(data.repair_id)}>Delete</button></td>
                          

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
            <div class="tab-pane fade " id="nav-ServiceHistory" role="tabpanel" aria-labelledby="nav-ServiceHistory-tab">
            <div className='row mx-1 mt-3'>
                <div className='col'>
                  <input
                    type="text"
                    id='serviceSearchInput'
                    name ="serviceSearchInput"
                    className="form-control w-25"
                    placeholder="Search..."
                    value={serviceSearchTerm}
                    onChange={(e)=>setServiceSearchTerm(e.target.value)}
                    
                  />
                </div>
                <div className='col-3 d-flex justify-content-end'> 
                  <input className='form-control mx-2' type="text" id="updateRepair" placeholder="Enter ServiceId..." value={serviceUpdateInputData} onChange={(e)=>setSerViceUpdateInputData(e.target.value.replace(/\D/g, ''))} />
                  <button className='btn btn-success mx-2' onClick={handleServiceUpdate}>Update</button>
                  <button className='btn btn-primary w-50' onClick={serviceAddButtonClick}>Add</button>
                  
                  

                </div>
              </div>
              <div className='row justify-content-center mt-3 mx-1'>
                <div class =" col-md-12">
                  
                  <table id="tblCategory" class=" table table-striped table-bordered table-hover" >
                    <thead>
                      <tr>
                        <th>Service ID</th>
                        <th>Date</th>
                        <th>Vehicle Id</th>
                        <th>Service Center</th>
                        <th>Contact Number</th>
                        <th>Odometer Reading(LKR)</th>
                        <th>Amount</th>
                        <th></th>
                        <th></th>
                      </tr>

                    </thead>
                    <tbody>
                      {filteredServiceDatas.length>0?(
                        filteredServiceDatas.map((data)=>(
                          <tr key={data.service_id} onClick={()=>handleServiceTableClick(data.service_id)}>
                          <td>{data.service_id}</td>
                          <td>{data.date}</td>
                          <td>{data.vehicle_Id}</td>
                          <td>{data.service_center}</td>
                          <td>{data.phone_no}</td>
                          <td>{data.odometer_reading}</td>
                          <td>{data.amount}</td>
                          <td className='text-center'><button className='btn btn-info w-75'>View</button></td>
                          <td className='text-center'><button className='btn btn-danger w-75' onClick={()=>handleServiceDelete(data.service_id)}>Delete</button></td>

                          
                        </tr>
                          ))
                        ):(
                          <tr>
                          <td colSpan="7" className="text-center">No results found</td>
                          </tr>
                        )}
                      
                      {/* {filteredRepairDatas.length>0?(
                        filteredRepairDatas.map((data)=>(
                          <tr key={data.repair_id} onClick={()=>handleTableOnclick(data.repair_id)}>
                            <td>{data.repair_id}</td>
                            <td>{data.date}</td>
                            <td>{data.vehicle_id}</td>
                            <td>{data.garage_name}</td>
                            <td>{data.phone_no}</td>
                            <td>{data.total_amount}</td>
                            <td className='text-center'><button className='btn btn-info w-75' onClick={()=>handleViewClick(data.repair_id)}>View</button></td>
                            <td className='text-center'><button className='btn btn-primary w-75' onClick={()=>handleAddButtonClick(data.repair_id)}>Add</button></td>
                          

                        </tr>
                        ))
                      ):(
                        <tr>
                          <td colSpan="7" className="text-center">No results found</td>
                        </tr>
                      )}
                      */}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
           
            
          </div>
      </div>

    </div>
  )
}
