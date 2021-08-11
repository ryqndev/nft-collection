import { memo } from 'react';
import { useMetaMask, useOpenSea } from './controllers';
import './styles/main.scss';

const App = () => {
	const { accounts } = useMetaMask();
	const { nfts } = useOpenSea(accounts);

	return <div className='App'>{nfts.map(nft => <img alt="nft" src={nft['image_original_url']} />)}</div>;
};

export default memo(App);
