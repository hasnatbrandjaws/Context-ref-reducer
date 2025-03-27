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
      email: "",
      password: "",
    });
    alert("Regsitration Successful");
  };
  console.log(arry, "array");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arry));
  }, [arry]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Register
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
          onClick={Submission}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Register
        </button>
        <Link
          to="/login"
          className="block text-center text-blue-500 hover:underline mt-4"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
