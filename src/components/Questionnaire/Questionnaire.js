import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import './Questionnaire.css';
import { getProductImageUri, getPriceImageUri } from '../utils'
import { products as productsConfig } from '../../product_config.json';
import { ProductCard } from '../ProductCard/ProductCard';

const { Meta } = Card;

export class Questionnaire extends React.Component {

	// constructor(props) {
	// 	super(props);
	// this.state = {
	//   showPage: ShowPage.welcome,
	//   recordMouseMoved: false,
	// };
	// }
	render() {
		// const { data, products, prices } = this.props;
		// const productImageUri = getProductImageUri(products[index]);
		// const priceImageUri = getPriceImageUri(prices[index]);

		return (
			<Row gutter={24}>
				<Col span={8} onClick={() => {
					// this.setShowPage(ShowPage.productDetails0)
				}}>
					<a>
						<ProductCard
							data={this.props.data}
							index={0}
							products={this.props.products}
							prices={this.props.prices} />
					</a>
				</Col>
				<Col span={8} onClick={() => {
					// this.setShowPage(ShowPage.productDetails1)
				}}>
					<a>
						<ProductCard
							data={this.props.data}
							index={1}
							products={this.props.products}
							prices={this.props.prices} />
					</a>
				</Col>
				<Col span={8} onClick={() => {
					// this.setShowPage(ShowPage.productDetails2)
				}}>
					<a>
						<ProductCard
							data={this.props.data}
							index={2}
							products={this.props.products}
							prices={this.props.prices} />
					</a>
				</Col>
			</Row>
		)
	}
}