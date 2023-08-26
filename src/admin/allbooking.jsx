import React, { useEffect,useState } from 'react'
import { db } from "../firebase";
import {AuthContext} from '../authcontext'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc
} from "firebase/firestore";
const Allbooking = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        const getUsers = async () => {
          const id = localStorage.getItem("id")       

        let list = []
        const querySnapshot = await getDocs(collection(db, "airlines", id,"bookings"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  list.push({ Name: doc.id,...doc.data()});
  console.log(doc.id, " => ", doc.data());
});
setData(list)
        };
        getUsers();  
      }, []);

  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Flight No.</th>
        <th>From</th>
        <th>To</th>
        <th>PNR</th>
      </tr>
    </thead>
    <tbody>
        {data.map((d)=>(
            <tr key={d.id}>
            <th>{d.id}</th>
            <td>{d.name}</td>
            <td>{d.flightNo}</td>
            <td>{d.from}</td>
            <td>{d.to}</td>
            <td>{d.pnr}</td>
          </tr>
        ))}

            {/* <tr>
            <th>1</th>
            <td>{data.Name}</td>
            <td>{data.FLight}</td>
            <td>{data.From}</td>
            <td>{data.To}</td>
            <td>{data.PNR}</td>
          </tr> */}
        
      
    </tbody> 
  </table>
</div>
    </div>
  )
}

export default Allbooking