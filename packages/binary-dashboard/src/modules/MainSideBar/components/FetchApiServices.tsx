import * as React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Icon, List } from 'semantic-ui-react'
import { FetchApiServicesComponent } from '../../../apollo/components/apollo-components'
import { HeaderLayout } from '../styles'
import APIServiceView from '../views/APIServiceView'

export const FetchApiServices: React.FC = (): JSX.Element => {
	return (
		<FetchApiServicesComponent>
			{({ loading, data, error }) => {
				if (loading) {
					return <div>...Loading</div>
				}

				if (!loading && !data) {
					return JSON.stringify(error)
				}

				if (data && data.fetchApiServices) {
					return (
						<React.Fragment>
							<List>
								<List.Header>
									<HeaderLayout>
										<h3 style={{ color: '#FFF' }}>Services</h3>
										<Link to="/product/create">
											<Icon name="add" />
										</Link>
									</HeaderLayout>
								</List.Header>
								<Divider />
								{data.fetchApiServices.map(product => (
									<APIServiceView key={product.id} product={product} />
								))}
							</List>
						</React.Fragment>
					)
				}
			}}
		</FetchApiServicesComponent>
	)
}
