import React from 'react';
import 'antd/dist/antd.css';
import './ProductDetails.css';
import { Button, Image, Space, Row, Col, Modal } from 'antd';
import { post } from '../../api/api';
import { getPriceImageUri, getProductImageUri } from "../utils";
import { products as productsConfig } from '../../product_config.json';

export class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			okText: 'Copy Testing ID'
		}
	}

	checkout= () => {
		this.setState({
			modalVisible: true
		});

		const { data, products, prices } = this.props;
		// save to api
		console.log(`Submitting the data: ${JSON.stringify(data, null, 2)}`);
		post(data, true).then(res => {}).catch(err => {
			console.log('failed to save the data')
		});
	}

	copyTestingId() {
		let na = navigator.clipboard.writeText(this.props.data.version + this.props.data.user_id)
			.then(res => console.log(`${this.props.data.version + this.props.data.user_id} copied`))
			.catch(err => console.log(err))

		this.setState({
			okText: 'Copied!'
		})
	}

	render() {
		const { data, index, products, prices } = this.props;
		const productImageUri = getProductImageUri(products[index]);
		const priceImageUri = getPriceImageUri(prices[index]);

		return (
			<Row gutter={[16, 16]}>
				<Col span={8}>
					<Image src={productImageUri}/>
				</Col>
				<Col span={16}>
					<h1 style={{
						fontSize: '40px',
						fontWeight: 'bold'
					}}>
						{productsConfig[index].name}
					</h1>
					<p style={{
						fontSize: '20px',
					}}>{productsConfig[index].description}</p>
					<div>
						<img
							style={{
								height: '150px',
								width: '400px'
							}}
							src={priceImageUri}/>
					</div>
					<Space>
						<a>
							<Button size="large" type="default" onClick={this.props.backToMainPage.bind(this)}>Back</Button>
						</a>
						<Button size="large" type="primary" onClick={this.checkout}>Checkout</Button>
						<Modal
							title="Your response have been saved!"
							centered
							visible={this.state.modalVisible}
							onOk={() => this.copyTestingId()}
							closable={false}
							cancelButtonProps={{disabled: true}}
							okText={this.state.okText}
						>
							<p>Click the button to copy your testing ID and enter it back in the Qualtrics. Your testing ID is: <strong>{data.version + data.user_id}</strong></p>
						</Modal>
					</Space>
				</Col>
			</Row>
		)
	}
}