import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider'

const useMetaMask = () => {
    const [provider, setProvider] = useState(null);
    const [accounts, setAccounts] = useState(null);

    useEffect(() => {
        detectEthereumProvider()
            .then(setProvider)
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (!provider) return;

        provider.request({ method: 'eth_requestAccounts' })
            .then(setAccounts)
            .catch(console.error);

    }, [provider]);
    
    return {
        provider,
        accounts,
    }
}

export default useMetaMask;
