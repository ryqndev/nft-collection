import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider'

const useMetaMask = () => {
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        detectEthereumProvider().then(provider => {
            setProvider(provider)
        }).catch(err => {
            console.error(err);
        });
    }, []);

    useEffect(() => {
        console.log(provider);
    }, [provider]);

    return {
        provider,
    }
}

export default useMetaMask;
