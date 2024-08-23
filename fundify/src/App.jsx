import React from "react";
import './App.css'
import Navbar from './component/navbar'
import Landing from './landingPage'
function App() {
  return (
    <>
    <div className='bg-white'>
      <Navbar></Navbar>
     <Landing/>
     </div>
    </>
  )
}

export default App
