import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {useEffect,useState } from 'react';

export default function AddRepair() {
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
  const [allRepairsData,setAllRepairsData] = useState([]);

  useEffect(()=>{
    const userid = localStorage.getItem("userId");
    setUserId(userid);

    const CompanyId = localStorage.getItem("companyId");
    setCompanyId(CompanyId);


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
        setVehicleId('');
        setRepairDate('');
        setGarageName('');
        setAddress('');
        setPhoneNo('');
        setMalfunctionDetails('');
        setTotalAmount('');
        setVehicleId('');


      })
      .catch((err)=>{
        console.error(err);
        alert("Operation Failed")
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

  return (
    <div>
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
  )
}
