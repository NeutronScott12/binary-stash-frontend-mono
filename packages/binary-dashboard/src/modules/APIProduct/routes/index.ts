import { IRoute } from '../../../ts/types'
import { APIProductLayout } from '../layout'

export const APIProductRoutes: IRoute[] = [
	{
		path: '/',
		component: APIProductLayout,
		guest: false
	}
]
