import React from 'react'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (

    <nav className="bg-white px-4 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#04ADAA] text-xl font-semibold lg:ml-[4rem]">Airport Management</div>
        <button onClick={(e)=>{navigate('login')}}  className="bg-[#04ADAA] text-white hover:bg-white hover:text-[#04ADAA] text-sm px-4 py-2 rounded-lg lg:mx-[4rem]">
          Login
        </button>
      </div>
    </nav>
  );
};



export default Header