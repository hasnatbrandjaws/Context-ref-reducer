import React, { use, useEffect, useState } from "react";

const Login = () => {
  const [registereddata, setRegistereddata] = useState([]);

  useEffect(() => {
    setRegistereddata(JSON.parse(localStorage.getItem("data")) || []);
  }, []);

  console.log(registereddata, "registered");

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const getvalue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const loginfeature = () => {
    if (value.email.trim() !== "" && value.password.trim() !== "") {
      const loginsuccess = registereddata.find(
        (item, i) =>
          item.email.trim().toLowerCase() === value.email &&
          item.password.trim().toLowerCase() === value.password
      );
      if (loginsuccess) {
        alert("Login Successfull");
        localStorage.setItem("isloggedin", JSON.stringify(true));
        window.location.href = "/";
        setValue({
          email: "",
          password: "",
        });
      }
    } else {
      alert("Please Enter Value");
    }
  };

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
        type="text"
        placeholder="****"
        onChange={getvalue}
        name="password"
        value={value.password}
      />
      <button onClick={loginfeature}>Login</button>
    </div>
  );
};

export default Login;
