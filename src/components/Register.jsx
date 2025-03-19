import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [arry, setArry] = useState([]);

  const getvalue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const Submission = () => {
    setArry([...arry, value]);
    setValue({
      email:"",
      password:"",
    })
    alert("Regsitration Successful")
  };
  console.log(arry,"array");
  
useEffect(() => {
  localStorage.setItem("data" , JSON.stringify(arry))
}, [arry])

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Email"
        onChange={getvalue}
        name="email"
        value={value.email}
      />
      <input
        type="password"
        placeholder="****"
        onChange={getvalue}
        name="password"
        value={value.password}
      />
      <button onClick={Submission}>Regsiter</button>
      <Link to="/login">
      Go to Login
      </Link>
    </div>
  );
};

export default Register;
