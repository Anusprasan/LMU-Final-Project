import React from 'react'
import { useEffect,useState} from 'react';
import{Toaster,EditableText} from '@blueprintjs/core';
import axios from 'axios';
import '../css files/Vehicle.css';



const AppToaster = Toaster.create({
  position:"top"
})

export default function Vehicle() {
  
  const[vehicles,setVehicles] = useState([])
  const[newVehicleModel,setNewVehicleModel] = useState("")
  const[newPlateNo,setNewPlateNo]=useState("")
  const[newVehicleType,setNewVehicleType] = useState("")
  const[newMake,setNewMake] = useState("")
  
  useEffect(() =>{
    fetch('http://localhost:5216/api/Vehicle/Vehicle')
    .then((response)=>response.json())
    .then((json)=>{setVehicles(json)})
  },[]);

  function addNewVehicle (){
    const name = newVehicleModel.trim();
    const email =newPlateNo.trim();
    const phone = newVehicleType.trim();
    const website = newMake.trim();



    if (name&&email&&phone&&website){
      fetch('https://jsonplaceholder.typicode.com/users',
        {
          method:"POST",
          body:JSON.stringify({
            name,
            email,
            phone,
            website
          }),

          headers:{
            "content-Type":"application/json; charset=UTF-8"
          },
        }

      ).then ((response) => response.json())
      .then(data =>{
        setUsers([...users,data]);
       alert("user added successfully")

        setNewVehicleModel("");
        setNewPlateNo("");
      });
    }
  }
   function onChangeHandler(id,key,value){
     setUsers((users)=>{
      return users.map(user=>{
        return user.id === id?{...user,[key]:value}:user;
      })
     })
   }



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
      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div className='vehiclelist card text-bg-light  mx-5 mt-5'>
            <div className="row  pt-2" >
              <div className="col-1 d-flex justify-content-center"><h5>ID</h5></div>
              <div className="col-2"><h5>Vehicle Type</h5></div>
              <div className="col-2 "><h5>Brand</h5></div>
              <div className='col-2 '><h5>Vehicle Model</h5></div>
              <div className='col-2 '><h5>Plate No</h5></div>
              <div className="col-2"><h5>Action</h5></div>
            </div>

            {vehicles.map((vehicle)=>(
                <div className="row  pt-3 " >
                <div className="col-1 d-flex justify-content-center" >{vehicle.id}</div>
                <div className="col-2 ">{user.vehicleType}</div>
                <div className="col-2 "><EditableText onChange={value => onChangeHandler(user.id,"email",value)} value={vehicle.make}/></div>
                <div className="col-2">{user.phone}</div>
                <div className="col-2 "><EditableText onChange={value=>onChangeHandler(user.id,"website",value)} value={vehicle.vehicleModel}/></div>
                <div className="col-2">
                  <button className='btn btn-primary' onClick={()=>updateUser(vehicle.plateNo)}>Update</button>
                  <button className='btn btn-danger'>Delete</button>
                </div>
              </div>
            ))}
            
        </div>
        
      </div>
      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <form>
            {/* 1st row dropdowns */}
            <div className="row px-5 pt-5">
              <div className="col-2"> 
                <div class="btn-group w-100">
                  <button type="button" class="btn btn-secondary " placeholder="Select">Vehicle Type</button>
                  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu">
                    {users.map((user)=>(
                        <li><a  class="dropdown-item" href="#" onClick={(e)=>setNewVehicleType(user.phone)} value={user.phone}>{user.phone}</a></li>
                    ))}
                    
                    
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
                      {users.map((user)=>(
                        <li><a class="dropdown-item" href="#" onClick={()=>setNewMake(user.website)}>{user.website}</a></li>
                      ))}
                      
                    </ul>
                </div>
                
              </div>
            </div>

            {/* 1st sub row */}

            <div className="row px-5 py-1">
              <div className="col-2">
                  <h6>{newVehicleType}</h6>
              </div>

              <div className="col-2">
                <h6>{newMake}</h6>
              </div>
            </div>
            {/* 2 nd row */}
            <div className="row px-5 py-5">
              <div className="col-2">
                <div className="mb-3">
                  <label for="vehicleModel" className="form-label">Vehicle Model</label>
                  <input onChange={(e) => setNewVehicleModel(e.target.value)} type="text" className="form-control" id="vehicleModel" value={newVehicleModel} placeholder="Enter Your Vehicle Model..."/>
                </div>
              </div>

              <div className="col-2">
                <div className="mb-3">
                  <label for="vehicleModel" className="form-label">Plate No</label>
                  <input onChange={(e)=>setNewPlateNo(e.target.value)} type="text" className="form-control" id="vehicleModel" value={newPlateNo} placeholder="Enter Your Plate No"/>
                </div>
              </div>
            </div>

            <div className="row px-5 py-5">
              <div className="col-4 d-flex justify-content-end">
                <button onClick={addNewVehicle} type="button" class="btn btn-primary">ADD</button>
              </div>
            </div>

            
            
        </form>
        
        
          
      </div>
              
    </div>
       
        
    </div>
  )
}
