import React, { useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../assets/images/user.png";
import { Link } from 'react-router-dom';
import { IoLocation } from 'react-icons/io5';
import { FaPhoneSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { HiMiniHomeModern } from 'react-icons/hi2';
const Register = () => {
const dataU= useRef(null);
const dataP= useRef(null);
const dataCP= useRef(null);
const [userName,setUserName]=useState("");
const [password, setPassword]=useState("");
const [confirmPassword, setConfirmPassword]=useState("");

const obj={
  userName: "",
  password: "",
  confirmPassword:"",
}



const handleChgU = ()=>{
console.log(dataU.current.value);

obj.userName=dataU.current.value;
    
}

const handleChgP= ()=>{
    console.log(dataP.current.value);
    console.log("getting current value");
    obj.password=dataP.current.value;
}
const handleChgCP= ()=>{
    console.log(dataCP.current.value);
  
    obj.confirmPassword=dataCP.current.value;
}
const handleSubmit=(e) =>{
  
  if(obj.userName!=="" && obj.password!=="" && obj.confirmPassword!=="")
  { if(obj.password === obj.confirmPassword){ 
    alert("Rigistered successfully");
      localStorage.setItem("userN",JSON.stringify(obj.userName));
      localStorage.setItem("userP",JSON.stringify(obj.password));
    }
      
  }else{
      alert("please enter username and password");
  }
  }

  return (
    <>
      <div className='container '>
       <center>
      <div className="row m-5 ">
      <div className="col-md-6  bg-images-register img-fluid"></div>
<div className="col-md-4 col-sm-4 col-lg-4  col order-first order-m-last order-md-last bg-warning m-3 p-3 rounded ">
<img  className="user-image" src={user} alt='user'/>
<h2 className="text-white mt-3"> Register</h2>

<form className="m-3 pt-4 rounded" onSubmit={()=>handleSubmit()}>
<input type="text" className="form-control ms-2 me-4 m-3 p-1" onChange={()=>handleChgU()} ref={dataU}/>
<input type="text" className="form-control me-4 ms-2 m-3 p-1 mb-4" onChange={()=>handleChgP()} ref={dataP}/>
<input type="text" className="form-control me-4 ms-2 m-3 p-1 mb-4" onChange={()=>handleChgCP()} ref={dataCP}/>
<button className="btn btn-dark btn-center m-2">submit</button>
                </form>
                <span className="text-white mt-3">Dont Have An account?</span>
                <h6>Register</h6>
</div>
</div>
</center>
    </div>
     {/* footer start*/}

  <div className="row">
    <div className="col-lg-3 text-align-center p-5 my-5">

      <h2 className="fw-normal"><HiMiniHomeModern />
      </h2> 
      <p className="text-dark">Some representative  content .</p>

    </div>
  
    <div class="col-lg-3 text-align-center p-5 my-5">

      <h2 class="fw-normal">Discover</h2>
      <ul class="listing">
        <li><Link to="/home" class="card-link text-dark text-decoration-none" target="_blank">Home</Link></li>

        <li><Link to="/home"class="card-link text-dark text-decoration-none list-style-none" target="_blank"> 
        About</Link></li>
        <li><Link to="/tours" class="card-link text-dark text-decoration-none list-style-none" target="_blank">Man
            Tour</Link></li>
       
      </ul>
</div>
      <div className="col-lg-3 text-align-center p-5 my-5">

<h2 className="fw-normal">Quick Link</h2>
<ul className="list-style-none">
  <li><Link to="/" class="card-link text-dark text-decoration-none list-style-none"
      target="_blank">Gallery</Link></li>
  <li><Link to="/login" class="card-link text-dark text-decoration-none list-style-none"
      target="_blank">Login</Link></li>
  <li><Link to="register" class="card-link text-dark text-decoration-none list-style-none"
      target="_blank">Register</Link></li>
  
</ul>

</div>

    
    <div class="col-lg-3 text-align-center p-5 my-5">

      <h2 class="fw-normal">Contact</h2>
      <ul class="list-style-none">
        <li className='card-style1'><IoLocation /><a href="#" className="card-link text-dark text-decoration-none" target="_blank">
            Address: Hethur, Sakleshpura, Hassan</a></li>
        <li className='card-style2'><FaPhoneSquare/><a href="#" className="card-link text-dark text-decoration-none " target="_blank">
            Phone: +91 9380850133</a></li>
         <li className='card-style3'><HiOutlineMail /><a href="#" className="card-link text-dark text-decoration-none " target="_blank">email: vinodithahm1997@gmail.com</a></li>
        {/*<li><a href="#" class="card-link text-secondary text-decoration-none list-style-none" target="_blank">Rubber
            made Toy</a></li> */}

      </ul>
    </div>

  </div>
    </>
  )
}

export default Register
