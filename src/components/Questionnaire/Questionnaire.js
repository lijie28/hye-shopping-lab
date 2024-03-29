import React from 'react';

import { Row, Col, Space, Checkbox, Button, Typography, Radio } from 'antd';
import './Questionnaire.css';
import { ProductCardWithoutEvent } from '../ProductCard/ProductCardWithoutEvent';
const { Paragraph } = Typography;

export class Questionnaire extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			offerAScore: null,
			offerBScore: null,
			offerCScore: null,
		};
		this.spanSize = 3;
		this.radioSpanSize = ((window.innerWidth * 0.9 - 10 * 2) / 8 - 20);
		this.fontSize = 18;
	}

	offerAOnChange = (e: Event) => {
		this.setState({
			offerAScore: e.target.value
		})
	};

	offerBOnChange = (e: Event) => {
		this.setState({
			offerBScore: e.target.value
		})
	};

	offerCOnChange = (e: Event) => {
		this.setState({
			offerCScore: e.target.value
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
				<Space direction="vertical" style={{ display: 'flex' }} >
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

					<br></br>
					<Row align='center' className='row-title'>
						<Col span={this.spanSize} align='center'>
						</Col>
						<Col span={this.spanSize} align='center'>
							<Paragraph style={{ fontSize: this.fontSize, }}>
								<strong>Not Irritated</strong><br />1
							</Paragraph>
						</Col>
						<Col span={this.spanSize}>
							<Paragraph style={{ fontSize: this.fontSize, }}>
								<br />2
							</Paragraph>
						</Col>
						<Col span={this.spanSize}>
							<Paragraph style={{ fontSize: this.fontSize, }}>
								<br />3
							</Paragraph>
						</Col>
						<Col span={this.spanSize}>
							<Paragraph style={{ fontSize: this.fontSize, }}>
								<br />4
							</Paragraph>
						</Col>
						<Col span={this.spanSize}>
							<Paragraph style={{ fontSize: this.fontSize, }}>
								<br />5
							</Paragraph>
						</Col>
						<Col span={this.spanSize}>
							<Paragraph style={{ fontSize: this.fontSize, }}>
								<br />6
							</Paragraph>
						</Col>
						<Col span={this.spanSize}>
							<Paragraph style={{ fontSize: this.fontSize, }}>
								<strong>Irritated</strong><br />7
							</Paragraph>
						</Col>
					</Row>

					<Row justify="space-around" align="middle">
						<Col span={this.spanSize}>
							<p style={{ fontSize: this.fontSize }}>
								<strong>Looking at Offer A</strong> makes me feel
							</p>
						</Col>
						<Col span={this.spanSize * 7}>
							<Radio.Group name="A" size={'large'} defaultValue={this.state.offerAScore} onChange={this.offerAOnChange}>
								<Space size={this.radioSpanSize} >
									<Radio value={1}></Radio>
									<Radio value={2}></Radio>
									<Radio value={3}></Radio>
									<Radio value={4}></Radio>
									<Radio value={5}></Radio>
									<Radio value={6}></Radio>
									<Radio value={7}></Radio>
								</Space>
							</Radio.Group>
						</Col>
					</Row>

					<Row justify="space-around" align="middle">
						<Col span={this.spanSize}>
							<p style={{ fontSize: this.fontSize, }}>
								<strong> Looking at Offer B</strong> makes me feel
							</p>
						</Col>
						<Col span={this.spanSize * 7}>
							<Radio.Group name="B" size={'large'} defaultValue={this.state.offerBScore} onChange={this.offerBOnChange}>
								<Space size={this.radioSpanSize} align='center' >
									<Radio value={1}></Radio>
									<Radio value={2}></Radio>
									<Radio value={3}></Radio>
									<Radio value={4}></Radio>
									<Radio value={5}></Radio>
									<Radio value={6}></Radio>
									<Radio value={7}></Radio>
								</Space>
							</Radio.Group>
						</Col>
					</Row>


					<Row justify="space-around" align="middle">
						<Col span={this.spanSize}>
							<p style={{ fontSize: this.fontSize, }}>
								<strong>Looking at Offer C</strong> makes me feel
							</p>
						</Col>
						<Col span={this.spanSize * 7}>
							<Radio.Group name="C" size={'large'} defaultValue={this.state.offerCScore} onChange={this.offerCOnChange}>
								<Space size={this.radioSpanSize} >
									<Radio value={1}></Radio>
									<Radio value={2}></Radio>
									<Radio value={3}></Radio>
									<Radio value={4}></Radio>
									<Radio value={5}></Radio>
									<Radio value={6}></Radio>
									<Radio value={7}></Radio>
								</Space>
							</Radio.Group>
						</Col>
					</Row>

					<div className='closeButton'>
						{((this.state.offerAScore == null) || (this.state.offerBScore == null) || (this.state.offerCScore == null)) ? <Button size="large" type="primary" disabled>Proceed</Button> : <Button size="large" type="primary" onClick={this.onClick}>Proceed</Button>}
					</div>
				</Space>
			</div >
		)
	}
}