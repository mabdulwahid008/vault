import React from 'react';
import { cryptoTokens } from '../constants';

function Table() {
    return (
        <div className="w-[95%]">
            <h2 className='text-base text-themeGreen uppercase tracking-wider font-medium mb-3'>Top Pools</h2>
            <div className='bg-[#282828] px-2 sm:px-6 py-8 sm:p-4 rounded-xl shadow-xl shadow-themeGreen/20'>
                <div className="sm:w-full w-[350px] overflow-x-auto max-w-full">
                    <div className="w-full overflow-x-scroll bg-[#282828] rounded-lg no-scrollbar">
                            <div className='flex justify-between items-center border-b border-themeWhite/20 gap-4'>
                                <p className=" w-[20px] text-themeWhite font-bold uppercase whitespace-nowrap tracking-widest px-6 pb-4 pt-2 text-left text-xs">#</p>
                                <p className=" w-[300px] text-themeWhite font-bold uppercase whitespace-nowrap tracking-widest pb-4 pt-2 text-left text-xs">Pool</p>
                                <p className=" w-[300px] text-themeWhite font-bold uppercase whitespace-nowrap tracking-widest pb-4 pt-2 text-left text-xs">Address</p>
                                <p className=" w-[100px] text-themeWhite font-bold uppercase whitespace-nowrap tracking-widest pb-4 pt-2 text-left text-xs">APY</p>
                                <p className=" w-[100px] text-themeWhite font-bold uppercase whitespace-nowrap tracking-widest pb-4 pt-2 text-left text-xs">Margin</p>
                            </div>
                        <div className='flex flex-col'>
                            {cryptoTokens.map((item, index) => (
                                <div key={index} className='flex justify-between items-center border-b border-themeWhite/20 gap-4'>
                                    <p className=" w-[20px] text-themeWhite font-normal px-6 py-5 text-left text-xs">{index + 1}</p>
                                    <p className="sm:w-[300px] w-[250px]  text-themeWhite font-normal py-5 text-left text-xs">
                                        <div className='flex items-center gap-2'>
                                                <img src={item.logo} className='w-6 h-6'/>
                                                <span>{item.symbol}</span>
                                        </div>
                                    </p>
                                    <p className="sm:w-[300px] w-[250px] text-themeWhite font-normal py-5 text-left text-xs">{"0x000...00000"}</p>
                                    <p className=" w-[100px]  text-themeWhite font-normal  py-5 text-left text-xs">100%</p>
                                    <p className="w-[100px] text-themeWhite font-normal py-5 text-left text-xs">10%</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
             </div>
      </div>

   
    );
}

export default Table;
