import React,{useState,useEffect,useContext} from 'react'
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';
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
import Allbooking from './allbooking';
import Insert from './insert';
import Employee from './employee';

const Admin = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const [toggle,setToggle] = useState(1)
  const [data, setData] = useState([]);
  const {dispatch} = useContext(AuthContext)


  const toggleTab =(index)=>{
    setToggle(index)
  }

  const logout =()=>{
    dispatch({type:"LOGOUT"})
    navigate('/')
  }

  useEffect(() => {
    const getUsers = async () => {
      const id = localStorage.getItem("id")
      // console.log(id)
      
      const docRef = doc(db, "airlines", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data())
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        
      }
    };

    getUsers();
    
  }, []);

  return (
  <div>
    <div className="navbar  bg-neutral text-neutral-content">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">{data.title}</a>
  </div>
  <div className="navbar-end">
    <a className="btn" onClick={logout}>Logout</a>
  </div>
</div>
    <div className="tabs">
      <a className={toggle===1? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted"} onClick={()=>{toggleTab(1)}}>All Bookings</a> 
      <a className={toggle===2? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted"} onClick={()=>{toggleTab(2)}}>Enter Booking</a> 
      <a className={toggle===3? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted"} onClick={()=>{toggleTab(3)}}>Employee data</a>
    </div>
    <div>
      {toggle==1&&<Allbooking/>}
    {toggle==2&&<Insert/>}
    {toggle==3&&<Employee/>}
    </div>
  </div>
  )
}

export default Admin


