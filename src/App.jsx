import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col justify-items-center'>

        <div className='grid grid-cols-7 grid-rows-1 bg-[#000324] text-center justify-items-center place-items-end px-[16rem] text-[20px]'>
          <div>
            <p className='p-2 text-white'>Overview</p>
          </div>
          <div>
            <p className='p-2 text-white'>Rooms</p>
          </div>
          <div>
            <p className='p-2 text-white'>Packages</p>
          </div>
          <div>
            <img className='p-2' src="../assets/Logo.png" alt="Logo" />
          </div>
          <div>
            <p className='p-2 text-white'>Amenities</p>
          </div>
          <div>
            <p className='m-2 text-white '>Contact</p>
          </div>
          <div>
            <p className='p-1 m-1 text-white border-2 border-white'>Reserve</p>
          </div>
        </div>

        <div>
          <div className='relative'>
            <img className='w-full h-[500px]' src="../assets/header.jpg" alt="Header" />
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='bg-[#000324] opacity-80 p-4 flex flex-col items-center justify-center w-[945px] h-[232px]'>
                <h1 className='text-white text-[45px]'>Run on the wheel of luxury</h1>
                <h2 className='text-white text-[16px]'>Explore everything the beach has to offer in our relaxing resort.</h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='grid grid-cols-5 grid-rows-2 mx-[12rem] my-16 gap-2'>
            <div className='col-start-1 col-end-3 row-start-1 row-end-6'>
              <img src="../assets/hamsterhomejpg.jpg" alt="Hamster Home" />
            </div>
            
            
            <div className='col-span-3 col-start-3 row-start-1'>
              <h1 className='p-2 text-[35px]'>Welcome to a hamster's paradise</h1>
              <h1 className='p-2'>Nestled in the heart of Cavia California, La Petite Maison is a luxury hotel designed for the small mammal with extravagance in mind. Escape to the warm comforts of stunning rooms, a relaxing spa, and a pool with a beach side view.</h1>
              <h1 className='p-2'>
                Inspired by the warm beauty of the California Coast, we invite you to enjoy the rich accommodations along with our unmatched luxury. Discover the satisfaction of indulging in our quality rooms, and thank you for choosing La Petite Maison.
              </h1>
            </div>
            

            <div className='flex items-center justify-center col-start-3 row-start-2 p-4'>
              <img src="../assets/awardfinest.png" alt="Award #1" />
            </div>

            <div className='flex items-center justify-center col-start-4 p-4'>
              <img src="../assets/awardsatisfaction.png" alt="Award #2" />
            </div>

            <div className='flex items-center justify-center col-start-5 p-4'>
              <img src="../assets/awardgenuine.png" alt="Award #3" />
            </div>

          </div>
        </div>

        <div>
          <div>
            <img className='h-[738px] w-full' src="../assets/bg2.jpg" alt="Background 2" />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
