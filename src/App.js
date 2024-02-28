import React from 'react';
// import Navbar from './Component/Navbar'
// import Home from'./Pages/Home'
// import Login from'./Pages/Login'
// import Signup from './Pages/SignUp'
// import Dashboard from './Pages/Dashboard'
// import {Route,Routes} from'react-router-dom'
import {useState} from 'react'


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

    

  return(
    <div className="App">
      {/* pahle hmara navbar aayega */}
      {/* <Navbar isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/> */}
      {/* navbar ke baad hmare sabhi routes aayenge */}
{/* 
      <Routes>
        <Route path="/"  element={<Home/>}/>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/> 

      </Routes>
       */}
       Hy
      </div>
  );
}

export default App;
