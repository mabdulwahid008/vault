import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Blockies from 'react-blockies';
import { ethers } from 'ethers';
import { useEthProvider } from '../Provider/EtherProvider';

function Navbar() {

  const [connectModal, setConnectModal] = useState(false)
  const { walletAddress, disconnectMetaMask } = useEthProvider()

  return (
    <div className='flex justify-center w-full items-center fixed top-0 z-50 bg-themeblack/90 border-bottom'>
      <div className='sm:w-[1225px] w-full justify-between items-center py-5 flex'>
        <h2 className='text-2xl font-extrabold tracking-widest text-themeWhite font-Pooppins'>VAULT</h2>

        <nav className='sm:flex hidden justify-center items-center gap-4'>
          <NavLink to='/' className={'text-themeWhite hover:text-themeGreen transition-all ease-in duration-150 px-2 py-2 tracking-wide font-Pooppins text-sm font-semibold uppercase '}>Home</NavLink>
          <NavLink to='/pool' className={'text-themeWhite hover:text-themeGreen transition-all ease-in duration-150 px-2 py-2 tracking-wide font-Pooppins text-sm font-semibold uppercase '}>Pool</NavLink>
          <NavLink to='/stake' className={'text-themeWhite hover:text-themeGreen transition-all ease-in duration-150 px-2 py-2 tracking-wide font-Pooppins text-sm font-semibold uppercase '}>Stake</NavLink>
          <NavLink to='/dex' className={'text-themeWhite hover:text-themeGreen transition-all ease-in duration-150 px-2 py-2 tracking-wide font-Pooppins text-sm font-semibold uppercase '}>DEX</NavLink>
        </nav>
        <div className='flex justify-end items-center gap-2'>
          <button className='bg-themeGreen/80 hover:bg-themeGreen tracking-wider transition-all ease-in duration-300 cursor-pointer hover:scale-[1.04] rounded-full px-4 py-2 text-white text-sm font-Pooppins font-semibold'>
            Discord
          </button>
          {!walletAddress ? <button onClick={() => setConnectModal(true)} className='bg-themeWhite/90 hover:bg-themeWhite tracking-wider transition-all ease-in duration-300 cursor-pointer hover:scale-[1.04] rounded-full px-4 py-2 text-themeblack text-sm font-Pooppins font-semibold'>
            Connect
          </button>
            :
            <div onClick={disconnectMetaMask} className='flex gap-2 justify-center items-center bg-themeblack2 p-1 rounded-full px-3 cursor-pointer'>
              <Blockies
                seed={walletAddress}
                size={10}
                scale={3}
                color="#4e4e4e"
                bgColor="#00c896"
                spotColor="#f2ecff"
                className="identicon"
              />
           <p className='text-sm font-semibold text-themeWhite'>{`${walletAddress.substring(0, 5)}...${walletAddress.substring(walletAddress.length - 3)}`}</p>

            </div>
          }
        </div>

      </div>
      {connectModal && <WalletConnectModal setConnectModal={setConnectModal} />}
    </div>
  )
}

export default Navbar



const WalletConnectModal = ({ setConnectModal }) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const { setWalletAddress, setProvider } = useEthProvider()

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      setIsMetaMaskInstalled(true);
    }
  }, []);


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
        setConnectModal(false)
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      console.log("Please install MetaMask!");
    }
  };

  const connectWalletConnect = async () => {
    const walletConnectProvider = new WalletConnectProvider({
      infuraId: "YOUR_INFURA_PROJECT_ID", // Replace with your Infura project ID
    });

    try {
      await walletConnectProvider.enable(); // Request the user to connect
      const ethersProvider = new ethers.providers.Web3Provider(walletConnectProvider);
      const signer = ethersProvider.getSigner();
      const address = await signer.getAddress();
      setProvider(ethersProvider);
      setWalletAddress(address);
      console.log("Connected to WalletConnect:", address);
    } catch (error) {
      console.error("WalletConnect connection error:", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50">
      <div className="bg-themeblack p-6 rounded-lg shadow-xl w-[90%] sm:w-1/3">
        <div className='flex justify-between items-center'>
          <h2 className="text-xl text-themeWhite font-Pooppins tracking-widest uppercase mb-10 font-bold">Connect Your Wallet</h2>
          <h2 onClick={() => setConnectModal(false)} className='font-bold leading-0 cursor-pointer -mt-8 text-themeWhite text-2xl font-Pooppins'>X</h2>
        </div>
        <div className="space-y-4">
          <button
            onClick={connectMetaMask}
            className={`w-full py-2 px-4 rounded-lg text-themeWhite cursor-pointer hover:scale-[0.98] transition-all ease-in duration-200 bg-themeGreen/80 font-bold uppercase font-Pooppins tracking-wider`}
            disabled={!isMetaMaskInstalled}
          >
            MetaMask {isMetaMaskInstalled ? "(Installed)" : "(Not Installed)"}
          </button>
          <button
            onClick={connectWalletConnect}
            className="w-full py-2 px-4 rounded-lg bg-themeGreen/80 cursor-pointer hover:scale-[0.98] transition-all ease-in duration-200 text-themeWhite font-bold uppercase font-Pooppins tracking-wider"
          >
            WalletConnect
          </button>
        </div>
      </div>
    </div>
  );
};

