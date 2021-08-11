import { useState, useEffect } from 'react'

const useOpenSea = (accounts) => {
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        if (!accounts) return;


        const params = {
            // 'order_by': 'total_price',
            'owner': '0x42f3ffc4f1e6a182751b22c476871558075e51fa',
            'offset': 0,
            'limit': 40,
        }

        fetch('https://api.opensea.io/api/v1/assets?' + new URLSearchParams(params).toString())
            .then(response => response.json())
            .then(res => setNfts(res.assets))
            .catch(err => console.error(err));

    }, [accounts]);

    return {
        nfts,
    }
}

export default useOpenSea;
