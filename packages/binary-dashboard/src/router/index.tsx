import { Spinner } from '@binary-stash/common'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { APIProductRoutes } from '../modules/APIProduct/routes'
import { CommentAPIlayout } from '../modules/CommentAPI/layout'
import { MainPagelayout } from '../modules/MainPage/layout'

interface IProps {}

export const Router: React.FC<IProps> = () => {
	return (
		<React.Fragment>
			<React.Suspense fallback={Spinner}>
				<Switch>
					<Route exact path="/" component={MainPagelayout[0].component} />
					<Route path="/product" component={APIProductRoutes[0].component} />

					<Route path="/app/comment-api" component={CommentAPIlayout[0].component} />
				</Switch>
			</React.Suspense>
		</React.Fragment>
	)
}
