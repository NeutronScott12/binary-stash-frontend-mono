import { IRoute } from '../../../ts/types'
import { CommentAPIRoutes } from '../routes'

export const CommentAPIlayout: IRoute[] = [
	{
		path: '/:id',
		component: CommentAPIRoutes,
		guest: false
	}
]
