import * as React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Icon, List } from 'semantic-ui-react'
import styled from 'styled-components'
import {
	FetchCommentApisFetchCommentApIs,
	Maybe
} from '../../../apollo/components/apollo-components'

interface IProps {
	commentAPI: Maybe<FetchCommentApisFetchCommentApIs>[]
}

const HeaderLayout = styled.div`
	color: #fff;
	display: flex;
	justify-content: content;
	flex-direction: row;

	h3 {
		flex-grow: 3;
	}
`

export const MainPageSidebar: React.FC<IProps> = ({ commentAPI }) => {
	return (
		<List>
			<List.Header>
				<HeaderLayout>
					<h3 style={{ color: '#FFF' }}>Products</h3>
					<Link to="/create">
						<Icon name="add" />
					</Link>
				</HeaderLayout>
			</List.Header>
			<Divider />
			{commentAPI.map((api, i) => {
				if (api) {
					return (
						<List.Item key={api.id}>
							<Link to={`/app/${api.id}`}>
								<h4>Name: {api.name}</h4>
							</Link>
						</List.Item>
					)
				} else {
					return <div key={Math.random() + i}>Currently no APIs</div>
				}
			})}
		</List>
	)
}
