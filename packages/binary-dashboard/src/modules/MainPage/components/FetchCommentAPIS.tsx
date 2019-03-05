import * as React from 'react'
import { FetchCommentApisComponent } from '../../../apollo/components/apollo-components'

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
						return (
							<div>
								{data.fetchCommentAPIs.map((api, i) => {
									if (api) {
										return (
											<div key={api.id}>
												<h4>Owner: {api.owner.username}</h4>
												<h4>Consumer Key: {api.consumerKey}</h4>
											</div>
										)
									} else {
										return <div key={Math.random() + i}>Currently no APIs</div>
									}
								})}
							</div>
						)
					}
				}}
			</FetchCommentApisComponent>
		</div>
	)
}
