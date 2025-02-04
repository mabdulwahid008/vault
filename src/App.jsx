import React from 'react'
import Navbar from './components/Navbar'
import { client } from './utils/client'
import { ConnectButton } from 'thirdweb/react'
import Section from './components/Section'
import Table from './components/Table'

function App() {
  return (
    <div>
      <Navbar />
      <div className='mt-50 flex justify-center items-center'>
        <div className='w-[1225px] h-screen flex flex-col gap-10'>
          {/* <ConnectButton client={client} /> */}
          <Section />
          
          <Table />
        </div>
      </div>
    </div>
  )
}

export default App
