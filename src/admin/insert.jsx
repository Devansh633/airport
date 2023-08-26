import React, { useState,useEffect } from 'react';
import { collection, addDoc,setDoc,doc} from "firebase/firestore"; 
import { db } from "../firebase";

const Insert= () => {


    const v = localStorage.getItem("count")
    const c = parseInt(v)+1
    console.log(c)
  const [formData, setFormData] = useState({
    name: '',
    flightNo: '',
    from: '',
    to: '',
    pnr: '',
    id: c-1
  });
  const id = localStorage.getItem("id")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
  };

  const handleSubmit = (e) => {
    const chan = ()=>{
        localStorage.setItem("count",(''+c))
    alert("inserted")
    }
    e.preventDefault();
    console.log(formData); // You can replace this with your actual form submission logic
    const docRef =  setDoc(doc(db, "airlines",id,"bookings",v),formData);
    chan()
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="flightNo" className="block text-sm font-medium text-gray-700">
            Flight No.
          </label>
          <input
            type="text"
            id="flightNo"
            name="flightNo"
            value={formData.flightNo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="from" className="block text-sm font-medium text-gray-700">
            From
          </label>
          <input
            type="text"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">
            To
          </label>
          <input
            type="text"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pnr" className="block text-sm font-medium text-gray-700">
            PNR
          </label>
          <input
            type="number"
            id="pnr"
            name="pnr"
            value={formData.pnr}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Insert;
