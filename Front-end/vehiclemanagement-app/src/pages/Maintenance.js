import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
  const [serviceVehicleId, setServiceVehicleId] = useState('');
  const [vehicleServicedate, setVehicleServiceDate] = useState();
  const [serviceOdoReading, setServiceOdoReading] = useState();
  const [service,setService] = useState('');
  const [servicePhoneNo, setServicePhoneNo] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceTotalAmount,setServiceTotalAmount] = useState('');
  const [companyId,setCompanyId] = useState('');
  const [allRepairDatas,setAllRepairDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [updateInputData, setUpdateInputData]  = useState('');



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

    if(!vehicleId||!service||!servicePhoneNo||!serviceOdoReading||!serviceDescription||!serviceOdoReading||!vehicleServicedate||!serviceTotalAmount){
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

  function handleCancel(){
    setVehicleId('');
    setRepairDate('');
    setGarageName('');
    setAddress('');
    setPhoneNo('');
    setMalfunctionDetails('');
    setTotalAmount('');
    setVehicleId('');

  }

  function handleServiceCancel(){
    setServiceVehicleId('');
    setVehicleServiceDate('');
    setServiceOdoReading('');
    setService('');
    setServicePhoneNo('');
    setServiceDescription('');
    setServiceTotalAmount('');
  }

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
  
  return (
    <div>
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
              <button class="nav-link " id="nav-AddRepair-tab" data-bs-toggle="tab" data-bs-target="#nav-AddRepair" type="button" role="tab" aria-controls="nav-AddRepair" aria-selected="false">Add Repairs</button>
              <button class="nav-link" id="nav-AddService-tab" data-bs-toggle="tab" data-bs-target="#nav-AddService" type="button" role="tab" aria-controls="nav-AddService" aria-selected="false">Add Services</button>
              
             
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
                  <input className='form-control mx-2' type="text" id="updateRepair" placeholder="Enter RepairId..." value={updateInputData} />
                  <button className='btn btn-success mx-2'>Update</button>
                  
                  <button className='btn btn-danger'>Delete</button>
                  

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
                        <th>Total Amount</th>
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
                            <td className='text-center'><button className='btn btn-info' onClick={()=>handleViewClick(data.repair_id)}>View</button></td>
                          

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
                Anush
            </div>
            <div class="tab-pane fade " id="nav-AddRepair" role="tabpanel" aria-labelledby="nav-AddRepair-tab">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className='card'>
                  <div className='card-header'>
                    <h4 className='text-center'>Vehicle Repairs</h4>
                  </div>
                  
                  <div className='card-body'>
                    
                  </div>

                  
            
                    
                    {/* plateno */}
                    <div className="row  mx-2 ">
                        <div className="col-5">
                          <label for="plateno" className="form-label">Vehicle Id</label>
                        </div>
                        <div className="col-5">
                            <select class="form-control " id="vehicleType" name="vehicleType"  value={vehicleId} onChange={(e) => setVehicleId(e.target.value)}>
                                <option value="" disabled selected>Select Vehicle </option>
                                
                                  {vehicleIds.map((ids,index)=>(
                                    <option key={index} >{ids}</option>
                                  ))}
                            </select>
                          

                        </div>
                      </div>

                    {/* date row */}
                    <div className="row my-2 mx-2 ">
                      <div className="col-5">
                        <label for="dateinput" className="form-label">Date</label>
                      </div>
                      <div className="col-5" >
                      <input type="Datetime-local" className='form-control' id="dateinput"  value={repairDate} onChange={(e)=>setRepairDate(e.target.value)} />
                      </div>
                    </div>

                    {/* Garage Name */}
                    <div className="row  mx-2 ">
                      <div className='col'>
                        <label for="garagenameinput" className="form-label">Garage Name</label>
                        <input  type="text" className="form-control w-100" id="garagenameinputs" value={garageName} onChange={(e)=>setGarageName(e.target.value)}/>
                      </div>
                    </div>
                    {/* Garage Address */}
                    <div className="row  mx-2 ">
                      <div className='col'>
                        <label for="garageaddressinput" className="form-label">Address</label> 
                        <input  type="text" className="form-control " id="garageaddressinput" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                      </div>
                    </div>

                    {/* Garage Phone No */}
                    <div className="row  mx-2 ">
                      <div className='col'>
                        <label for="garagephonenoinput" className="form-label">Phone No</label>
                        <input  type="tel" className="form-control " id="garagephonenoinput" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value.replace(/\D/g, ''))} maxLength={10} />
                      </div>
                     
                    </div>

                  {/* Malfunction details */}
                  <div className="row  mx-2 ">
                    <div className='col'>
                      <label for="malfunctioninput" className="form-label">Malfunction Details</label>
                      <textarea className="form-control " id="malfunctioninput"  value={malfunctionDetails} onChange={(e)=>setMalfunctionDetails(e.target.value)}/>
                    </div>
                  </div>

                  {/* Total Payment */}
                  <div className="row  mx-2 ">
                    <div className='col'>
                      <label for="totalamountinput" className="form-label">Total Amount</label>
                      <input  type="number" className="form-control " id="totalamountinput" value={totalAmount} onChange={(e)=> setTotalAmount(e.target.value)}/>
                    </div>
                  </div>

                 
                  {/* save and cancel row */}
                  <div className="row my-2 justify-content-center"> 
                    <div className="col-6">
                      <button type="button" class="btn btn-success w-100"  onClick={handleRepairSubmit}>Save</button>
                    </div>
                  </div>

                  <div className="row my-2 justify-content-center"> 
                    <div className="col-3">
                      <button type="button" class="btn btn-danger w-100" onClick={handleCancel}>Clear</button>
                    </div>
                  </div>

                  
                  
            
                     

                    
                </div>

              </div>
              

            </div>
            
            </div>
            <div class="tab-pane fade" id="nav-AddService" role="tabpanel" aria-labelledby="nav-AddService-tab">
              <div className='row justify-content-center'>
                <div className="col-6">
                  <div className='card'>
                    <div className='card-header'>
                      <h4 className='text-center'>General Services</h4>
                    </div>

                    <div className='card-body'>
                      {/* plateno */}
                      <div className="row mt-4 mx-2 ">
                          <div className="col-5">
                            <label for="plateno" className="form-label">Vehicle Id</label>
                          </div>
                          
                          <div className="col-6">
                            
                            <select class="form-control " id="vehicleType" name="vehicleType" value={serviceVehicleId} onChange={(e) => setServiceVehicleId(e.target.value)}>
                            <option value="" disabled selected>Select Vehicle </option>
                            {vehicleIds.map((ids,index)=>(
                               <option key={index} >{ids}</option>
                            ))}
                                
                               
                               
                            </select>
                          

                          </div>
                      </div>

                      
              
                      
                      

                      {/* date row */}
                      <div className="row mt-4 mx-2 ">
                        <div className="col-5">
                          <label for="dateinput" className="form-label">Date</label>
                        </div>
                        <div className="col-6" >
                        <input type="Datetime-local" className='form-control' id="dateinput" value={vehicleServicedate} onChange={(e)=> setVehicleServiceDate(e.target.value)}/>
                        </div>
                      </div>

                      {/* odemeter reading row */}
                      <div className="row  mx-2">
                        <div className="col">
                          <label for="odometerreadinginput" className="form-label" >Odometer Reading(Km)</label>
                          <input  type="text" className="form-control w-100" id="odometerreadinginput" value={serviceOdoReading} onChange={(e) => setServiceOdoReading(e.target.value.replace(/\D/g, ''))}  maxLength={10}/>
                        </div>
                      </div>

                      {/* Service Center */}
                      <div className="row  mx-2 ">
                        <div className="col">
                          <label for="servicecenterinput" className="form-label">Service Center</label>
                          <input  type="text" className="form-control w-100" id="servicecenterinput" value={service} onChange={(e)=>setService(e.target.value)}/>
                        </div>
                      </div>                         
                          
                      {/* Service  Phone No */}
                      <div className="row  mx-2 ">
                        <div className="col">
                          <label for="centerphonenoinput" className="form-label">Phone No</label>
                          <input  type="text" className="form-control " id="centerphonenoinput" value={servicePhoneNo} onChange={(e)=>setServicePhoneNo(e.target.value.replace(/\D/g, ''))} maxLength={10}/>
                        </div>
                      </div>
                        
                      {/* Service Description */}
                      <div className="row  mx-2 ">
                        <div className="col">
                          <label for="servicedescriptioninput" className="form-label">Service Description </label>
                          <textarea className="form-control " id="servicedescriptioninput" value={serviceDescription} onChange={(e)=>setServiceDescription(e.target.value)}/>
                        </div>
                      </div>
                        
                      {/* Total Payment */}
                      <div className="row  mx-2 ">
                        <div className="col">
                          <label for="totalamountinput" className="form-label">Total Amount</label>
                          <input  type="number" className="form-control " id="totalamountinput" value={serviceTotalAmount} onChange={(e)=>setServiceTotalAmount(e.target.value)}/>
                        </div>
                      </div>
                        
                      {/* save and cancel row */}
                      <div className="row justify-content-center my-2  mx-2 "> 
                        <div className="col-6 d-flex gap-2">
                          <button type="button" class="btn btn-success w-100" onClick={handleServiceSubmit}>Save</button>
                        </div>
                      </div>

                      <div className="row justify-content-center my-1  mx-2 "> 
                        <div className="col-3 d-flex gap-2">
                          <button type="button" class="btn btn-danger w-100" onClick={handleServiceCancel} >Cancel</button>
                        </div>
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
