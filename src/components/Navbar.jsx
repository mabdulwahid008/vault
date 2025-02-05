import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ConnectButton, useConnect } from 'thirdweb/react'
import { client } from '../utils/client'
import { ethers } from 'ethers';
import { useEthProvider } from '../Provider/EtherProvider';

function Navbar() {

  const { setWalletAddress, setProvider } = useEthProvider()

  const connectMetaMask = async () => {

    if (window.ethereum) {
      const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        // Request access to the user's accounts
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = metamaskProvider.getSigner();
        const address = await signer.getAddress();
        setProvider(metamaskProvider);
        setWalletAddress(address);
        console.log("Connected to MetaMask:", address);
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      console.log("Please install MetaMask!");
    }
  };


  return (
    <div className='flex justify-center w-full items-center fixed top-0 z-50 bg-themeblack/90 border-bottom'>
      <div className='w-[1225px] justify-between items-center py-5 flex'>
        <h2 className='text-2xl font-extrabold tracking-widest text-themeWhite font-Pooppins'>VAULT</h2>

        <nav className='flex justify-center items-center gap-4'>
          <NavLink to='/' className={'text-themeWhite hover:text-themeGreen transition-all ease-in duration-150 px-2 py-2 tracking-wide font-Pooppins text-sm font-semibold uppercase '}>Home</NavLink>
          <NavLink to='/about' className={'text-themeWhite hover:text-themeGreen transition-all ease-in duration-150 px-2 py-2 tracking-wide font-Pooppins text-sm font-semibold uppercase '}>Deposite</NavLink>
          <NavLink to='/contact' className={'text-themeWhite hover:text-themeGreen transition-all ease-in duration-150 px-2 py-2 tracking-wide font-Pooppins text-sm font-semibold uppercase '}>Withdraw</NavLink>
        </nav>
        <div className='flex justify-end items-center gap-2'>
          <button onClick={connectMetaMask} className='bg-themeGreen/80 hover:bg-themeGreen tracking-wider transition-all ease-in duration-300 cursor-pointer hover:scale-[1.04] rounded-full px-4 py-2 text-white text-sm font-Pooppins font-semibold'>
            Discord
          </button>
          <button onClick={connectMetaMask} className='bg-themeWhite/90 hover:bg-themeWhite tracking-wider transition-all ease-in duration-300 cursor-pointer hover:scale-[1.04] rounded-full px-4 py-2 text-themeblack text-sm font-Pooppins font-semibold'>
            Connect
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
