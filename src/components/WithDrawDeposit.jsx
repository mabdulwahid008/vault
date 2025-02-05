import React, { useState } from 'react'
import Deposit from './Deposit'
import WithDraw from './WithDraw'
import Fees from './Fees'

function WithDrawDeposit() {
  const [active, setActive] = useState('Deposit')
  return (
    <div className='flxx bg-[#282828] p-8 rounded-xl shadow-xl shadow-themeGreen/20 flex flex-col gap-7'>
        <dib className='flex border border-themeWhite/70 rounded-full overflow-hidden'>
            <button
            onClick={() => setActive('Deposit')}
            className={`flex-1 ${active === 'Deposit'? 'bg-themeGreen/80' : ''} text-sm cursor-pointer uppercase font-bold tracking-widest rounded-full text-themeWhite py-2.5 px-4 `}>
                Deposit
            </button>
            <button
            onClick={() => setActive('Withdraw')}
            className={`flex-1 ${active === 'Withdraw'? 'bg-themeGreen/80' : ''} text-sm cursor-pointer uppercase font-bold tracking-widest rounded-full text-themeWhite py-2.5 px-4 `}>
                Withdraw
            </button>
            <button
          
            className={`flex-1 ${active === 'dddddd'? 'bg-themeGreen/80' : ''} text-sm cursor-pointer uppercase font-bold tracking-widest rounded-full text-themeWhite py-2.5 px-4 `}>
                Deposit
            </button>
          
        </dib>

      {active === 'Deposit' && <Deposit />}
      {active === 'Withdraw' && <WithDraw />}

      <div className='border-bottom relative h-0.5 w-full'>
      </div>
      <Fees />

    </div>
  )
}

export default WithDrawDeposit
