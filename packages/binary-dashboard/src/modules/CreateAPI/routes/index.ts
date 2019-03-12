import { IRoute } from '../../../ts/types'
import { CreateAPILayout } from '../layouts'

export const CreateAPIRoutes: IRoute[] = [
	{
		path: '/create',
		component: CreateAPILayout,
		guest: false
	}
]
