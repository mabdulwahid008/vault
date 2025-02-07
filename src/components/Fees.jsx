
import React, { useEffect, useState } from 'react'
import { CONTRACT_ABI, CONTRACT_ADDRESS, RPC_URL } from '../constants';
import { client } from '../utils/client';
import { sepolia } from 'thirdweb/chains';
import { getContract } from 'thirdweb';
import { useReadContract } from 'thirdweb/react';
import { ethers } from 'ethers';

const contract = getContract({
    client,
    address: CONTRACT_ADDRESS,
    chain: sepolia,
});

function Fees() {
    const [coverageFee, setCoverageFee] = useState(5)
    const [performanceFee, setPerformanceFee] = useState(5)
    const [topPool, setTopPool] = useState("0x0000000000000000000000000000000000000000")

  
  
    useEffect(() => {
        const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

        const getPerformanceFee = async () => {
            try {
                const fee = await contract.getPerformanceFee();
                const topPool = await contract.topPool();
                const coverageFee = await contract.getCoverageFee();
                // setCoverageFee(Number(fee))
                // setCoverageFee(Number(coverageFee))
                // setTopPool(topPool)
            } catch (error) {
                console.error("Error reading performance fee:", error);
            }
        };
        getPerformanceFee()
    }, [])


    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
                <p className='text-sm text-themeWhite font-Pooppins tracking-widest uppercase font-medium'>Performance Fee</p>
                <p className='text-sm text-themeWhite font-Pooppins tracking-widest font-medium'>{(Number(coverageFee))}% ETH</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-sm text-themeWhite font-Pooppins tracking-widest uppercase font-medium'>Gas Coverage Fee</p>
                <p className='text-sm text-themeWhite font-Pooppins tracking-widest font-medium'>{Number(performanceFee)}% ETH</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-sm text-themeWhite font-Pooppins tracking-widest uppercase font-medium'>Top Pool</p>
                <p className='text-xs text-themeWhite font-Pooppins tracking-widest font-semibold'>{`${topPool?.substring(0, 10)}...${topPool?.substring(topPool?.length - 7)}`}</p>
            </div>
        </div>
    )
}

export default Fees
