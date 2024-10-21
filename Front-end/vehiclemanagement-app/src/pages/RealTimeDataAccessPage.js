import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RealTimeDataAccessPage() {
    const navigate = useNavigate();
    const [companyId , setCompanyId] = useState('');
    const [vehicleData , setVehicleData] = useState([]); 
    const [vehicleId, setVehicleId] = useState('');
    const [vehicleBrand , setVehicleBrand] = useState('');
    const [plateNo,setPlateNo] = useState('');
    const [selectedVehicleId,setSelectedVehicleId] = useState('');
    useEffect(()=>{
        const getVehicleData = async () =>{
            try{
                const CompanyId =localStorage.getItem('companyId');
                setCompanyId(CompanyId);

                const responseVehicleData = await fetch (`https://localhost:7096/api/Devicedata/GetVehicleIdAndName?companyId=${CompanyId}`);
                if(!responseVehicleData.ok){
                    throw new Error(`Http erro! status:${responseVehicleData.status}`);

                }
                const data = await responseVehicleData.json();
                setVehicleData(data);
                setVehicleId(data.vehicle_id);
                setVehicleBrand(data.brand);
                setPlateNo(data.plate_no);





            }
            catch(err){
                console.error('Error Fetching Vehicle Data:',err);
            
            }
        }
        getVehicleData();
    },[])

    function handleOk (){
        const checkVehicleData = async () =>{

            const CompanyId = localStorage.getItem('companyId')
            try{
                const responseVehicleData = await fetch(`https://localhost:7096/api/Devicedata/CheckVehicleData?companyId=${CompanyId}&vehicle_id=${selectedVehicleId}`,{
                   method:"POST",
                   headers:{
                    "Content-Type":"application/json"
                   },

                });

                if(!responseVehicleData.ok){
                    alert("Check your Vehicle Id");
                    throw new Error(`Http error! Status:${responseVehicleData.status} `);
                    
                }
                
                    const data = await responseVehicleData.json();
                    console.log(data);
                    navigate(`/RealTimeData/${selectedVehicleId}`);
            
               
            }
            catch(err){
                console.error('Error',err);
            }
        }
        checkVehicleData();
    }
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '75vh' }}>
      <div className='col-6'>
        <div className='card '>
            <div className='card-header'>
                <h4>Choose Your Vehicle</h4>
            </div>
          
          <div className='card-body'>
            <div className='row'>
                <div className='col-10'>
                    <select className='form-control' id="vehicleIdInput" name="vehicleIdInput" onChange={(e)=>setSelectedVehicleId(e.target.value)}>
                        <option disabled-selected>Select Vehicle</option>
                        {vehicleData.map((data)=>(
                            <option key={data.vehicle_id}>{data.vehicle_id}</option>
                        ))}
                        
                    </select>
                </div>
                <div className='col'>
                    <button className='btn btn-success w-75'onClick={handleOk}>Ok</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
