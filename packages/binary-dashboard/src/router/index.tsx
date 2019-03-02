import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { layout } from '../modules/MainPage/layout'
import { Spinner } from '../utils/components/MainSpinner'

interface IProps {}

export const Router: React.FC<IProps> = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={Spinner}>
				<Switch>
					<Route path="/" component={layout[0].component} />
				</Switch>
			</React.Suspense>
		</React.Fragment>
	)
}
