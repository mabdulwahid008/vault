import React, { useState } from 'react'
import { getContract } from 'thirdweb';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../constants';
import { sepolia } from 'thirdweb/chains';
import { useSendTransaction } from 'thirdweb/react';
import { client } from '../utils/client';
import { useEthProvider } from '../Provider/EtherProvider';
import { ethers } from 'ethers';

function Deposit() {
  const [amount, setAmount] = useState(0)
  const { signer } = useEthProvider()
  const onClick = async () => {
    if (isNaN(amount) || amount <= 0)
      alert("Amount is not correct")
    try {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const tx = await contract.deposit(amount * 10_000_000);
      const receipt = await tx.wait();
    } catch (error) {
      console.error('Error in transaction:', error);
      alert('Transaction failed!');
    }
  };

  return (
    <div className='flex justify-between items-center gap-3'>
      <input
        type='number'
        placeholder='ENTER NUMBER OF TOKENS'
        onChange={(e) => setAmount(Number(e.target.value))}
        className='bg-themeblack2 px-4 py-2.5 placeholder:tracking-widest text-center outline-none font-bold text-white  text-sm w-full rounded-full'
      />
      <button onClick={onClick} className='bg-themeGreen/80 hover:bg-themeGreen tracking-wider transition-all ease-in duration-300 cursor-pointer rounded-full px-4 py-2 text-white text-sm font-Pooppins font-semibold'>
        Deposit
      </button>
    </div>
  )
}

export default Deposit
