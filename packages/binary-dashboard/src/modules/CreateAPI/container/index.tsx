import * as React from 'react'
import { Button } from 'semantic-ui-react'
import { CreateCommentAPI } from '../components/CreateCommentAPI'

const CreateAPIContainer: React.FC = (): JSX.Element => {
	return (
		<div>
			<h2>Create API Container</h2>
			<Button>Create Comment API</Button>
			<CreateCommentAPI />
		</div>
	)
}

export default CreateAPIContainer
