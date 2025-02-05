import React, { useState } from 'react'
import { getContract } from 'thirdweb';
import { CONTRACT_ADDRESS } from '../constants';
import { sepolia } from 'thirdweb/chains';
import { useSendTransaction } from 'thirdweb/react';
import { client } from '../utils/client';


const contract = getContract({
    client,
    address: CONTRACT_ADDRESS,
    chain: sepolia,
});


function Deposit() {
    const { mutate: sendTransaction } = useSendTransaction();
    const [amount, setAmount] = useState(0)
 
  const onClick = async () => {
    if(isNaN(amount) || amount <= 0)
            alert("Amount is not correct")
    try {
      // Sending the transaction using the deposit method
      const tx = await deposit([amount]);
      console.log('Transaction sent:', tx);
      // You can optionally wait for the transaction to be mined
      await tx.wait();
      alert('Transaction successful!');
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
