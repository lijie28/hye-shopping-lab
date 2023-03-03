import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Space } from 'antd';
import './WarmUp.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
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
        this.fontSize = 20;
    }

    amazonOnChange = (e: CheckboxChangeEvent) => {
        this.setState({
            amazonScore: e.target.tabIndex
        })
    };

    targetOnChange = (e: CheckboxChangeEvent) => {
        this.setState({
            targetScore: e.target.tabIndex
        })
    };

    bestBuyOnChange = (e: CheckboxChangeEvent) => {
        this.setState({
            bestBuyScore: e.target.tabIndex
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
                <div className='mainText'>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Paragraph style={{ fontSize: this.fontSize, }}>
                            How much do you like the following shopping platforms?
                        </Paragraph>

                        <Row>
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

                        <Row>
                            <Col span={this.spanSize}>
                                <Paragraph style={{ fontSize: this.fontSize, }}>
                                    Amazon
                                </Paragraph>
                            </Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.amazonScore === 0} onChange={this.amazonOnChange} tabIndex={0} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.amazonScore === 1} onChange={this.amazonOnChange} tabIndex={1} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.amazonScore === 2} onChange={this.amazonOnChange} tabIndex={2} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.amazonScore === 3} onChange={this.amazonOnChange} tabIndex={3} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.amazonScore === 4} onChange={this.amazonOnChange} tabIndex={4} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.amazonScore === 5} onChange={this.amazonOnChange} tabIndex={5} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.amazonScore === 6} onChange={this.amazonOnChange} tabIndex={6} /></Col>
                        </Row>

                        <Row>
                            <Col span={this.spanSize}>
                                <Paragraph style={{ fontSize: this.fontSize, }}>
                                    Target
                                </Paragraph>
                            </Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.targetScore === 0} onChange={this.targetOnChange} tabIndex={0} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.targetScore === 1} onChange={this.targetOnChange} tabIndex={1} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.targetScore === 2} onChange={this.targetOnChange} tabIndex={2} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.targetScore === 3} onChange={this.targetOnChange} tabIndex={3} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.targetScore === 4} onChange={this.targetOnChange} tabIndex={4} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.targetScore === 5} onChange={this.targetOnChange} tabIndex={5} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.targetScore === 6} onChange={this.targetOnChange} tabIndex={6} /></Col>
                        </Row>
                        {/* <br /> */}
                        <Row>
                            <Col span={this.spanSize}>
                                <Paragraph style={{ fontSize: this.fontSize, }}>
                                    BestBuy
                                </Paragraph>
                            </Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.bestBuyScore === 0} onChange={this.bestBuyOnChange} tabIndex={0} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.bestBuyScore === 1} onChange={this.bestBuyOnChange} tabIndex={1} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.bestBuyScore === 2} onChange={this.bestBuyOnChange} tabIndex={2} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.bestBuyScore === 3} onChange={this.bestBuyOnChange} tabIndex={3} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.bestBuyScore === 4} onChange={this.bestBuyOnChange} tabIndex={4} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.bestBuyScore === 5} onChange={this.bestBuyOnChange} tabIndex={5} /></Col>
                            <Col span={this.spanSize}><Checkbox checked={this.state.bestBuyScore === 6} onChange={this.amazonOnChange} tabIndex={6} /></Col>
                        </Row>
                        {/* <br /> */}


                        <div className='closeButton'>
                            {((this.state.amazonScore === null) || (this.state.targetScore === null) || (this.state.bestBuyScore === null)) ? <Button size="large" type="primary" disabled>Proceed</Button> : <Button size="large" type="primary" onClick={this.onClick}>Proceed</Button>}
                        </div>
                    </Space>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}