import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	background: #4600EA;
	grid-area: mainheader;

	@media (min-width: 768px) {
		/* height: 5rem; */
		display: flex;
		justify-content: right;
		align-items: center;
	}

	@media (max-width: 768px) {
		position: fixed;
		height: 100vh;
		width: 3rem;
	}
`

const Banner = styled.div`
	font-size: 2.5rem;
	padding-left: 1rem;
	text-transform: uppercase;
`

export const Header = () => {
	return (
		<Container>
			<Banner>
				<Link to="/">Site Banner</Link>
			</Banner>
		</Container>
	)
}
