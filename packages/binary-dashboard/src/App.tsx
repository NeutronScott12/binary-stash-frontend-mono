import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import SideBarContainer from './modules/MainSideBar/containers'
import { Header } from './partials/components/Header'
import { Router } from './router'
import { Container, Layout } from './styles'

const MainLayout = styled.div`
	display: grid;
	background: #302f2f;
	grid-template-areas:
		'mainheader mainheader mainheader'
		'mainsidebar c c'
		'mainsidebar c c';
	grid-template-rows: 5rem 1fr 30px;
	grid-template-columns: 15rem 1fr;
`

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<MainLayout>
					<Header />
					<SideBarContainer />
					<Layout>
						<Container>
							<Router />
						</Container>
					</Layout>
				</MainLayout>
			</BrowserRouter>
		)
	}
}

export default App
