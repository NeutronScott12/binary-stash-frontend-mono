import { IRoute } from '../../../ts/types'
import { CommentAPIRoutes } from '../routes'

export const CommentAPIlayout: IRoute[] = [
	{
		path: '/app',
		component: CommentAPIRoutes,
		guest: false
	}
]
