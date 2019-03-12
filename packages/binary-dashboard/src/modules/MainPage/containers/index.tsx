import { Spinner } from '@binary-stash/common'
import * as React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
	display: grid;
	grid-auto-flow: row;

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
				<h2>Main Page</h2>
			</PageContainer>
		</React.Suspense>
	)
}

export default MainPageContainer
