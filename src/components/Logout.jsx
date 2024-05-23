import React, { useState } from 'react'

const Logout = () => {
  const [user, setUser] = useState("");
  const [ email, setEmail]=useState("");
  const [password,setPassword] =useState("");

    const handleLogOut = () =>{
        setUser({});
        setEmail("");
        setPassword("");
        localStorage.clear();
    }
  return (
    <div>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default Logout
