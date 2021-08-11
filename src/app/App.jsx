import { memo } from 'react';
import { useMetaMask } from './controllers';

const App = () => {
	const { provider } = useMetaMask();
	return <div className='App'></div>;
};

export default memo(App);
