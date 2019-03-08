import { Spinner } from '@binary-stash/common'
import * as React from 'react'
import styled from 'styled-components'
import { CreateCommentAPI } from '../components/CreateCommentApi'
import { FetchCommentAPIS } from '../components/FetchCommentAPIS'

const PageContainer = styled.div`
	display: grid;
	border: 10px solid pink;
	grid-auto-flow: row;
	margin-top: 1rem;
	grid-template:
		'b b a' auto
		'b b c' 2ch
		'b b c' 1em / 20% 20px 1fr;
`

// const SideBar = styled.div``

const MainPageContainer: React.FC = () => {
	return (
		<React.Suspense fallback={Spinner}>
			<PageContainer>
				<FetchCommentAPIS />
				<CreateCommentAPI />
			</PageContainer>
		</React.Suspense>
	)
}

export default MainPageContainer
