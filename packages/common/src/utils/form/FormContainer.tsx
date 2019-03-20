import { Field, Form } from 'formik'
import * as React from 'react'
import { Button } from 'semantic-ui-react'

interface IFormInput {
	prefix?: any
	component: any
	name: string
	type: string
	value: any
	placeholder: string
}

interface IProps {
	formInputs: IFormInput[]
	submitButton?: boolean
	reply?: boolean
	handleSubmit?: any
}

export const FormContainer: React.FunctionComponent<IProps> = (props): JSX.Element => {
	return (
		<Form>
			{props.formInputs.map((input: any, i: number) => (
				<Field
					key={i}
					name={input.name}
					type={input.type}
					value={input.value}
					prefix={input.prefix}
					placeholder={input.placeholder}
					component={input.component}
				/>
			))}

			{props.submitButton !== undefined ? (
				props.submitButton === true ? (
					<Button style={{ marginTop: '1rem' }} type="submit">
						Submit
					</Button>
				) : null
			) : (
				<Button style={{ marginTop: '1rem' }} type="submit">
					Submit
				</Button>
			)}
		</Form>
	)
}
