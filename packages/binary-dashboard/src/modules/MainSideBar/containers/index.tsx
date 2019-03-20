import * as React from 'react'
import styled from 'styled-components'
import FetchAPIService from '../components/FetchApiService'
import { FetchApiServices } from '../components/FetchApiServices'

const Layout = styled.div`
	background: 20px solid orange;
	/* width: 10rem; */
	grid-area: mainsidebar;
	background: #302f2f;
	border-right: 1px solid black;
	padding: 0.5rem;
	border: 5px solid orange;
`

interface IProps {
	serviceId?: string
}

export const SideBarContainer: React.FC<IProps> = ({ serviceId }): JSX.Element => {
	return (
		<Layout>
			{serviceId == null && <FetchApiServices />}
			{serviceId && <FetchAPIService serviceId={serviceId} />}{' '}
		</Layout>
	)
}
