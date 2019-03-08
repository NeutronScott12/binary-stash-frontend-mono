import * as React from 'react'
import { Button } from 'semantic-ui-react'
import { CreateCommentApiComponent } from '../../../apollo/components/apollo-components'

interface IProps {}

export const CreateCommentAPI: React.FC<IProps> = () => {
	return (
		<CreateCommentApiComponent>
			{mutate => {
				return (
					<React.Fragment>
						<Button
							onClick={async () => {
								await mutate({
									variables: {
										name: 'bob'
									}
								})
							}}
						>
							Create Comment API
						</Button>
					</React.Fragment>
				)
			}}
		</CreateCommentApiComponent>
	)
}
