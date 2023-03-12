import React from 'react';
// import 'antd/dist/antd.css';
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
                <div className='instructionmMainText'>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Paragraph style={{ fontSize: this.fontSize, }}>
                            Now imagine that you are in need of a coffee machine.
                        </Paragraph>
                        <Paragraph style={{ fontSize: this.fontSize, }}>
                            You have decided to shop for it online.
                        </Paragraph>
                        <Paragraph style={{ fontSize: this.fontSize, }}>
                            On the next page, you will be entering a online store created (mock) for this study.
                            Your task is to browse the products like you normally do and decide on which one you would like to purchase. Once you have made your decision, click on the “check out” button.
                            You will then be directed to a follow up survey to answer a few questions.

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