import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Typography, Space } from 'antd';
import './Instruction.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
const { Paragraph } = Typography;

export class Instruction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickable: false,
        };
        this.fontSize = 20;
    }

    onChange = (e: CheckboxChangeEvent) => {
        this.setState({
            clickable: e.target.checked
        })
    };

    render() {
        return (
            <div className='mainArea'>
                <div className='mainText'>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Paragraph style={{ fontSize: this.fontSize, }}>
                            Now imagine that you are in need of a handheld vacuum.
                        </Paragraph>
                        <Paragraph style={{ fontSize: this.fontSize, }}>
                            You decided to shop for a handheld vacuum online.
                        </Paragraph>
                        <Paragraph style={{ fontSize: this.fontSize, }}>
                            On the next page, you will enter a mock online store. Your task is to browse the products like you normally do and decide on which one you would like to purchase. Once you made you decision, click on “check out” and you will be directed back to the survey.
                        </Paragraph>

                        <Checkbox onChange={this.onChange}>
                            <Paragraph style={{ fontSize: this.fontSize, }}>
                                I understand the task and I am ready to proceed.
                            </Paragraph>
                        </Checkbox>
                        <div className='closeButton'>
                            {this.state.clickable ? <Button size="large" type="primary" onClick={this.props.nextPage}>Proceed</Button> : <Button size="large" type="primary" disabled>Proceed</Button>}
                        </div>
                    </Space>
                </div>
            </div >
        )
    }
}