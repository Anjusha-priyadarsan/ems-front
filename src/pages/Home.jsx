import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hometable from '../components/Hometable'
import LoadingSpinner from '../components/LoadingSpinner'
import { registerContext } from './Contextshare'
import Alert from 'react-bootstrap/Alert';
import { allUsers, deleteUser } from '../services/AllApi'




function Home() {

  const[showspin,setshowspin]=useState(true)


  const{registerData,setregisterData}=useContext(registerContext)

  const[allusers,setallUsers]=useState([])

  const[search,setSearch]=useState("")


  useEffect(() => {

    // get all employees at the time of page loading
    getAllEmployees()

    setTimeout(()=>{

      setshowspin(false)

    },2000);
   
  }, [search])


  // function defnition for get all users

  const getAllEmployees=async()=>{
    const response=await allUsers(search)
    console.log(response);
    setallUsers(response.data)

  }
  console.log(allusers);


  // delete employee

  const removeUser=async(id)=>{
    const response=await deleteUser(id)
    console.log(id);

    if(response.status===200){
      getAllEmployees()
    }
    else{
      alert('operation failed !! please try after some time')
    }
  }





  return (
    <>

    {

      registerData&&<Alert variant='success' onClose={()=>setregisterData("")}dismissible>

        {registerData.fname.toUpperCase()} registered  successfully....

      </Alert>



    }

    {
      showspin?
      <LoadingSpinner /> :
      <div className='container'>
  
        <div className='search-all d-flex align-items-center'>
  
          <div className='seacrh d-flex align-items-center mt-5'>
            <span className='fw-bolder fs-5' style={{color:"white"}}>Search  :</span>
            <input type="text" onChange={e=>setSearch(e.target.value)} placeholder='Search by employee name' className='form-control ms-3' style={{width:"450px",height:"50px"}} />
          </div>
  
          <Link className='btn btn-primary ms-auto mt-5 ' to={'/add'}>Add <i class="fa-solid fa-user-plus"></i></Link>
  
  
  
        </div>
  
        <div className='mt-5'> <br />
          <h1 className='fw-bolder text-light' >List of All Employees</h1> <br /> <br />
          <Hometable displayData={allusers} removeuser={removeUser} />
          </div>
  
  
  
      </div>
  
    }
      


    </>
  )
}

export default Home