import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import client from './apollo'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<ApolloProvider client={client as any}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
