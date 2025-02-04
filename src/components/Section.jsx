import React from 'react'
import { getContract } from 'thirdweb';
import { client } from '../utils/client';
import { CONTRACT_ADDRESS } from '../constants';
import { useReadContract } from 'thirdweb/react';
import { sepolia } from "thirdweb/chains";


const contract = getContract({
    client,
    address: CONTRACT_ADDRESS,
    chain: sepolia,
});

function Section() {

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

    console.log("coverageFee", );
    

    return (
        <div className='flex flex-col gpa-4'>
            <div className='flex justify-between sm:flex-row items-center mt-4 gap-6 flex-col'>
                    <div className='bg-themeblack2 p-6 rounded-xl flex-1 justify-between flex flex-col w-full gap-1 shadow-themeGreen/20 shadow-xl'>
                        <h2 className='text-lg text-themeWhite font-extrabold uppercase tracking-widest'>Covergae Fee</h2>
                        <hr className='h-0.5 border-none bg-themeGreen w-40'/>
                        <p className='text-sm text-themeWhite mt-1'>A minimal charge that helps maintain the vault's security, cover operational costs, and manage risks effectively. A small fee ensuring security, maintenance, and risk management of the vault. </p>
                        <h2 className='text-xl uppercase text-themeWhite font-bold text-right mt-2'>{Number(coverageFee || 0)} Eth</h2>
                    </div>
                    <div className='bg-themeblack2 p-6 rounded-xl flex-1 justify-between flex flex-col w-full gap-1 shadow-themeGreen/20 shadow-xl'>
                        <h2 className='text-lg text-themeWhite font-extrabold uppercase tracking-widest'>Performance Fee</h2>
                        <hr className='h-0.5 border-none bg-themeGreen w-40'/>
                        <p className='text-sm text-themeWhite mt-1'>Applied only to successful earnings, this fee aligns incentives and ensures continuous optimization and growth. A percentage of profits charged only on successful earnings to sustain growth.</p>
                        <h2 className='text-xl uppercase text-themeWhite font-bold text-right mt-2'>{Number(performanceFee || 0)} Eth</h2>
                    </div>
                 
            </div>
        </div>
    )
}

export default Section
