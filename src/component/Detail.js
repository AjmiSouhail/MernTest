import React, { useState ,useEffect } from 'react'
import { useNavigate, useParams ,Link} from 'react-router-dom';
function Detail() {
    const [id,setId] = useState();
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [contactNumber,setContactNumber] = useState(0);
    const [dob,setDob] = useState("");
    const params = useParams();
    const navigate = useNavigate();
        const getEmployeDetail =async ()=> 
    {
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

    const retour =()=>{
        navigate('/employe')

    }
  return (
    <div>
    <h1 className=" bg-white text-center text-primary py-5 h1" >Detail  Employe</h1>
    <div className='container w-50 p-3'>
    <ul className="list-group">
    <li className="list-group-item"><span className='text-black h4 p-3'>ID Employe  :</span>{id}</li>
    <li className="list-group-item"><span className='text-black h4 p-3'>First Name  :</span>{firstName}</li>
    <li className="list-group-item"><span className='text-black h4 p-3'>Last Name    :</span>{lastName}</li>
    <li className="list-group-item"><span className='text-black h4 p-3'>E-mail       :</span>{email}</li>
    <li className="list-group-item"><span className='text-black h4 p-3'>Contact      :</span>{contactNumber}</li>
    <li className="list-group-item"><span className='text-black h4 p-3'>Dob Employe  :</span>{dob}</li>
    </ul>
    <div className=' justify-content-center '>
    <Link to={"/edit/"+params.id}class="btn btn-sm btn-warning d-inline-block mt-3 px-3" ><i class="fas fa-edit"></i> Modifier</Link>
    <button class="btn btn-sm btn-danger  d-inline-block mt-3"  onClick={()=>retour()}><i class="fas fa-undo"></i> Retour</button>
    </div>
    </div>

    </div>
  )
}

export default Detail