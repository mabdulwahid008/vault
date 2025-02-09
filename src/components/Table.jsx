import React from 'react';
import { cryptoTokens } from '../constants';

function Table() {
    return (
        <div className="w-[95%]">
            <h2 className='text-base text-themeGreen uppercase tracking-wider font-medium mb-3'>Top Pools</h2>
            <div className='bg-[#282828] px-2 sm:px-6 py-8 sm:p-4 rounded-xl shadow-xl shadow-themeGreen/20'>
                <div className="sm:w-full w-[350px] overflow-x-auto max-w-full">
                    <table className="w-full border-collapse border bg-[#282828] rounded-lg overflow-hidden border-themeblack2">
                        <thead>
                            <tr>
                                <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase whitespace-nowrap tracking-widest px-6 pb-4 pt-2 text-left text-xs">#</th>
                                <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase whitespace-nowrap tracking-widest px-6 pb-4 pt-2 text-left text-xs">Pool</th>
                                <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase whitespace-nowrap tracking-widest px-6 pb-4 pt-2 text-left text-xs">Address</th>
                                <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase whitespace-nowrap tracking-widest px-6 pb-4 pt-2 text-left text-xs">APY</th>
                                <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase whitespace-nowrap tracking-widest px-6 pb-4 pt-2 text-left text-xs">Margin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptoTokens.map((item, index) => (
                                <tr key={index}>
                                    <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">{index + 1}</td>
                                    <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">
                                        <div className='flex items-center gap-2'>
                                                <img src={item.logo} className='w-6 h-6'/>
                                                <span>{item.symbol}</span>
                                        </div>
                                    </td>
                                    <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">{"0x000...00000"}</td>
                                    <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">100%</td>
                                    <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">10%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
             </div>
      </div>

   
    );
}

export default Table;
