import React , {useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
function Edit() {
    const [id,setId] = useState(0);
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [contactNumber,setContactNumber] = useState(0);
    const [dob,setDob] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const getEmployeDetail =async ()=> {
        let item =   await  fetch (`http://localhost:8002/employeModifier/${params.id}`)
          item = await item.json();
          setId(item.id)
          setFirstName(item.firstName)
          setLastName(item.lastName)
          setEmail(item.email);
          setContactNumber(item.contactNumber)
          setDob(item.dob)
      }
    useEffect(() =>{
        getEmployeDetail();        
    },[])
    const onSubmit= async ()=>{
        await  fetch (`http://localhost:8002/modifier/${params.id}`,{
        method : "post", 
            body  : JSON.stringify({id,firstName,lastName,email,contactNumber,dob}),
            headers : { "Content-type" : "application/json"}
        });
        navigate('/employe')
}
  return (
    <div className=' container'>
<h1 className="  bg-white text-center text-primary py-3 " >Modifier  Employe</h1>
<label className='text-primary'>ID Employe </label>
<input type="text" className='form-control my-2'name="id" placeholder='entrer ID' 
value={id} onChange={(e)=>{setId(e.target.value)}} />
<label className='text-primary'>First Name</label>
<input type="text" className='form-control my-2' name="firstName" placeholder='entrer First Name'
value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
<label className='text-primary'>Last Name</label>
<input type="text" placeholder='entrer Last Name' className='form-control my-2' name="lastName"
value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
<label className='text-primary'>Email</label>
<input  type="text" className='form-control my-2' name="email" placeholder='entrer Email'
value={email} onChange={(e)=>{setEmail(e.target.value)}} />
<label className='text-primary'>Contact Number </label>
<input  type="text" className='form-control my-2' name="contactNumber" placeholder='entrer Contact Number'
value={contactNumber} onChange={(e)=>{setContactNumber(e.target.value)}} />
<label className='text-primary'>Dob</label>
<input type="text" className='form-control my-2' name="dob" placeholder='entrer Dob'
value={"4454"} onChange= {(e)=>{setDob(e.target.value)}} />
<button  type="submit" className="btn btn-warning" onClick={()=>{onSubmit()}}>Modifier </button>
</div>    )
}

export default Edit;