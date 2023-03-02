import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Space, Checkbox, Button } from 'antd';
import './Questionnaire.css';
import { getProductImageUri, getPriceImageUri } from '../utils'
import { products as productsConfig } from '../../product_config.json';
import { ProductCardWithoutEvent } from '../ProductCard/ProductCardWithoutEvent';

const { Meta } = Card;

export class Questionnaire extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			offerAScore: null,
			offerBScore: null,
			offerCScore: null,
		};
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
			<div>
				<Row gutter={24}>
					<Col span={8} onClick={() => {
						// this.setShowPage(ShowPage.productDetails0)
					}}>
						<a>
							<ProductCardWithoutEvent
								data={data}
								index={0}
								products={products}
								prices={prices} />
						</a>
					</Col>
					<Col span={8} onClick={() => {
						// this.setShowPage(ShowPage.productDetails1)
					}}>
						<a>
							<ProductCardWithoutEvent
								data={data}
								index={1}
								products={products}
								prices={prices} />
						</a>
					</Col>
					<Col span={8} onClick={() => {
						// this.setShowPage(ShowPage.productDetails2)
					}}>
						<a>
							<ProductCardWithoutEvent
								data={data}
								index={2}
								products={products}
								prices={prices} />
						</a>
					</Col>
				</Row>

				<Space >
					<div className='box'>
						<br />
						<br />Offer A
						<br />Offer B
						<br />Offer C
					</div>
				</Space>
				<Space>
					<div className='box'>Not Irritated<br />1
						<br /><Checkbox checked={this.state.offerAScore == 1} onChange={this.offerAOnChange} tabIndex={1} />
						<br /><Checkbox checked={this.state.offerBScore == 1} onChange={this.offerBOnChange} tabIndex={1} />
						<br />
						<Checkbox checked={this.state.offerCScore == 1} onChange={this.offerCOnChange} tabIndex={1} />
					</div>
				</Space>
				<Space>
					<div className='box'><br />2
						<br /><Checkbox checked={this.state.offerAScore == 2} onChange={this.offerAOnChange} tabIndex={2} />
						<br /><Checkbox checked={this.state.offerBScore == 2} onChange={this.offerBOnChange} tabIndex={2} />
						<br />
						<Checkbox checked={this.state.offerCScore == 2} onChange={this.offerCOnChange} tabIndex={2} />
					</div>
				</Space>
				<Space>
					<div className='box'><br />3
						<br /><Checkbox checked={this.state.offerAScore == 3} onChange={this.offerAOnChange} tabIndex={3} />
						<br /><Checkbox checked={this.state.offerBScore == 3} onChange={this.offerBOnChange} tabIndex={3} />
						<br />
						<Checkbox checked={this.state.offerCScore == 3} onChange={this.offerCOnChange} tabIndex={3} />
					</div>
				</Space>
				<Space>
					<div className='box'><br />4
						<br /><Checkbox checked={this.state.offerAScore == 4} onChange={this.offerAOnChange} tabIndex={4} />
						<br /><Checkbox checked={this.state.offerBScore == 4} onChange={this.offerBOnChange} tabIndex={4} />
						<br />
						<Checkbox checked={this.state.offerCScore == 4} onChange={this.offerCOnChange} tabIndex={4} />
					</div>
				</Space>
				<Space>
					<div className='box'><br />5
						<br /><Checkbox checked={this.state.offerAScore == 5} onChange={this.offerAOnChange} tabIndex={5} />
						<br /><Checkbox checked={this.state.offerBScore == 5} onChange={this.offerBOnChange} tabIndex={5} />
						<br />
						<Checkbox checked={this.state.offerCScore == 5} onChange={this.offerCOnChange} tabIndex={5} />
					</div>
				</Space>
				<Space>
					<div className='box'><br />6
						<br /><Checkbox checked={this.state.offerAScore == 6} onChange={this.offerAOnChange} tabIndex={6} />
						<br /><Checkbox checked={this.state.offerBScore == 6} onChange={this.offerBOnChange} tabIndex={6} />
						<br />
						<Checkbox checked={this.state.offerCScore == 6} onChange={this.offerCOnChange} tabIndex={6} />
					</div>
				</Space>
				<Space>
					<div className='box'>Irritated<br />7
						<br /><Checkbox checked={this.state.offerAScore == 7} onChange={this.offerAOnChange} tabIndex={7} />
						<br /><Checkbox checked={this.state.offerBScore == 7} onChange={this.offerBOnChange} tabIndex={7} />
						<br />
						<Checkbox checked={this.state.offerCScore == 7} onChange={this.offerCOnChange} tabIndex={7} />
					</div>
				</Space>
				<br />
				{((this.state.offerAScore == null) || (this.state.offerBScore == null) || (this.state.offerCScore == null)) ? <Button size="large" type="primary" disabled>Proceed</Button> : <Button size="large" type="primary" onClick={this.onClick}>Proceed</Button>}
			</div>
		)
	}
}