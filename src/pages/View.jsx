import React,  { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import LoadingSpinner from '../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { allUsers } from '../services/AllApi';
import { BASE_URL } from '../services/baseUrl';


function View() {

  const[showspin,setshowspin]=useState(true)
  const[user,setUser]=useState({})

  const {id}=useParams()
 console.log(id);

  


  useEffect(() => {

    getUser()

    setTimeout(()=>{

      setshowspin(false)

    },2000);
   
  }, [])


  
//  api call for gpettingp singple user details

 const getUser =async()=>{


const {data}=await allUsers("")
  // console.log(data);

//  console.log(data.find(item=>item._id===id));
 setUser(data.find(item=>item._id===id))

 }
 console.log(user);


  return (
    <>
    {
      showspin?
      <LoadingSpinner />:
        <div className='container' style={{ height: "80vh" }}>
  
         { 

         user?
         
         <Card className='shadow col=lg-6 ms-auto mt-5 p-3'>
            {/* img */}
            <div className='text-center mt-5'>
  
  
              <img style={{ width: "70px", height: "70px", borderRadius: "50%" }} src={`${BASE_URL}/uploads/${user.profile}`} alt="" />
  
  
  
            </div>
  
            {/* content */}
  
            <div className='text-center'> <br />
              <h3>{user.fname} {user.lname}</h3> <br />
              <h5>Email : {user.email}</h5>
              <h5>Mobile : {user.mobile}</h5>
              <h5>Gender :{user.gender}</h5>
  
              <h5>Status : {user.status}</h5>
  
              <h5>Location : {user.location}</h5>
  
  
            </div>
  
  
  
  
          </Card>:""
          
          }
        </div>
}
    </>
  )
}

export default View