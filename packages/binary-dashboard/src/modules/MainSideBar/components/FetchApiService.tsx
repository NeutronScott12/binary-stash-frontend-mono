import * as React from 'react'
import { FetchApiServiceComponent } from '../../../apollo/components/apollo-components'
import { MainPageSidebar } from '../views/SideBar'

interface IProps {
	serviceId: string
}

const FetchAPIService: React.FC<IProps> = ({ serviceId }): JSX.Element => {
	console.log('SERVICEID', serviceId)

	return (
		<div>
			<FetchApiServiceComponent variables={{ id: serviceId }}>
				{({ loading, data, error }) => {
					if (loading) {
						return <div>...Loading</div>
					}

					if (!loading && !data) {
						return error
					}

					if (!loading && data && data.fetchApiService) {
						console.log('RESPONSE DATA', data)
						return <MainPageSidebar data={data.fetchApiService} />
					}
				}}
			</FetchApiServiceComponent>
		</div>
	)
}

export default FetchAPIService
