import React  , { useState } from 'react'
function  CreatePage() {

const [id,setId] = useState();
const [firstName,setFirstName] = useState("");
const [lastName,setLastName] = useState("saisie  name");
const [email,setEmail] = useState("");
const [contactNumber,setContactNumber] = useState();
const [dob,setDob] = useState("");
 const onSubmit= async ()=>{
    let result = await fetch("http://localhost:8002/ajouter", {
        method : "post", 
        body  : JSON.stringify({id,firstName,lastName,email,contactNumber,dob}),
        headers : { "Content-type" : "application/json"}
    });
    console.log(JSON.stringify({id,firstName,lastName,email,contactNumber,dob}))
    console.log(result)
  setId()
  setFirstName("")
  setLastName("")
  setEmail("")
  setContactNumber()
  setDob("")

}

return (
  <div className=' container'>
  <h1 className="  bg-white text-center text-primary py-3  " >Ajouter  Employe</h1>
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
<input  type="text" className='form-control my-2' name="contactNumber" placeholder='entrer Contact Number '
value={contactNumber} onChange={(e)=>{setContactNumber(e.target.value)}} />
<label className='text-primary'>Dob</label>
<input type="text" className='form-control my-2' name="dob" placeholder='entrer Dob'
value={dob} onChange={(e)=>{setDob(e.target.value)}} />
<button  type="submit" className="btn btn-warning" onClick={()=>{onSubmit()}}>Ajouter </button>
</div>
    )
}

export default CreatePage