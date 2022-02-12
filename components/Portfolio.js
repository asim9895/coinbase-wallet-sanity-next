import React from 'react';
import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { coins } from '../static/coins';

const Portfolio = () => {
	return (
		<Wrapper>
			<PortfolioTable>
				<TableItem>
					<Title style={{ color: '#fff' }}>Assets</Title>
				</TableItem>
				<Divider />
				<Table>
					<TableItem>
						<TableRow style={{ color: '#fff' }}>
							<div style={{ flex: 3 }}>Name</div>
							<div style={{ flex: 2 }}>Balance</div>
							<div style={{ flex: 1 }}>Price</div>
							<div style={{ flex: 1 }}>Allocation</div>
							<div style={{ flex: 0 }}>
								<BsThreeDotsVertical />
							</div>
						</TableRow>
					</TableItem>
					<Divider />
					{coins.length > 0 && coins.map((c) => {})}
				</Table>
			</PortfolioTable>
		</Wrapper>
	);
};

export default Portfolio;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	color: '#fff';
`;

const Content = styled.div`
	width: 100%;
	max-width: 1000px;
	padding: 2rem 1rem;
`;

const PortfolioTable = styled.div`
	margin-top: 1rem;
	border: 1px solid #282b2f;
`;

const Table = styled.table`
	width: 100%;
`;

const TableRow = styled.tr`
	width: 100%;
	justify-content: space-between;
	display: flex;

	& > th {
		text-align: left;
	}
`;
const TableItem = styled.div`
	padding: 1rem 2rem;
`;
const Divider = styled.div`
	border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
	font-size: 1.5rem;
	font-weight: 500;
`;
