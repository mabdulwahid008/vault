import React from 'react'
import WithDrawDeposit from '../components/WithDrawDeposit'

function Home() {
  return (
    <div className='flex justify-center items-center w-full h-full pb-10'>
        <div className='sm:w-[90%] w-full'>
      <WithDrawDeposit />
        </div>
    </div>
  )
}

export default Home
