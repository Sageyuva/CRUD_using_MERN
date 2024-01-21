import React, { useEffect, useState } from 'react'
import "../styles/as.css"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'



const EditScreen = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [age, setage] = useState()

    const {id} = useParams();
    const navi = useNavigate()
   

    const updateUser = () => {
      axios.post("http://localhost:3001/updateuser/"+id , {name,email,age})
      .catch(err => console.log(err))
      alert("User Updated")
      navi("/")
    }


   useEffect(() => {
  try {
    axios.get("http://localhost:3001/getuser/"+id)
    .then(results => {
      setname(results.data.name);
     setemail(results.data.email);
     setage(results.data.age)
    })
    .catch(err => console.log(err))
  } catch (error) {
    alert("something is wrong")
  }
   }, [])
   
   

  return (
    <>
      <div className="main">
        <form  onSubmit={updateUser} className="formmain">
          <h3>Update User</h3>
          <input className='inn' type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter Name'/>    
          <input className='inn' type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter e-mail'/>
          <input className='inn' type="number" value={age} onChange={(e) => setage(e.target.value)} placeholder='Enter Age'/>
          <button className="btnn" type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default EditScreen;
