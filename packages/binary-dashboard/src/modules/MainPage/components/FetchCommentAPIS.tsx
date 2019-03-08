import * as React from 'react'
import { FetchCommentApisComponent } from '../../../apollo/components/apollo-components'
import { MainPageSidebar } from '../views/SideBar'

export const FetchCommentAPIS: React.FC = (): JSX.Element => {
	return (
		<div>
			<FetchCommentApisComponent>
				{({ loading, data }) => {
					console.log('LOADING', loading)
					console.log('DATA', data)

					if (loading) {
						return <div>loading...</div>
					}

					if (data === undefined && !loading) {
						return <div>Error</div>
					}

					if (
						data !== undefined &&
						data.fetchCommentAPIs !== undefined &&
						data.fetchCommentAPIs !== null
					) {
						return <MainPageSidebar commentAPI={data.fetchCommentAPIs} />
					}
				}}
			</FetchCommentApisComponent>
		</div>
	)
}
