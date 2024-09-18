import React from 'react'
import axios from "axios";
import { useState ,useEffect} from 'react';
import Reactcrud from './components/Reactcrud';
import Login from './components/Login';
import Check from './components/check';

export default function App(){

  return(
    <div>
      {/* <Reactcrud/> */}
      <Login/>
      {/* <Check/> */}
    </div>
  )
}

























// export default function App(){
//   const [post, setpost] = useState([]);
  
//   const handlechange=(e)=>{
    
    
//    setpost(document.getElementById("name").value);
    
//    }

//    const handlesubmit=(e)=>{
    
//     axios.post('https://localhost:7145/api/Vehicle/AddVehicle' ,post)
//     .then((reponse)=>{
//       console.log(reponse);
//     })
//     console.log(post)

    
//    }
  
//   // console.log(data)
  
//   return(

//    <div>
//     <Reactcrud/>
//         <form onSubmit={handlesubmit}>
//           <input onChange={handlechange} type="text" id="name" ></input>
//           <button onClick={handlesubmit} >submit</button>
//           {/* <h1>{post}</h1> */}
//         </form>
//    </div>
//   )
// }



// export default function App() {

//   const [post,setPost] = useState([]);

//   const [brands, setbrands ] =useState ([]);
  
//   useEffect(()=>{
//     axios.get('https://localhost:7145/api/Vehicle/getitems')
//     .then(response=>{
//       console.log(response.data)
      
      
//       setPost(response.data)
      
     
      
      
//       })
//       .catch(err=>{
//         console.log(err);
//       });

//       axios.get('https://localhost:7145/api/Vehicle/getbrands')
//       .then(response=>{
//         console.log(response.data)
        
        
//         setbrands(response.data)
        
       
        
        
//         })
//         .catch(err=>{
//           console.log(err);
//         });


//   },[]); 
  
  
//   return (
//     <div>
//       <p>{post}</p>
//         <div class="dropdown m-5">

//             <a class="btn btn-success dropdown-toggle mt-6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Vehicle Type
//             </a>

//             <ul class="dropdown-menu">
//               {post.map((item)=>(
//                   <li><a class="dropdown-item" href="#" >{item}</a></li>
//               ))}
              
              
//             </ul>
//         </div>

//         <div class="dropdown m-5">

//             <a class="btn btn-success dropdown-toggle mt-6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Vehicle Type
//             </a>

//             <ul class="dropdown-menu">
//               {brands.map((item)=>(
//                   <li><a class="dropdown-item" href="#" >{item}</a></li>
//               ))}
              
              
//             </ul>
//         </div>

//         <div class="mb-3 w-50">
//           <label for="plateno" class="form-label">Email address</label>
//           <input type="text" class="form-control" id="plateno" placeholder="Enter your plateNo"/>
//         </div>

//     </div>
   
//   )
// }


