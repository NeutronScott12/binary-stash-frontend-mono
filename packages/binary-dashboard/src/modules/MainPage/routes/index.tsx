import { Spinner } from '@binary-stash/common'
import * as React from 'react'
import { Route } from 'react-router-dom'

const MainPageContainer = React.lazy(() => import('../containers'))

export const MainPageRoutes: React.FC = (): JSX.Element => (
	<React.Fragment>
		<React.Suspense fallback={Spinner}>
			<Route path="/" component={MainPageContainer} />
		</React.Suspense>
	</React.Fragment>
)
