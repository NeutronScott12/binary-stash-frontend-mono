import { IRoute } from '../../../ts/types'
import { MainPageRoutes } from '../routes'

export const MainPagelayout: IRoute[] = [
	{
		path: '/',
		component: MainPageRoutes,
		guest: false
	}
]
