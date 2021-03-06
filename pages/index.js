import { useWeb3 } from '@3rdweb/hooks';
import styled from 'styled-components';
import Dashboard from './Dashboard';

const Home = () => {
	const { connectWallet, address } = useWeb3();
	return (
		<Wrapper style={{ backgroundColor: '#000000' }}>
			{address ? (
				<Dashboard address={address} />
			) : (
				<WalletConnect>
					<Button onClick={() => connectWallet('injected')}>
						Connect Wallet
					</Button>
					<Details>Metamask wallet is required to use this app</Details>
				</WalletConnect>
			)}
		</Wrapper>
	);
};

export default Home;

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	max-width: 100vw;
	background-color: #000000;
	display: grid;
	place-items: center;
	color: '#fff';
`;

const WalletConnect = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Button = styled.div`
	border: 1px solid #282b2f;
	padding: 0.8rem;
	font-size: 1.3rem;
	font-weight: 500;
	border-radius: 0.4rem;
	background-color: #3773f5;
	color: '#ffffff';

	&:hover {
		cursor: pointer;
	}
`;

const Details = styled.div`
	font-size: 1.2rem;
	text-align: center;
	margin-top: 1rem;
	font-weight: 500;
	color: #282b2f;
`;
