import dayjs from 'dayjs'
import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'
import { FetchCommentApiComponent } from '../../../apollo/components/apollo-components'

interface IProps extends RouteComponentProps<{ id: string }> {}

const CardStyles = styled.div`
	color: #000;
`

const CommentAPIContainer: React.FC<IProps> = ({
	match: {
		params: { id }
	}
}) => {
	return (
		<div>
			<h2>Comment API Container</h2>
			<FetchCommentApiComponent variables={{ id }}>
				{({ data, loading, error }) => {
					if (loading) {
						return <div>loading...</div>
					}

					if (error && !loading) {
						return <div>{error.message}</div>
					}

					if (!data && !loading) {
						return <div>Error</div>
					}

					console.log('DATA', data)

					if (
						data !== undefined &&
						data.fetchCommentAPI !== undefined &&
						data.fetchCommentAPI !== null
					) {
						return (
							<CardStyles>
								<Card>
									<Card.Content>
										<Card.Header>
											{' '}
											<h3>{data.fetchCommentAPI.owner.username}</h3>{' '}
										</Card.Header>

										<Card.Meta>
											Created at:{' '}
											{dayjs(data.fetchCommentAPI.createdAt).format(
												'DD/MM/YYYY'
											)}
										</Card.Meta>
										<Card.Description>
											<h4>owner: {data.fetchCommentAPI.owner.username}</h4>
										</Card.Description>
									</Card.Content>
								</Card>
							</CardStyles>
						)
					}
				}}
			</FetchCommentApiComponent>
		</div>
	)
}

export default withRouter(CommentAPIContainer)
