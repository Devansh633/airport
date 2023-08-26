import React,{useState,useEffect} from 'react'
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

const Employee = () => {

  const [data,setData] = useState([])

    useEffect(() => {
        const getUsers = async () => {
          const id = localStorage.getItem("id")       

        let list = []
        const querySnapshot = await getDocs(collection(db, "airlines", id,"employee"));
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
    <th>Id</th>
    <th>Name</th>
    <th>Job</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Salary</th>
  </tr>
</thead>
<tbody>
    {data.map((d)=>(
        <tr key={d.id}>
        <th>{d.id}</th>
        <td>{d.emid}</td>
        <td>{d.name}</td>
        <td>{d.job}</td>
        <td>{d.age}</td>
        <td>{d.gender}</td>
        <td>{d.salary}</td>
      </tr>
    ))}  
</tbody> 
</table>
</div>
</div>
  )
}

export default Employee