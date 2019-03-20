import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import { FetchApiServiceComponent } from '../../../apollo/components/apollo-components'
import CreateAPIContainer from '../../CreateAPI/container'

const ProductContainer = styled.div`
	color: #fff;
	/* position: absolute; */
	padding: 0.5rem;
	width: 100%;
	border: 3px solid pink;
`

const APIProductContainer: React.FC<RouteComponentProps<{ serviceId: string }>> = ({
	match: {
		params: { serviceId }
	}
}): JSX.Element => {
	console.log('ID', serviceId)
	return (
		<div>
			<FetchApiServiceComponent variables={{ id: serviceId }}>
				{({ loading, data }) => {
					if (loading) {
						return <div>loading...</div>
					}

					if (data === undefined && !loading) {
						return <div>Error</div>
					}

					if (
						data !== undefined &&
						data.fetchApiService !== undefined &&
						data.fetchApiService !== null
					) {
						return (
							<ProductContainer>
								<h2>{data.fetchApiService.name}</h2>
								<CreateAPIContainer id={data.fetchApiService.id} />
							</ProductContainer>
						)
					}

					return null
				}}
			</FetchApiServiceComponent>
		</div>
	)
}

export default APIProductContainer
