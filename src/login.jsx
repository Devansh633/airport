import React,{useContext, useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {AuthContext} from './authcontext'

const Login = () => {
  const navigate = useNavigate()
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const {dispatch} = useContext(AuthContext)

  const login = async (e) => {
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      dispatch({type:"LOGIN",payload:user})
      console.log(user);
      navigate('/admin')
    } catch (error) {
      console.log(error.message);
      alert("wrong input")
    }
    window.location.reload(false)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              onChange={(event) => {setLoginEmail(event.target.value);}}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              onChange={(event) => {setLoginPassword(event.target.value);}}
            />
          </div>
          <button
            // type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            onClick={login}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
