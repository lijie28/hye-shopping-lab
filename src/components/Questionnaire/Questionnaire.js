import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Space, Checkbox, Button, Typography } from 'antd';
import './Questionnaire.css';
import { getProductImageUri, getPriceImageUri } from '../utils'
import { products as productsConfig } from '../../product_config.json';
import { ProductCardWithoutEvent } from '../ProductCard/ProductCardWithoutEvent';
const { Paragraph } = Typography;
const { Meta } = Card;

export class Questionnaire extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			offerAScore: null,
			offerBScore: null,
			offerCScore: null,
		};
		this.spanSize = 3;
		this.fontSize = 15;
	}

	offerAOnChange = (e: CheckboxChangeEvent) => {
		this.setState({
			offerAScore: e.target.tabIndex
		})
	};

	offerBOnChange = (e: CheckboxChangeEvent) => {
		this.setState({
			offerBScore: e.target.tabIndex
		})
	};

	offerCOnChange = (e: CheckboxChangeEvent) => {
		this.setState({
			offerCScore: e.target.tabIndex
		})
	};

	onClick = () => {
		const { data, nextPage } = this.props;
		data['offerA'] = `${this.state.offerAScore}`
		data['offerB'] = `${this.state.offerBScore}`
		data['offerC'] = `${this.state.offerCScore}`
		nextPage()
	}

	render() {
		const { data, products, prices } = this.props;
		return (
			<div className='mainArea'>
				<Space direction="vertical" style={{ display: 'flex' }}>
					<Row gutter={24}>
						<Col span={8} >
							{/* <a> */}
							<ProductCardWithoutEvent
								data={data}
								index={0}
								products={products}
								prices={prices} />
							{/* </a> */}
						</Col>
						<Col span={8}>
							{/* <a> */}
							<ProductCardWithoutEvent
								data={data}
								index={1}
								products={products}
								prices={prices} />
							{/* </a> */}
						</Col>
						<Col span={8}>
							{/* <a> */}
							<ProductCardWithoutEvent
								data={data}
								index={2}
								products={products}
								prices={prices} />
							{/* </a> */}
						</Col>
					</Row>

					<Row>
						<Col span={this.spanSize}>
						</Col>
						<Col span={this.spanSize}>

							<Paragraph style={{ fontSize: this.fontSize, }}>
								Not Irritated
							</Paragraph>
						</Col>
						<Col span={this.spanSize}>

						</Col>
						<Col span={this.spanSize}>

						</Col>
						<Col span={this.spanSize}>

						</Col>
						<Col span={this.spanSize}>

						</Col>
						<Col span={this.spanSize}>

						</Col>
						<Col span={this.spanSize}>

							<Paragraph style={{ fontSize: this.fontSize, }}>
								Irritated
							</Paragraph>
						</Col>
					</Row>


					<Row>
						<Col span={this.spanSize}>
							<Paragraph style={{ fontSize: this.fontSize, }}>
								Looking at Offer A makes me feel
							</Paragraph>
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerAScore == 1} onChange={this.offerAOnChange} tabIndex={1} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerAScore == 2} onChange={this.offerAOnChange} tabIndex={2} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerAScore == 3} onChange={this.offerAOnChange} tabIndex={3} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerAScore == 4} onChange={this.offerAOnChange} tabIndex={4} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerAScore == 5} onChange={this.offerAOnChange} tabIndex={5} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerAScore == 6} onChange={this.offerAOnChange} tabIndex={6} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerAScore == 7} onChange={this.offerAOnChange} tabIndex={7} />
						</Col>
					</Row>

					<Row>
						<Col span={this.spanSize}>
							<Paragraph style={{ fontSize: this.fontSize, }}>
								Looking at Offer C makes me feel
							</Paragraph>
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerBScore == 1} onChange={this.offerBOnChange} tabIndex={1} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerBScore == 2} onChange={this.offerBOnChange} tabIndex={2} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerBScore == 3} onChange={this.offerBOnChange} tabIndex={3} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerBScore == 4} onChange={this.offerBOnChange} tabIndex={4} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerBScore == 5} onChange={this.offerBOnChange} tabIndex={5} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerBScore == 6} onChange={this.offerBOnChange} tabIndex={6} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerBScore == 7} onChange={this.offerBOnChange} tabIndex={7} />
						</Col>
					</Row>

					<Row>
						<Col span={this.spanSize}>
							<Paragraph style={{ fontSize: this.fontSize, }}>
								Looking at Offer C makes me feel
							</Paragraph>
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerCScore == 1} onChange={this.offerCOnChange} tabIndex={1} />
						</Col>
						<Col span={this.spanSize}>

							<Checkbox checked={this.state.offerCScore == 2} onChange={this.offerCOnChange} tabIndex={2} />
						</Col>
						<Col span={this.spanSize}>

							<Checkbox checked={this.state.offerCScore == 3} onChange={this.offerCOnChange} tabIndex={3} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerCScore == 4} onChange={this.offerCOnChange} tabIndex={4} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerCScore == 5} onChange={this.offerCOnChange} tabIndex={5} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerCScore == 6} onChange={this.offerCOnChange} tabIndex={6} />
						</Col>
						<Col span={this.spanSize}>
							<Checkbox checked={this.state.offerCScore == 7} onChange={this.offerCOnChange} tabIndex={7} />
						</Col>
					</Row>

					<div className='closeButton'>
						{((this.state.offerAScore == null) || (this.state.offerBScore == null) || (this.state.offerCScore == null)) ? <Button size="large" type="primary" disabled>Proceed</Button> : <Button size="large" type="primary" onClick={this.onClick}>Proceed</Button>}
					</div>
				</Space>
			</div>
		)
	}
}