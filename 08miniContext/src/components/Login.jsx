import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}= useContext(UserContext);

  const handleSubmit = (e) => {
    //by deafult when submit, value url ke through kahi chali jati hai
    //to through post method, so prevent that
    e.preventDefault(); 
    setUser({ username, password });
    //reset input fields
    setUserName("");
    setPassword("");
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
      />
      {" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
