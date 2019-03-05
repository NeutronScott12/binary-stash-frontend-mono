import React, { Component } from 'react'
import styled from 'styled-components'
import MainPageContainer from './modules/MainPage/containers'

const Container = styled.div`
	width: 80%;
	margin: auto;
	color: #fff;
	background: grey;
`

const Layout = styled.div`
	display: flex;
	background: #000;
	flex-direction: column;
	min-height: 100vh;
`

class App extends Component {
	render() {
		return (
			<Layout>
				<Container className="App">
					<h2>Bob</h2>
					<MainPageContainer />
				</Container>
			</Layout>
		)
	}
}

export default App
