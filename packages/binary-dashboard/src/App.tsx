import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import styled from 'styled-components'
import { BINARY_STASH_PRODUCT_ID } from './contants'
import { SideBarContainer } from './modules/MainSideBar/containers'
import { Header } from './partials/components/Header'
import { Router } from './router'
import { Layout } from './styles'

const MainLayout = styled.div`
	display: grid;
	background: #302f2f;
	grid-template-areas:
		'mainheader mainheader mainheader'
		'mainsidebar c c'
		'mainsidebar c c';
	grid-template-rows: 5rem 1fr 30px;
	grid-template-columns: 15rem 100%;
	border: 5px solid purple;
`

// interface IProps extends RouteComponentProps {}

const App: React.FC<RouteComponentProps<{}>> = ({ location: { pathname } }): JSX.Element => {
	const id = pathname.match(/\/[^app](\w+)/)

	let reformatted

	if (id) {
		reformatted = id[0].slice(1, id[0].length)
	}

	let sidebar

	if (pathname == '/' || pathname == '/product/create') {
		sidebar = <SideBarContainer />
	} else if (pathname == `/product/${reformatted}`) {
		sidebar = <SideBarContainer serviceId={reformatted} />
	} else if (localStorage.getItem(BINARY_STASH_PRODUCT_ID) !== '' && pathname !== '/') {
		sidebar = (
			<SideBarContainer serviceId={localStorage.getItem(BINARY_STASH_PRODUCT_ID) as any} />
		)
	}

	return (
		<MainLayout>
			<Header />
			{sidebar}
			<Layout>
				<Router />
			</Layout>
		</MainLayout>
	)
}

export default withRouter(App as any)
