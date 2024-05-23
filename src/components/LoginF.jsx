import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import userIcon from "../assets/images/user.png";
import axios from "axios";
import Footer from "./Footer";

const LoginF = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
 const [user, setUser] = useState();
 const users = {
  email: email,
  password: password,
 }
// }
  useEffect(()=>{
  const loggedInUser = localStorage.getItem("user");
  if(loggedInUser){
    const foundUser = JSON.parse(loggedInUser);
    setUser(foundUser); 

  }},[]);
//  const fetchData = async() =>{
//   const token =localStorage.getItem('token',JSON.stringify(token));
//   console.log(token);
//   try{
//     const response = await fetch('https://tour-booking-tu7f.onrender.com/api/v1/auth/login',{
//       headers:{
//         'Authorization':`Bearer${token}`,
//       },
//     });
//     const data =await response.json();
//     if(response.ok){
//       console.log(data);
//     }else{
//       console.error('failed to fetch protected data');
//     }  
//   } catch(error){
//     console.error('An error occurred:', error);
//   }
//  }; 
 const handleSubmit = async e => {
    e.preventDefault();
    const user ={email, password};
    const response = await axios.post("https://tour-booking-tu7f.onrender.com/api/v1/auth/login",
      user
    );
    setUser(response.data);
    
    console.log(user);
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(response.data) ;
    
  };
 if (user) {
  return <div>{user.name} is logged in </div>;
 }
const handleEmailChange=(e)=> {setEmail(e.target.value) 
  users.email=e.target.value;
};
const handlePasswordChange=(e)=> {setPassword(e.target.value)
  users.password=e.target.value;
};

 
    // setLoading(true);
    // setError("");
    // try {
    //   const response = await fetch(
    //     "https://tour-booking-tu7f.onrender.com/api/v1/auth/login",
    //     {
    //       method: "POST",
    //       headers: {
    //         "content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email, password }),
    //     }
    //   );
    //   const data = await response.json();
    //   if (response.ok) {
    //     //store the token(you can also use localstorage)
    //     localStorage.setItem("token", JSON.stringify(data.token));
        
    //     console.log(localStorage.getItem("token",JSON.parse(data.token)));
    //     alert("login sucess");
    //   } else {
    //     setError(data.message || 'login failed');
    //   }
    // } catch (error) {
    //   setError("An error occurred.Please Try again.");
    // } finally {
    //   setLoading(false);
    // }
  

  return (
    <div className="container ">
      <center>
        <div className="row m-5 ">
          <div className="col-md-6  bg-images-login img-fluid"></div>
          <div className="col-md-4 col-sm-4 col-lg-4  col order-first order-m-last order-md-last bg-warning m-3 p-3 rounded ">
            <img className="user-image" src={userIcon} alt="user" />
            <h2 className="text-white mt-3"> Login Page</h2>

            <form
              className="m-3 pt-4 rounded"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                value={email}
                required
                style={{ textAlign: "right" }}
                className="form-control ms-2 me-4 m-3 p-1"
                onChange={handleEmailChange}
                placeholder="enter Email"
              />

              <input
                type="text"
                value={password}
                required
                style={{ textAlign: "right" }}
                className="form-control me-4 ms-2 m-3 p-1 mb-4"
                onChange={handlePasswordChange}
                placeholder="Enter password"
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button
                className="btn btn-dark btn-center m-2"
                type="submit"
                disabled={loading} >
                {loading ? "Loding in..." : "Login"}
              </button>
             
            </form>
            <span className="text-white mt-3">Dont Have An account?</span>
            <h6>Register</h6>
          </div>
        </div>
      </center>
      {/* footer start*/}
      <Footer />
    </div>
  );
};

export default LoginF;
