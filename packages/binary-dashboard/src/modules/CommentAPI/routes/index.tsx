import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

const CommentAPIContainer = React.lazy(() => import('../containers'))

interface IProps extends RouteComponentProps {}

export const CommentAPIRoutes: React.FC<IProps> = () => {
	return (
		<React.Fragment>
			<Route path="/" component={CommentAPIContainer} />
		</React.Fragment>
	)
}
