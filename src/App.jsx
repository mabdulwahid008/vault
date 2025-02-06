import React from 'react'
import Navbar from './components/Navbar'
import { client } from './utils/client'
import { ConnectButton } from 'thirdweb/react'
import Section from './components/Section'
import Table from './components/Table'
import WithDrawDeposit from './components/WithDrawDeposit'

function App() {
  return (
    <div>
      <Navbar />
      <div className='mt-50 flex justify-center items-center'>
        <div className='w-[1225px] h-screen flex flex-col gap-10'>
            <div className='flex justify-center items-center'>
                <div className='sm:w-[60%] w-full sm:px-0 px-6'>
                  <WithDrawDeposit />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
