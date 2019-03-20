import { FormContainer, InputField } from '@binary-stash/common'
import { Formik } from 'formik'
import * as React from 'react'
import * as Yup from 'yup'
import { CreateApiServiceComponent } from '../../../apollo/components/apollo-components'

const validationSchema = Yup.object().shape({
	name: Yup.string().required()
})

const CreateProductContainer: React.FC = (): JSX.Element => {
	console.log('CREATE')
	return (
		<CreateApiServiceComponent>
			{mutate => {
				return (
					<React.Fragment>
						<h3>Create API Service</h3>
						<Formik
							initialValues={{ name: '' }}
							validationSchema={validationSchema}
							onSubmit={async (value, { resetForm }) => {
								const response = await mutate({
									variables: value
								})

								console.log(response)

								resetForm()
							}}
						>
							{props => (
								<FormContainer
									{...props}
									formInputs={[
										{
											type: 'text',
											component: InputField,
											name: 'name',
											value: '',
											placeholder: 'Name'
										}
									]}
								/>
							)}
						</Formik>
					</React.Fragment>
				)
			}}
		</CreateApiServiceComponent>
	)
}

export default CreateProductContainer
