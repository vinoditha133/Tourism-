import React, { useEffect, useRef, useState } from "react";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios.js";
import "bootstrap/dist/css/bootstrap.min.css";
import uicon from "../assets/images/user.png";
import Footer from "./Footer.jsx";


const USER_REGEX =/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%].{8,24})$/;
const Register = () => {
 const Register_URL='https://tour-booking-tu7f.onrender.com/api/v1/auth/register'; 
const userRef  =useRef();
const pwdRef  =useRef();
const errRef =useRef();
const [user, setUser] =useState('');
const [validName, setValidName]=useState(false);
const [userFocus, setUserFocus]= useState(false);

const [pwd, setPwd] =useState('');
const [validPwd, setValidPwd] =useState(false);
const [pwdFocus, setPwdFocus] =useState(false);

const [matchPwd, setMatchPwd] = useState('');
const[validMatch, setValidMatch] =useState(false);
const [matchFocus, setMatchFocus] =useState(false);

const[errMsg, setErrMsg] = useState("");
const[success, setSuccess] = useState(false);


 useEffect(()=>{
  userRef.current.focus();

 },[])

 useEffect(()=>{
  const result =USER_REGEX.test(user);
  console.log(result);
  console.log(user);
  setValidName(result);
 }, [user]);

 useEffect(()=>{
  const result =PWD_REGEX.test(pwd);
  console.log(result);
  console.log(pwd);
  setValidPwd(result);
  const match = pwd === matchPwd;
  setValidMatch(match);
 }, [pwd, matchPwd]); 

 useEffect(()=>{
  setErrMsg('');
 }, [user,pwd,matchPwd]);

 
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
    
  // };
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
    
  // };
  // const handleConfirmPasswordChange = (event) => {
  //   setConfirmPassword(event.target.value);
  // };
  const handlePwd = (e) =>{
    setPwd(e.target.value);
  }

  const handleSubmit = async (e) => {
   e.preventDefault();
   const V1=USER_REGEX.test(user);
   const V2=PWD_REGEX.test(pwd);
   if(!V1 || V2){
    setErrMsg("Invalid Entry");
    return;
   }
  //  console.log(user, pwd);
   try{
    const response = await axios.post(Register_URL,
      JSON.stringify({ user, pwd }),
  );
  console.log(response.data);
  const data= await response.data;
  if(response.status === 200){
    localStorage.setItem('token', data.token);
    //assume  the rsponse contains user details
    localStorage.setItem('user', JSON.stringify(data.user));
    setSuccess(true);
    console.log(data.accessToken);
    console.log(JSON.stringify(response));
  }
 
 
}catch(err){
  if(!err?.response){
    setErrMsg("No server response");

  }else if(err.response?.status === 409){
setErrMsg("user Name already registered");
  }else{
    setErrMsg("Registration Failed");
  }
  errRef.current.focus();
}
   
  };

  return (
    <>
    {success ? (
      <section>
        <h1>success!</h1>
        <p><a href="#">sign in</a></p>
      </section>
    ):(
      <div className="container ">
        <center>
          <div className="row m-5 ">
            <div className="col-md-6  bg-images-register img-fluid"></div>
            <div className="col-md-4 col-sm-4 col-lg-4  col order-first order-m-last order-md-last bg-warning m-3 p-3 rounded ">
              <img className="user-image" src={uicon} alt="user" />
              <h2 className="text-white mt-3"> Register</h2>

              <form className="m-3 pt-4 rounded" onSubmit={handleSubmit}>
                <label htmlfor="username" >
                  UserName:<span  className={validName ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} /></span>
                  <span className={validName  || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                  </span>
                </label>
                <input
                id="username"
                ref={userRef}
                  type="email"
                  autocomplete ="off"
                  required
                  value={user}
                  aria-invalid={validName ? 'false' : 'true'}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur ={() =>setUserFocus(false)}
                  className="form-control ms-2 me-4 m-3 p-1"
                  style={{ textAlign: "right" }}
                  onChange={(e) =>setUser(e.target.value)}
                  placeholder="enter email"
                />
                <p id="uidnote" className={userFocus && user && !validName? "instructions":"offscreen"}><FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 charaecters<br/>
                must begin with a letter,<br/> a number,uderscore, hyphens allowed  <br/>
                  
                </p>

<label htmlfor="password" >
                  Password:<span  className={validPwd ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} /></span>
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                  </span>
                </label>

                <input
               type="password"
               id="pwdnote"
                required
                aria-invalid={validMatch ? false : true}
                aria-describedby="confirm_note"
                onFocus={() => setPwdFocus(true)}
                onBlur ={() =>setPwdFocus(false)}
                className="form-control me-4 ms-2 m-3 p-1 mb-4"
                style={{ textAlign: "right" }}
                onChange={(e)=> setPwd(e.target.value)}
                placeholder="enter password"
             />
                 <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} /> 8 to 24 charaecters<br/>
                  must include uppercase and lowercase , a number  and a special charecters<br/>
                  Allowed special charecters:<span aria-label="exclamation mark ">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>
                <label htmlfor="confirm_pwd" >
                 Confirm Password:<span  className={validMatch && matchPwd ? "valid" : "hide" }><FontAwesomeIcon icon={faCheck} /></span>
                 <span className={validMatch || !matchPwd ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
                </label>
                <input
                 type="password"
                 id="confirm_pwd"
                  required
                  aria-invalid={validMatch ? false : true}
                  aria-describedby="confirm_note"
                  onFocus={() => setMatchFocus(true)}
                  onBlur ={() =>setMatchFocus(false)}
                  className="form-control me-4 ms-2 m-3 p-1 mb-4"
                  style={{ textAlign: "right" }}
                  onChange={(e)=> setMatchPwd(e.target.value)}
                  placeholder="enter confirm password"
                />
 <p id="confirm_note" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
  <FontAwesomeIcon icon={faInfoCircle} />Must match the first password input feild
 </p>
     
                <button
                  type="submit"
                  disabled={!validName || !validPwd || !validMatch ? "true" : "false" }
                  className="btn btn-dark btn-center m-2"
                >
                submit
                </button>
                <p ref={errRef} className={ errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
              </form>
              <span className="text-white mt-3">Dont Have An account?</span>
              <h6>Register</h6>
            </div>
          </div>
        </center>
      </div>)}
      {/* footer start*/}
<Footer />
     
    </>
  );
};

export default Register;
