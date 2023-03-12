import React from 'react';
// import 'antd/dist/antd.css';
import { Button, Space, Radio } from 'antd';
import './WarmUp.css';
import { Col, Row, Typography } from 'antd';
const { Paragraph } = Typography;

export class WarmUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amazonScore: null,
            targetScore: null,
            bestBuyScore: null,
        };
        this.spanSize = 3;

        this.radioSpanSize = ((window.innerWidth * 0.9 - 10 * 2) / 8 - 20);
        this.fontSize = 20;
    }

    updateDimensions = () => {
        this.setState({
            radioSpanSize: ((window.innerWidth * 0.9 - 10 * 2) / 8 - 20)
        });
    };

    componentDidMount() {
        console.log('componentDidMount');
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.removeEventListener('resize', this.updateDimensions);
    }

    amazonOnChange = (e: Event) => {

        this.setState({
            amazonScore: e.target.value
        })
    };

    targetOnChange = (e: Event) => {
        this.setState({
            targetScore: e.target.value
        })
    };

    bestBuyOnChange = (e: Event) => {
        this.setState({
            bestBuyScore: e.target.value
        })
    };

    onClick = () => {
        const { data } = this.props;
        data['amazon'] = `${this.state.amazonScore}`;
        data['target'] = `${this.state.targetScore}`;
        data['bestBuy'] = `${this.state.bestBuyScore}`;
        this.props.nextPage()
    }

    render() {
        return (
            <div className='mainArea'>
                <div className='WarmUpMainText'>
                    <Space direction="vertical" size={45} style={{ display: 'flex' }}>
                        <Paragraph style={{ fontSize: this.fontSize, }}>
                            How much do you like the following shopping websites?
                        </Paragraph>

                        <Row >
                            <Col span={this.spanSize}></Col>
                            <Col span={this.spanSize}>
                                <Paragraph style={{ fontSize: this.fontSize, }}>
                                    Dislike a great deal
                                </Paragraph>
                            </Col>
                            <Col span={this.spanSize}>
                                <Paragraph style={{ fontSize: this.fontSize, }}>
                                    Dislike a moderate amount
                                </Paragraph>
                            </Col>
                            <Col span={this.spanSize}>
                                <Paragraph style={{ fontSize: this.fontSize, }}>
                                    Dislike a litte
                                </Paragraph>
                            </Col>
                            <Col span={this.spanSize}>
                                <Paragraph style={{ fontSize: this.fontSize, }}>
                                    like nor dislike
                                </Paragraph>
                            </Col>
                            <Col span={this.spanSize}>
                                <Paragraph style={{ fontSize: this.fontSize, }}>
                                    Like a little
                                </Paragraph>
                            </Col>
                            <Col span={this.spanSize}>
                                <Paragraph style={{ fontSize: this.fontSize, }}>
                                    Like a moderate amount
                                </Paragraph>
                            </Col>
                            <Col span={this.spanSize}>
                                <Paragraph style={{ fontSize: this.fontSize, }}>
                                    Like a great deal
                                </Paragraph>
                            </Col>
                        </Row>

                        <Row justify="space-around" align="middle">
                            <Col span={this.spanSize}>
                                <div style={{ fontSize: this.fontSize, }}>
                                    Amazon
                                </div>
                            </Col>
                            <Col span={this.spanSize * 7}>
                                <Radio.Group name="Amazon" size={'large'} defaultValue={this.state.amazonScore} onChange={this.amazonOnChange}>
                                    <Space size={this.radioSpanSize} align='end'>

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
                                <div style={{ fontSize: this.fontSize, }}>
                                    Target
                                </div>
                            </Col>
                            <Col span={this.spanSize * 7}>
                                <Radio.Group name="Target" size={'large'} defaultValue={this.state.targetScore} onChange={this.targetOnChange}>
                                    <Space size={this.radioSpanSize}>
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
                                <div style={{ fontSize: this.fontSize, }}>
                                    BestBuy
                                </div>
                            </Col>
                            <Col span={this.spanSize * 7}>
                                <Radio.Group name="BestBuy" size={'large'} defaultValue={this.state.bestBuyScore} onChange={this.bestBuyOnChange}>
                                    <Space size={this.radioSpanSize}>
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
                            {((this.state.amazonScore === null) || (this.state.targetScore === null) || (this.state.bestBuyScore === null)) ? <Button size="large" type="primary" disabled>Proceed</Button> : <Button size="large" type="primary" onClick={this.onClick}>Proceed</Button>}
                        </div>
                    </Space>
                    {/* </div> */}
                </div>
            </div >
        )
    }
}