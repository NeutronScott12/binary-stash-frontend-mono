import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CommentAPIlayout } from '../modules/CommentAPI/layout'
import { MainPagelayout } from '../modules/MainPage/layout'

interface IProps {}

export const Router: React.FC<IProps> = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={MainPagelayout[0].component} />
					<Route path="/app" component={CommentAPIlayout[0].component} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	)
}
