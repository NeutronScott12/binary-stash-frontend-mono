import * as React from 'react'
import { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { CreateCommentAPI } from '../components/CreateCommentAPI'

interface IProps {
	id: string
}

const CreateAPIContainer: React.FC<IProps> = ({ id }): JSX.Element => {
	const [commentOpen, changeCommentOpen] = useState(false)

	return (
		<div>
			<h2>Create API Container</h2>
			<Button onClick={() => changeCommentOpen(!commentOpen)}>Create Comment API</Button>
			<Button>Create Chat API</Button>
			{commentOpen && <CreateCommentAPI id={id} />}
		</div>
	)
}

export default CreateAPIContainer
