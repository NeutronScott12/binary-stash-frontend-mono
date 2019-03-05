import * as React from 'react'
import styled from 'styled-components'
import { CreateCommentAPI } from '../components/CreateCommentApi'
import { FetchCommentAPIS } from '../components/FetchCommentAPIS'

const PageContainer = styled.div`
	display: grid;
	border: 1px solid black;
	grid-auto-flow: row;
	margin-top: 1rem;
`

const MainPageContainer: React.FC = () => {
	return (
		<div>
			<h2>Main Page Container</h2>
			<PageContainer>
				<CreateCommentAPI />
				<FetchCommentAPIS />
			</PageContainer>
		</div>
	)
}

export default MainPageContainer
