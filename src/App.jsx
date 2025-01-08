import { useState } from 'react'
import Lbar from './components/lbar/lbar.jsx'
import './App.css'
import Dash from './components/dash/dash.jsx'
function App() {
  

  return (
    <>
    <div className='flex flex-row justify-start w-[100vw]'>
      <Lbar/> 
      <Dash />
      </div>
    </>
  )
}

export default App
