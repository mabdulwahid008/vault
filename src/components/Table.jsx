import React from 'react'

function Table() {
    return (
        <div className="overflow-x-auto">
            
          <h2 className='text-base text-themeGreen uppercase tracking-wider font-medium mb-3'>Market Overview</h2>
            <table className="min-w-full border-collapse border bg-[#282828] rounded-lg overflow-hidden border-themeblack2">
                <thead>
                    <tr className="">
                        <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase tracking-widest px-6 py-5 text-left text-xs">#</th>
                        <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase tracking-widest px-6 py-5 text-left text-xs">Market Share</th>
                        <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase tracking-widest px-6 py-5 text-left text-xs">Price</th>
                        <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase tracking-widest px-6 py-5 text-left text-xs">Total Supply</th>
                        <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase tracking-widest px-6 py-5 text-left text-xs">Supplu APY</th>
                        <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase tracking-widest px-6 py-5 text-left text-xs">Total borrow</th>
                        <th className="border-b border-themeWhite/20 text-themeWhite font-bold uppercase tracking-widest px-6 py-5 text-left text-xs">Borrow APY</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3, 4, 5].map((item, index) => {
                        return <tr className="">
                            <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">{index+1}</td>
                            <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">20%</td>
                            <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">0.5 Eth</td>
                            <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">John Doe</td>
                            <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">100 M</td>
                            <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">10 %</td>
                            <td className="border-b border-themeWhite/20 text-themeWhite font-normal px-6 py-5 text-left text-xs">17.5 %</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table
