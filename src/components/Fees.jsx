
import React, { } from 'react'
import { CONTRACT_ADDRESS } from '../constants';
import { client } from '../utils/client';
import { sepolia } from 'thirdweb/chains';
import { getContract } from 'thirdweb';
import { useReadContract } from 'thirdweb/react';

const contract = getContract({
    client,
    address: CONTRACT_ADDRESS,
    chain: sepolia,
});

function Fees() {

 const { data: coverageFee, } = useReadContract({
        contract,
        method: "function gasCoverageFee() returns (uint256)",
        params: [1n],
    })
    const { data: performanceFee, } = useReadContract({
        contract,
        method: "function performanceFee() returns (uint256)",
        params: [1n],
    })
    const { data: topPool, } = useReadContract({
        contract,
        method: "function topPool() returns (address)",
        params: [1n],
    })



    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
                <p className='text-sm text-themeWhite font-Pooppins tracking-widest uppercase font-medium'>Performance Fee</p>
                <p className='text-sm text-themeWhite font-Pooppins tracking-widest font-medium'>{(Number(coverageFee))} ETH</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-sm text-themeWhite font-Pooppins tracking-widest uppercase font-medium'>Gas Coverage Fee</p>
                <p className='text-sm text-themeWhite font-Pooppins tracking-widest font-medium'>{Number(performanceFee)} ETH</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-sm text-themeWhite font-Pooppins tracking-widest uppercase font-medium'>Top Pool</p>
                <p className='text-xs text-themeWhite font-Pooppins tracking-widest font-semibold'>{topPool}</p>
            </div>
        </div>
    )
}

export default Fees
