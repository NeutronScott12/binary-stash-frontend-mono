import { RouteProps } from 'react-router'

export interface IRoute extends RouteProps {
	path: string
	guest?: boolean
	component: any
}
