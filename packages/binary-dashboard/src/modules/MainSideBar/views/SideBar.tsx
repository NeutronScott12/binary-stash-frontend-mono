import * as React from 'react'
import { Link } from 'react-router-dom'
import { Divider, List } from 'semantic-ui-react'
import {
	FetchCommentApisFetchCommentApIs,
	Maybe
} from '../../../apollo/components/apollo-components'

interface IProps {
	commentAPI: Maybe<FetchCommentApisFetchCommentApIs>[]
}

export const MainPageSidebar: React.FC<IProps> = ({ commentAPI }) => {
	return (
		<List>
			<List.Header>
				<h3 style={{ color: '#FFF' }}>Products</h3>
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
