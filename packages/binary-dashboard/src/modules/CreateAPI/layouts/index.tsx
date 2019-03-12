import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import CreateAPIContainer from '../container'

interface IProps extends RouteComponentProps {}

export const CreateAPILayout: React.FC<IProps> = ({ match: { path } }): JSX.Element => (
	<React.Fragment>
		<Route path={`${path}/`} component={CreateAPIContainer} />
	</React.Fragment>
)
