import * as React from 'react'
import styled from 'styled-components'
import { FetchCommentAPIS } from '../components/FetchCommentAPIS'

const Layout = styled.div`
	background: 20px solid orange;
	/* width: 10rem; */
	grid-area: mainsidebar;
	background: #302f2f;
	border: 10px solid purple;
	padding: 0.5rem;
`

const SideBarContainer: React.FC = (): JSX.Element => {
	return (
		<Layout>
			<FetchCommentAPIS />
		</Layout>
	)
}

export default SideBarContainer
