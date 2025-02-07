import React, { useEffect, useState } from 'react'
import Deposit from './Deposit'
import WithDraw from './WithDraw'
import Fees from './Fees'
import { useReadContract } from 'thirdweb/react'
import { getContract } from 'thirdweb'
import { client } from '../utils/client';
import { sepolia } from 'thirdweb/chains';
import { CONTRACT_ABI, CONTRACT_ADDRESS, RPC_URL } from '../constants'
import { ethers } from 'ethers'

const contract = getContract({
    client,
    address: CONTRACT_ADDRESS,
    chain: sepolia,
});

function WithDrawDeposit() {
    const [active, setActive] = useState('Deposit')
    const [testPhase, setTestPhase] = useState(true)

    useEffect(() => {
        const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

        const getTestPhaseStatus = async () => {
            try {

                const fee = await contract.getTestPhaseStatus();
                console.log(contract);

            } catch (error) {
                console.error("Error reading getTestPhaseStatus", error);
            }
        };
        getTestPhaseStatus()
    }, [])


    return (
        <div className='flxx bg-[#282828] px-6 py-8 sm:p-8 rounded-xl shadow-xl shadow-themeGreen/20 flex flex-col gap-7'>
            <div className='flex border border-themeWhite/70 rounded-full overflow-hidden'>
                <button
                    onClick={() => setActive('Deposit')}
                    className={`flex-1 ${active === 'Deposit' ? 'bg-themeGreen/80' : ''} text-sm cursor-pointer w-1/3 uppercase font-bold tracking-widest rounded-full text-themeWhite py-2.5 px-4 `}>
                    Deposit
                </button>
                <button
                    onClick={() => setActive('Withdraw')}
                    className={`flex-1 ${active === 'Withdraw' ? 'bg-themeGreen/80' : ''} text-sm cursor-pointer w-1/3 uppercase font-bold tracking-widest rounded-full text-themeWhite py-2.5 px-4 `}>
                    Withdraw
                </button>
                <button

                    className={`flex-1 ${active === 'dddddd' ? 'bg-themeGreen/80' : ''} whitespace-nowrap w-1/3 text-sm cursor-pointer uppercase font-bold tracking-widest rounded-full text-themeWhite py-2.5 px-4 `}>
                    {testPhase !== true ? 'Test phase' : 'Active'}
                </button>

            </div>

            {active === 'Deposit' && <Deposit />}
            {active === 'Withdraw' && <WithDraw />}

            <div className='border-bottom relative h-0.5 w-full'>
            </div>
            <Fees />

        </div>
    )
}

export default WithDrawDeposit
