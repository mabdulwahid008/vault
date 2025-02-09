import React from 'react'
import Navbar from './components/Navbar'
import WithDrawDeposit from './components/WithDrawDeposit'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pool from './pages/Pool'
import Docs from './pages/Docs'
import Swap from './pages/Swap'

function App() {
  return (
    <div>
      <Navbar />
      <div className='mt-50 flex justify-center items-center'>
        <div className='sm:w-[1225px] h-screen flex flex-col gap-10'>
            <div className='flex justify-center items-center'>
                <div className='sm:w-[70%] w-full sm:px-0 px-6'>
                  <Routes>
                      <Route index element={<Home />} />
                      <Route path='/pool' element={<Pool />} />
                      <Route path='/docs' element={<Docs />} />
                      <Route path='/swap' element={<Swap />} />
                  </Routes>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
