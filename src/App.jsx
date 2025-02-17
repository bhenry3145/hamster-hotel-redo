import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col justify-items-center'>
        <div className='grid grid-cols-7 grid-rows-1 bg-[#000324]'>
          <div>
            <p className='text-white'>Overview</p>
          </div>
          <div>
            <p className='text-white'>Rooms</p>
          </div>
          <div>
            <p className='text-white'>Packages</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default App
