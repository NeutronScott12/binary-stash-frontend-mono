import dayjs from 'dayjs'
import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Card, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { FetchCommentApiComponent } from '../../../apollo/components/apollo-components'

interface IProps extends RouteComponentProps<{ id: string }> {}

const CommentAPILayout = styled.div`
	display: grid;
	grid-template-columns: 30% auto;
	grid-template-rows: auto;
	grid-gap: 1rem;
	grid-template-areas:
		'a b b'
		'a b b';
`

const DetailSegment = styled.div`
	border: 2px solid blue;
	grid-area: b;
	overflow: hidden;
	align-self: start;
`

const CardStyles = styled.div`
	color: #000;
	border: 2px solid pink;
	grid-area: a;
	overflow: hidden;
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
						return <div>No current APIs</div>
					}

					console.log('DATA', data)

					if (
						data !== undefined &&
						data.fetchCommentAPI !== undefined &&
						data.fetchCommentAPI !== null
					) {
						const {
							owner,
							createdAt,
							consumerKey,
							commentSections
						} = data.fetchCommentAPI

						return (
							<CommentAPILayout>
								<CardStyles>
									<Card>
										<Card.Content>
											<Card.Header>
												{' '}
												<h3>{owner.username}</h3>{' '}
											</Card.Header>

											<Card.Meta>
												Created at: {dayjs(createdAt).format('DD/MM/YYYY')}
											</Card.Meta>
											<Card.Description>
												<h4>Owner: {owner.username}</h4>
												<h4>Email: {owner.email}</h4>
												<h4>Consumer Key: {consumerKey}</h4>
											</Card.Description>
										</Card.Content>
									</Card>
								</CardStyles>
								<DetailSegment>
									This is where comment sections will go
									{commentSections &&
										commentSections.map(cs => {
											return (
												<Segment>
													<p>id: {cs.id}</p>
												</Segment>
											)
										})}
								</DetailSegment>
							</CommentAPILayout>
						)
					}
				}}
			</FetchCommentApiComponent>
		</div>
	)
}

export default withRouter(CommentAPIContainer)
