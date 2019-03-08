import * as React from 'react'
import {
	FetchCommentApisFetchCommentApIs,
	Maybe
} from '../../../apollo/components/apollo-components'

interface IProps {
	commentAPI: Maybe<FetchCommentApisFetchCommentApIs>[]
}

export const MainPageSidebar: React.FC<IProps> = ({ commentAPI }) => {
	return (
		<div>
			{commentAPI.map((api, i) => {
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
