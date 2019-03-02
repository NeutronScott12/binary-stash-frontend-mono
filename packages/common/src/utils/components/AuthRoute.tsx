import { gql } from 'apollo-boost'
import * as React from 'react'
import { Query } from 'react-apollo'
import { RouteComponentProps } from 'react-router'
import { Spinner } from './MainSpinner'

interface IProps extends RouteComponentProps {}

export const CURRENT_USER_QUERY = gql`
	query CurrentUserQuery {
		currentUser {
			email
			id
			username
		}
	}
`

export const AuthRoute: React.FC<IProps> = () => {
	return (
		<Query query={CURRENT_USER_QUERY}>
			{({ data, loading }) => {
				if (loading) {
					return <Spinner />
				}

				if (!loading && !data) {
					return 'Something went wrong'
				}

				return 'Successful'
			}}
		</Query>
	)
}
