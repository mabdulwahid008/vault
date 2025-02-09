import React from 'react'

function Docs() {

    const renderText = (text) => {
        return (
            <p className='text-themeWhite font-Pooppins text-sm font-normal'>
                {text}
            </p>
        )
    }
    const renderHeading = (text) => {
        return (
            <p className='text-themeWhite font-Pooppins uppercase text-lg tracking-widest font-semibold mt-5'>
                {text}
            </p>
        )
    }

    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-themeGreen/80 font-Pooppins uppercase text-xl tracking-widest font-semibold mb-6'>Documentation</h2>
            {renderText(`
            A DEX pool (Decentralized Exchange Liquidity Pool) is a smart contract-based reserve of tokens that facilitates trading on decentralized exchanges (DEXs). Instead of using traditional order books, DEX pools rely on Automated Market Makers (AMMs), where users (liquidity providers) deposit equal values of two tokens to enable seamless swaps. In return, liquidity providers earn a share of the trading fees proportional to their stake in the pool.
            `)}

            {renderHeading(`
                DEX pools
            `)}

            {renderText(`
            Popular DEX pools exist on platforms like Uniswap, SushiSwap, and PancakeSwap, enabling decentralized and permissionless trading without intermediaries. The value of assets in the pool constantly shifts based on supply and demand, which can lead to impermanent loss, a risk liquidity providers should consider. However, yield farming and incentives often make liquidity provision an attractive opportunity.
            `)}
            {renderText(`
            Popular DEX pools exist on platforms like Uniswap, SushiSwap, and PancakeSwap, enabling decentralized and permissionless trading without intermediaries. The value of assets in the pool constantly shifts based on supply and demand, which can lead to impermanent loss, a risk liquidity providers should consider. However, yield farming and incentives often make liquidity provision an attractive opportunity.
            `)}
            {renderText(`
            Popular DEX pools exist on platforms like Uniswap, SushiSwap, and PancakeSwap, enabling decentralized and permissionless trading without intermediaries. The value of assets in the pool constantly shifts based on supply and demand, which can lead to impermanent loss, a risk liquidity providers should consider. However, yield farming and incentives often make liquidity provision an attractive opportunity.
            `)}
        </div>
    )
}

export default Docs
