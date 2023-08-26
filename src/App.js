import React, { useContext } from 'react';
import {Routes,Route, Navigate} from 'react-router-dom' 
import Home from './home'
import Admin from './admin'
import Login from './login'
import { AuthContext } from './authcontext';

function App() {
  const {currentUser} = useContext(AuthContext)
  const RequireAuth =({children})=>{
    return currentUser?children:<Navigate to='/login'/>;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<RequireAuth><Admin/></RequireAuth>} />
        </Routes>
    </div>
  );
}

export default App;
