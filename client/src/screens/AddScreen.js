import React, { useState } from 'react'
import "../styles/as.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const AddScreen = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState();
  const navi = useNavigate();

  const addUser = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/adduser" , {name , email , age})
    .catch(err => console.log(err))
    alert("user added sucessfully")
    navi("/")
  }

  return (
<>
  
  <div className="main">
  <form onSubmit={addUser} className="formmain">
  <h3>Add New User</h3>
  <input className='inn' type="text" value={name} onChange={(e)=> setname(e.target.value)} placeholder='Enter Name'/>    
  <input className='inn' type="text"  value={email} onChange={(e)=> setemail(e.target.value)} placeholder='Enter e-mail'/>
  <input className='inn' type="number" value={age} onChange={(e)=> setage(e.target.value)} placeholder='Enter Age'/>
  <button className="btnn" type='submit'>Submit</button>
  </form>
  </div>
</>
  )
}

export default AddScreen