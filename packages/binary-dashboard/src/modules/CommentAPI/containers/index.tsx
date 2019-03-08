import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import { FetchCommentApiComponent } from '../../../apollo/components/apollo-components'

interface IProps extends RouteComponentProps<{ id: string }> {}

const CommentAPIContainer: React.FC<IProps> = ({
	match: {
		params: { id }
	}
}) => {
	return (
		<div>
			<h2>Comment API Container</h2>
			<FetchCommentApiComponent variables={{ id }}>
				{({ data, loading }) => {
					if (loading) {
						return <div>loading...</div>
					}

					if (data === undefined && data === null && !loading) {
						return <div>Error</div>
					}

					if (
						data !== undefined &&
						data.fetchCommentAPI !== undefined &&
						data.fetchCommentAPI !== null
					) {
						return (
							<div>
								<Card>
									<h2>owner: {data.fetchCommentAPI.owner.username}</h2>
								</Card>
							</div>
						)
					}
				}}
			</FetchCommentApiComponent>
		</div>
	)
}

export default CommentAPIContainer
