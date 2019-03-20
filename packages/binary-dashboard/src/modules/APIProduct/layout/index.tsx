import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import APIProductContainer from '../containers'
import CreateProductContainer from '../containers/CreateProductContainer'

interface IProps extends RouteComponentProps {}

export const APIProductLayout: React.FC<IProps> = ({ match: { path } }): JSX.Element => {
	console.log('WORKING', path)

	return (
		<React.Fragment>
			<Route path={`${path}/:serviceId`} component={APIProductContainer} />
			{/* <Route path={`${path}/:serviceId`} render={() => <h4>Working</h4>} /> */}
			<Route exact path={`${path}/create`} component={CreateProductContainer} />
		</React.Fragment>
	)
}
