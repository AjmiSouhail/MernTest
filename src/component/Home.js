import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
function Home () {
  const [employe,setEmploye] = useState([]);
  useEffect(()=>{
    getEmploye();
  },[])
  const getEmploye = async () =>{
    let result = await  fetch ("http://localhost:8002/employe")
    result = await result.json();
    setEmploye(result);
  }
  const deletEmp = async (id)=>{
    let result = await  fetch (`http://localhost:8002/delete/${id}`,
   { method : "Delete"
  })
  result = await result.json(); 
  if(result) {
    alert("delected")
    getEmploye();

  }
  }
  return (
<div>
  <h1 className=" bg-white text-center text-primary py-5 " >Liste  Employe</h1>
  <div className='container'>

  <a href="/ajout"><button className="btn btn-sm  btn-success" ><i class="fas fa-edit"></i> Ajouter</button></a>

  <table className='container'>
    <tr className='text-primary '>
      <th className="pb-2"></th>
      <th className="pb-2" >Num</th>
      <th className="pb-2">First Name</th>
      <th className="pb-2">Last Name</th>
      <th className="pb-2">Email</th>
      <th className="pb-2">Contact Number</th>
      <th className="pb-2">dob</th>
      <th className="pb-2">Action</th>
    </tr>      {employe.map((item,index)=>

<tr key={item._id} >
 < td className="pb-2"> <Link to={"/detail/"+item._id}class="btn btn-outline-primary d-inline-block" ><i class="fas fa-info-circle "></i> </Link></td>
    <td className="pb-2">
{item.id} </td>
    <td className="pb-2">{item.firstName}</td>
    <td className="pb-2">{item.lastName}</td>
    <td className="pb-2">{item.email}</td>
    <td className="pb-2">{item.contactNumber}</td>
    <td className="pb-2">{item.dob}</td>
    <td className="pb-2">
    <Link to={"/edit/"+item._id}class="btn btn-sm btn-warning d-inline-block" ><i class="fas fa-edit"></i> Modifier</Link>
<button class="btn btn-sm btn-danger d-inline-block"  onClick={()=>deletEmp(item._id)}><i class="fas fa-trash-alt"></i> Supprimer</button>
  </td>
    </tr> 
    )}
    </table>
    </div></div>
  )}
  export default  Home;