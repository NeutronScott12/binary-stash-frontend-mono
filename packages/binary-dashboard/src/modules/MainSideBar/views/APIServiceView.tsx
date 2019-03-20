import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import { FetchApiServiceFetchApiService } from '../../../apollo/components/apollo-components'
import { BINARY_STASH_PRODUCT_ID } from '../../../contants'

interface IProps extends RouteComponentProps {
	product: FetchApiServiceFetchApiService
}

const APIServiceView: React.FC<IProps> = ({ product, history }): JSX.Element => (
	<React.Fragment>
		<List.Item>
			<List.Content>
				<List.Header
					onClick={() => {
						localStorage.setItem(BINARY_STASH_PRODUCT_ID, product.id)
						history.push(`/product/${product.id}`)
					}}
					as="a"
				>
					<h4>Name: {product.name}</h4>
				</List.Header>
			</List.Content>
		</List.Item>
	</React.Fragment>
)

export default withRouter(APIServiceView)
