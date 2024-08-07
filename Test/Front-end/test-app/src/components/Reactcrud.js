import React, { useState ,useEffect} from 'react'
import {Button,EditableText, InputGroup,Toaster} from '@blueprintjs/core';


 const AppToaster = Toaster.create({
    position:"top"
 });
export default function Reactcrud() {
    const [users,setUsers] = useState([]);
    const [newName,setNewName] = useState("");
    const [newEmail,setNewEmail] = useState("");
    const [newWebsite,setNewWebsite] = useState("");

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((json)=>setUsers(json))
        
    },[])

    function addUser(){
        const name = newName.trim();
        const email = newEmail.trim();
        const website = newWebsite.trim();

        if (name && email && website){
            fetch('https://jsonplaceholder.typicode.com/users',
                {
                    method:"POST",
                    body:JSON.stringify({
                        name,
                        email,
                        website
                    }),
                    headers:{
                        "content-Type":"application/json; charset=UTF-8"
                    },

                }
            ).then((response)=> response.json())
            .then(data =>{
                setUsers([...users,data]);
                AppToaster.show({
                    message:"User Added Successfuly",
                    intent:'success',
                    timeout:3000
                });
                setNewName("");
                setNewEmail("");
                setNewWebsite("");
            });
        }
    }

  return (
    <div className='react'>
      <table className='bp4-html-table modifier'>
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
        </thead>
        <tbody>
            {users.map((user) =>(
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td><EditableText value={user.email}/></td>
                <td><EditableText value={user.email}/></td>
                <td>
                    <Button intent='primary'>Edit </Button>
                    <Button intent='danger'>Delete</Button>
                </td>
            </tr>
            ))}
            
        </tbody>
        <tfoot>
            <tr>
                <td>
                    <InputGroup value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder='Enter Name ...'/>
                </td>

                <td>
                    <InputGroup value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder='Enter Email ...'/>
                </td>

                <td>
                    <InputGroup value={newWebsite}
                    onChange={(e) => setNewWebsite(e.target.value)}
                    placeholder='Enter Website ...'/>
                </td>

                <td>
                    <Button intent='success' onClick={addUser}> Add User</Button>
                </td>
            </tr>
        </tfoot>
      </table>
      <h1></h1>
    </div>
  )
}
