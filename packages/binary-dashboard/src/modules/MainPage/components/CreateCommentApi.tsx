import * as React from 'react'
import { CreateCommentApiComponent } from '../../../apollo/components/apollo-components'

interface IProps {}

export const CreateCommentAPI: React.FC<IProps> = () => {
	return (
		<CreateCommentApiComponent>
			{mutate => {
				return (
					<React.Fragment>
						<button
							onClick={async () => {
								await mutate({
									variables: {
										name: 'bob'
									}
								})
							}}
						>
							Create Comment API
						</button>
					</React.Fragment>
				)
			}}
		</CreateCommentApiComponent>
	)
}
