import React, { Component } from 'react'
import styled from 'styled-components'
import { Header } from './partials/components/Header'
import { Router } from './router'

const Container = styled.div`
	display: grid;
	margin: auto;
	color: #fff;
	width: 100%;
	margin-top: 3rem;
	background: grey;
	border: 5px solid purple;
`

const Layout = styled.div`
	display: flex;
	background: #302f2f;
	flex-direction: column;
	min-height: 100vh;

	@media (max-width: 768px) {
		margin-left: 2rem;
	}
`

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Layout>
					<Container className="App">
						<Router />
					</Container>
				</Layout>
			</React.Fragment>
		)
	}
}

export default App
