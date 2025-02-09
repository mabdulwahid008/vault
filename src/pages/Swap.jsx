import React, { useEffect, useRef } from 'react'
import { cryptoTokens } from '../constants'

function Swap() {
    const [amountFrom, setAmountFrom] = React.useState(0)
    const [amountTo, setAmountTo] = React.useState(0)
    const [selectedTokenFrom, setSelectedTokenFrom] = React.useState('')
    const [selectedTokenTo, setSelectedTokenTo] = React.useState('')

    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-themeGreen/80 font-Pooppins uppercase text-xl text-center tracking-widest font-semibold mb-6'>SWAP</h2>
            <div className='relative flxx bg-[#282828] px-6 py-8 sm:p-8 rounded-xl shadow-xl shadow-themeGreen/20 flex flex-col gap-7 w-full sm:w-[70%]'>
                <div className='flex flex-col gap-1 relative z-50'>
                    <h2 className='font-Pooppins text-themeWhite text-base tracking-wider font-semibold uppercase'>From</h2>
                    <div className='flex justify-between items-center gap-3'>
                        <input
                            type='number'
                            placeholder='ENTER NUMBER OF TOKENS'
                            onChange={(e) => setAmountFrom(Number(e.target.value))}
                            className='bg-themeblack2 px-4 py-2.5 placeholder:tracking-widest text-left outline-none font-bold text-white text-xs sm:text-sm w-full rounded-lg'
                        />
                        <TokenDropDown
                            clickABle={
                                <button className='bg-gray-500 relative  hover:bg-themeblack2 whitespace-nowrap w-[1000] sm:w-[150px] tracking-wider transition-all ease-in duration-300 cursor-pointer rounded-lg px-4 py-2 text-white text-xs sm:text-sm font-Pooppins font-semibold'>
                                    {
                                    selectedTokenFrom? 
                                    <div className='flex gap-2 items-center'>
                                        <img src={selectedTokenFrom.logo} alt={selectedTokenFrom.name} className='w-6 h-6' />
                                        <p className='text-themeWhite font-Pooppins'>{selectedTokenFrom.symbol}</p>
                                        </div>
                                        :
                                    "Select Token"}
                                </button>
                            }
                            selectToken={setSelectedTokenFrom} />

                    </div>
                </div>

                <div className='flex flex-col gap-1 relative z-0'>
                    <h2 className='font-Pooppins text-themeWhite text-base tracking-wider font-semibold uppercase'>To</h2>
                    <div className='flex justify-between items-center gap-3'>
                        <input
                            type='number'
                            placeholder='Tokens you will receive'
                            onChange={(e) => setAmountTo(Number(e.target.value))}
                            className='bg-themeblack2 px-4 py-2.5 placeholder:tracking-widest placeholder:uppercase text-left outline-none font-bold text-white text-xs sm:text-sm w-full rounded-lg'
                        />

                        <TokenDropDown
                            clickABle={

                                <button className='bg-gray-500 relative hover:bg-themeblack2 whitespace-nowrap w-[100] sm:w-[150px] tracking-wider transition-all ease-in duration-300 cursor-pointer rounded-lg px-4 py-2 text-white text-xs sm:text-sm font-Pooppins font-semibold'>
                                    {
                                    selectedTokenTo ?
                                    <div className='flex gap-2 items-center'>
                                        <img src={selectedTokenTo.logo} alt={selectedTokenTo.name} className='w-6 h-6' />
                                        <p className='text-themeWhite font-Pooppins'>{selectedTokenTo.symbol}</p>
                                        </div>
                                        :
                                    "Select Token"}
                                </button>
                            }
                            selectToken={setSelectedTokenTo} />
                    </div>
                </div>


                <div className='flex justify-between items-center gap-3'>
                    <p className="font-Pooppins text-sm text-themeWhite">Estimated Transaction Fee</p>
                    <p className="font-Pooppins text-sm text-themeWhite">0.00 ETH</p>
                </div>

                <button className='bg-themeGreen/80 hover:bg-themeGreen whitespace-nowrap tracking-wider transition-all ease-in -mt-3 duration-300 cursor-pointer rounded-lg px-4 py-2.5 text-white text-xs sm:text-sm font-Pooppins font-semibold'>
                    Swap
                </button>
            </div>
        </div>
    )
}

export default Swap


const TokenDropDown = ({ clickABle, selectToken }) => {

    const [isOpen, setIsOpen] = React.useState(false)
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);



    return (
        <div ref={dropdownRef} className='w-[150px] relative z-0'>
            <div onClick={() => setIsOpen(!isOpen)} >
                {clickABle}
            </div>
           {isOpen && <div className='bg-themeblack2 z-50 left-0 top-10 absolute w-full rounded-md'>
                {cryptoTokens.map((token, index) => (
                    <div onClick={() => {selectToken(token); setIsOpen(false)}} key={index} className={`flex gap-2 py-2 px-4 hover:bg-gray-500 ${index !== cryptoTokens.length - 1 && 'border border-transparent border-b-themeWhite'}`}>
                        <img src={token.logo} alt={token.name} className='w-6 h-6' />
                        <p className='text-themeWhite font-Pooppins'>{token.symbol}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}