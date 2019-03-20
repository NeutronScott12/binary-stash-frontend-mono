import * as React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Icon, List } from 'semantic-ui-react'
import { FetchApiServiceFetchApiService } from '../../../apollo/components/apollo-components'
import { HeaderLayout } from '../styles'

interface IProps {
	data: FetchApiServiceFetchApiService
}

export const MainPageSidebar: React.FC<IProps> = ({ data }) => {
	console.log('MYDATA', data)

	return (
		<List>
			<List.Header>
				<HeaderLayout>
					<h3 style={{ color: '#FFF' }}>Apps</h3>
					<Link to="/create">
						<Icon name="add" />
					</Link>
				</HeaderLayout>
			</List.Header>
			<Divider />
			{data.commentAPIs !== null && data.commentAPIs.length > 0 && (
				<h4 style={{ color: '#FFF' }}>Comment APIs</h4>
			)}
			{data.commentAPIs &&
				data.commentAPIs.map((api, i) => {
					if (api) {
						return (
							<List.Item key={api.id}>
								<Link to={`/app/comment-api/${api.id}`}>
									<h4>Name: {api.name}</h4>
								</Link>
							</List.Item>
						)
					} else {
						return <div key={Math.random() + i}>Currently no APIs</div>
					}
				})}

			<Divider />
		</List>
	)
}
