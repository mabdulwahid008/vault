import React, { useState } from 'react'
import { getContract, prepareContractCall } from 'thirdweb';
import { client } from '../utils/client';
import { sepolia } from 'thirdweb/chains';
import { useActiveAccount, useSendTransaction } from 'thirdweb/react';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../constants';
import { ethers5Adapter } from 'thirdweb/adapters/ethers5';
import { ethers } from 'ethers';
import { useEthProvider } from '../Provider/EtherProvider';


const contract = getContract({
  client,
  address: CONTRACT_ADDRESS,
  chain: sepolia,
});

function WithDraw() {
  const account = useActiveAccount();


  const [amount, setAmount] = useState(0)
  const [loading, setLoading] = useState(false)
  const { signer } = useEthProvider();

  const onClick = async () => {
    setLoading(true)

    try {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const tx = await contract.withdraw(2);
      const receipt = await tx.wait();
    } catch (error) {
      console.log(error);

    }
    setLoading(true)
  };
  return (
    <div className='flex justify-between items-center gap-3'>
      <input
        type='number'
        placeholder='ENTER NUMBER OF TOKENS'
        onChange={e => setAmount(Number(e.target.value))}
        className='bg-themeblack2 px-4 py-2.5 placeholder:tracking-widest text-center outline-none font-bold text-white  text-sm w-full rounded-full'
      />
      <button
        disabled={loading}
        onClick={onClick}
        className='disabled:opacity-70 disabled:cursor-wait bg-themeGreen/80 hover:bg-themeGreen tracking-wider transition-all ease-in duration-300 cursor-pointer rounded-full px-4 py-2 text-white text-sm font-Pooppins font-semibold'>
        Withdraw
      </button>
    </div>
  )
}

export default WithDraw
