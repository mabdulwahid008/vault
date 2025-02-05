import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

function EtherProvider({ children }) {

    const [walletAddress, setWalletAddress] = useState(null);
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null)

    useEffect(() => {
        if (provider) {
            const getSigner = async () => {
                const signer = provider.getSigner();  
                setSigner(signer); 
                const address = await signer.getAddress(); 
                setWalletAddress(address); 
            };

            getSigner();
        }
    }, [provider]);

    const value = {
        setWalletAddress,
        walletAddress,
        setProvider,
        provider,
        signer,
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default EtherProvider


export const useEthProvider = () => useContext(Context)