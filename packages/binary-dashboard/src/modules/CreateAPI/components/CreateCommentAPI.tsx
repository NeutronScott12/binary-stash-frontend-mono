import { FormContainer, InputField } from '@binary-stash/common'
import { Formik } from 'formik'
import * as React from 'react'
import { Segment } from 'semantic-ui-react'
import { CreateCommentApiComponent } from '../../../apollo/components/apollo-components'

interface IProps {}

export const CreateCommentAPI: React.FC<IProps> = () => {
	return (
		<CreateCommentApiComponent>
			{mutate => {
				return (
					<React.Fragment>
						<Formik
							initialValues={{ name: '' }}
							onSubmit={async ({ name }) => {
								const response = await mutate({
									variables: {
										name
									}
								})

								console.log(response)
							}}
						>
							{props => {
								return (
									<Segment>
										<FormContainer
											{...props}
											formInputs={[
												{
													type: 'text',
													name: 'name',
													label: 'Name',
													placeholder: 'API Name',
													component: InputField
												}
											]}
										/>
									</Segment>
								)
							}}
						</Formik>
					</React.Fragment>
				)
			}}
		</CreateCommentApiComponent>
	)
}
