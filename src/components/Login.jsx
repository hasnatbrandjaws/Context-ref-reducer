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
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Login
        </h1>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={getvalue}
          name="email"
          value={value.email}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={getvalue}
          name="password"
          value={value.password}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={loginfeature}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
