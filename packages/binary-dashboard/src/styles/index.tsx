import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	margin: 0 auto;
	color: #fff;
	width: 100%;
	padding: 1rem;
	background: grey;
`

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	@media (max-width: 768px) {
		margin-left: 2rem;
	}
`
