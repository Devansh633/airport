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
  getDoc,
  onSnapshot,
  query,where
} from "firebase/firestore";

const Hero = () => {

  const [data,setData] = useState([])
  const [destination,setDestination] = useState("")
  const [visible,setVisible] = useState(false)
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {  
    setLoading(true);   
    let list = []
    const colref = collection(db, "airlines", "uxNbjIsQtAh5roTgwVBJxOVnPxy1","bookings");
    const q = query(colref,where("from","==","Banglore"),where("to","==",destination))
onSnapshot(q,(snapshot)=>{
snapshot.docs.forEach((doc)=>{
  setData(data=>[...data,{...doc.data(),id:doc.id}])
})
})
console.log(data)
const colref1 =  collection(db, "airlines", "HxtYMCbCsTUFBWRSprWh3UZrSfp1","bookings");
    const q1 = query(colref1,where("from","==","Banglore"),where("to","==",destination))
onSnapshot(q1,(snapshot)=>{
snapshot.docs.forEach((doc)=>{
  setData(data=>[...data,{...doc.data(),id:doc.id}])
})
})

console.log(list)

setLoading(false);
    };

  const handleClick=(e)=>{
    getUsers()
    setVisible(true)
  }

  useEffect(()=>{
    
    // getUsers()
  },[destination])

  return (
    <div>
    <div className='h-[20rem] bg-gradient-to-b from-[#222222] from-30%  to-[#444444] '>
        <h1 className='text-bold text-white py-[5rem] pl-[6rem] text-[4rem] '>Find your flight</h1>
        <div className=' flex justify-center '>
    <div className="card w-[45rem] bg-[#fff]  text-primary-content drop-shadow-lg">
  <div className="card-body flex flex-wrap">
    <h2 className="card-title text-[#04ADAA]">Destination</h2>
    <input className='w-[20rem] h-[2rem] text-[#04ADAA] border-black border' type='string' placeholder='Destination' onChange={(event) => {setDestination(event.target.value);}}></input>
    <div className="card-actions justify-end">
      <button className="btn mr-20 text-[#04ADAA]" onClick={handleClick}>Find Flights</button>
    </div>
  </div>
  {/* {visible&&<h1 className='text-black font-bold text-[1.8rem] px-6'>Available Flights</h1>}
  {data?data.map((d)=>(
  <div key={d.flightNo} >
  <h1 className='text-black font-bold text-[1.5rem] px-12'>{d.flightNo}</h1>
  </div>
)):<h1 className='text-black font-bold text-[1.5rem] px-12'>No Flights Available</h1>} */}
{loading ? (
      <p className="text-black font-bold text-[1.5rem] px-12">Loading...</p>
    ) : visible ? (
      <div>
        <h1 className="text-black font-bold text-[1.8rem] px-6">Available Flights</h1>
        {data.length > 0 ? (
          data.map((d,index) => {
            console.log(d)
            return (
              <div key={index}>
              <h1 className="text-black font-bold text-[1.5rem] px-12">{d.flightNo}</h1>
            </div>
          )}
        )) : (
          <h1 className="text-black font-bold text-[1.5rem] px-12">No Flights Available</h1>
        )}
      </div>
    ) : null}
            
          
            
</div>
</div>
    </div>
    </div>
  )
}

export default Hero


    
  