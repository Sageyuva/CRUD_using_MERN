import React, { useEffect, useState } from 'react'
import "../styles/hs.css"
import { Link } from 'react-router-dom'
import axios from "axios"



const HomeScreen = () => {

    const [users, setusers] = useState([]);


    const fetchData = () => {
     axios.get("http://localhost:3001/")
  .then(datas => setusers(datas.data))
  .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteuser/${id}`)
        .catch(err => console.log(err))
        window.location.reload()
    }

    useEffect(() => {
  fetchData()
    }, [])
    
  return (
    <>
        <div className='addbd'>
         <Link to='/adduser'><button className='addb'>Add User</button> </Link>
        </div>
        <div className='tabd'>
        <table className='tabl'>
            <tr>
                <th className='tablr'>Name</th>
                <th className='tablr'>E-Mail</th>
                <th className='tablr'> Age</th>
                <th className='tablr'> Actions</th>
            </tr>
            {/* <tr>
                <td className='tabld'>Yuvaraj</td>
                <td className='tabld'>yuvarajd@gmail.com</td>
                <td className='tabld'> 44</td>
                <td className='tabld'> <button className='addbg'>Edit User</button><button className='addbr'>Remove User</button> </td>
            </tr> */}
            {
                users.map(user=>{
                    return(
                        <>
                        <tr>
                <td className='tabld'>{user.name}</td>
                <td className='tabld'>{user.email}</td>
                <td className='tabld'> {user.age}</td>
                <td className='tabld'>
                <Link to= {`edituser/${user._id}`}> 
                <button className='addbg'>Edit User</button></Link>
                 <button onClick={(e)=> handleDelete(user._id)} className='addbr'>Remove User</button>
                 </td>
            </tr>
                        </>
                    )
                })
            }
        </table>
        </div>
    </>
  )
}

export default HomeScreen