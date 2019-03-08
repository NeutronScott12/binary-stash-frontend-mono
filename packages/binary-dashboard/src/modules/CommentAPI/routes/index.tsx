import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

const CommentAPIContainer = React.lazy(() => import('../containers'))

interface IProps extends RouteComponentProps {}

export const CommentAPIRoutes: React.FC<IProps> = ({ match: { path } }) => {
	return (
		<React.Fragment>
			<Route path={`${path}/:id`} component={CommentAPIContainer} />
		</React.Fragment>
	)
}
