import * as React from 'react'
import { Route } from 'react-router-dom'

const MainPageContainer = React.lazy(() => import('../containers'))

export const MainPageRoutes: React.FC = (): JSX.Element => (
	<React.Fragment>
		<Route path="/" component={MainPageContainer} />
	</React.Fragment>
)
