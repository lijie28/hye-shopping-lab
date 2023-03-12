import React from 'react';
// import 'antd/dist/antd.css';
import './ProductDetails.css';
import { Button, Image, Space, Row, Col, Modal, Typography } from 'antd';
import { post } from '../../api/api';
import { getPriceImageUri, getProductImageUri } from "../utils";
// import { productsConfig } from '../../product_config.json';
// import { products_config } from '../../product_config.js';
import { products_config as productsConfig } from '../../product_config.js';

const { Paragraph } = Typography;

export class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			cancelText: 'Back',
			okText: 'Confirm'
		}
	}

	checkout = () => {
		this.setState({
			modalVisible: true
		});
		// TODO: this.saveToApi
	}

	saveToApi = () => {
		const { data, index, products, prices } = this.props;
		data.checkout_item = products[index] + '' + prices[index];
		// save to api
		console.log(`Submitting the data: ${JSON.stringify(data, null, 2)}`);
		post(data, true).then(res => { }).catch(err => {
			console.log('failed to save the data', err)
		});
	}

	copyTestingId() {
		navigator.clipboard.writeText(this.props.data.version + this.props.data.session_id)
			.then(res => console.log(`${this.props.data.version + this.props.data.session_id} copied`))
			.catch(err => console.log(err))

		this.setState({
			okText: 'Copied!'
		})
	}

	buyConfirm = () => {
		const { data, index, products, prices } = this.props;
		data.checkout_item = products[index] + '' + prices[index];
		this.props.nextPage();
	}

	handleMouseMoveDetailsImage = (event) => {
		const { data, index, products, prices } = this.props;
		const imageKey = 'product_details_image_' + products[index] + '_' + prices[index];
		const now = Date.now();
		if (event.type === 'mouseenter') {
			data[imageKey].push(now + '-in');
			console.log(`Moved in ${imageKey} at: ${new Date(now).toLocaleString()}`)
		}
		if (event.type === 'mouseleave') {
			data[imageKey].push(now + '-out');
			console.log(`Moved out ${imageKey} at: ${new Date(now).toLocaleString()}`)
		}
	}

	handleMouseMoveDetailsTitleDescription = (event) => {
		const { data, index, products, prices } = this.props;
		const tdKey = 'product_details_tile_description_' + products[index] + '_' + prices[index];
		const now = Date.now();
		if (event.type === 'mouseenter') {
			data[tdKey].push(now + '-in');
			console.log(`Moved in ${tdKey} at: ${new Date(now).toLocaleString()}`)
		}
		if (event.type === 'mouseleave') {
			data[tdKey].push(now + '-out');
			console.log(`Moved out ${tdKey} at: ${new Date(now).toLocaleString()}`)
		}
	}

	handleMouseMoveDetailsPrice = (event) => {
		const { data, index, products, prices } = this.props;
		const priceKey = 'product_details_price_' + products[index] + '_' + prices[index];
		const now = Date.now();
		if (event.type === 'mouseenter') {
			data[priceKey].push(now + '-in');
			console.log(`Moved in ${priceKey} at: ${new Date(now).toLocaleString()}`)
		}
		if (event.type === 'mouseleave') {
			data[priceKey].push(now + '-out');
			console.log(`Moved out ${priceKey} at: ${new Date(now).toLocaleString()}`)
		}
	}

	render() {
		const { data, index, products, prices } = this.props;
		const productImageUri = getProductImageUri(products[index]);
		const priceImageUri = getPriceImageUri(prices[index]);

		return (
			<div className='detailMainArea'>
				<Row gutter={[16, 16]}>
					<Col span={8}>
						<Image onMouseEnter={this.handleMouseMoveDetailsImage}
							onMouseLeave={this.handleMouseMoveDetailsImage}
							src={productImageUri}
							preview={false} />
					</Col>
					<Col span={16}>
						<div onMouseEnter={this.handleMouseMoveDetailsTitleDescription}
							onMouseLeave={this.handleMouseMoveDetailsTitleDescription}>
							<h1 style={{
								fontSize: '30px',
								fontWeight: 'bold'
							}} >
								Product Overview
							</h1>
							<p className='detailText' style={{
								fontSize: '20px',
							}}>{productsConfig.products[index].description}</p>
							<br></br>
							<br></br>
							<h1 style={{
								fontSize: '30px',
								fontWeight: 'bold'
							}}>
								Highlights
							</h1>
							<p className='detailText' style={{
								fontSize: '20px',
							}}>{productsConfig.products[index].highlights}</p>
						</div>
						<div>
							<img
								onMouseEnter={this.handleMouseMoveDetailsPrice}
								onMouseLeave={this.handleMouseMoveDetailsPrice}
								style={{
									height: '150px',
									width: '400px'
								}}
								src={priceImageUri} />
						</div>
						<Space>
							<a>
								<Button size="large" type="default" onClick={this.props.backToMainPage.bind(this)}>Back</Button>
							</a>
							<Button size="large" type="primary" onClick={this.checkout}>Checkout</Button>
							<Modal
								centered
								visible={this.state.modalVisible}
								onOk={this.buyConfirm}
								onCancel={() =>
									this.setState({
										modalVisible: false
									})}
								okText={this.state.okText}
								cancelText={this.state.cancelText}
							>
								<p>
									<strong>I would like to purchase this product</strong>
									<br />
								</p>
							</Modal>
						</Space>
					</Col>
				</Row>
			</div>
		)
	}
}