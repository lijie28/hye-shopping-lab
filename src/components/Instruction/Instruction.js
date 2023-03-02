import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox } from 'antd';
import './Instruction.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

export class Instruction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickable: false,
        };
    }

    onChange = (e: CheckboxChangeEvent) => {
        this.setState({
            clickable: e.target.checked
        })
    };

    render() {
        return (
            <div className='center'>
                <div>
                    Now imagine that you are in need of a handheld vacuum.
                    <br />You decided to shop for a handheld vacuum online.
                    <br />On the next page, you will enter a mock online store. Your task is to browse the products like you normally do and decide on which one you would like to purchase. Once you made you decision, click on “check out” and you will be directed back to the survey.
                    <br /><Checkbox onChange={this.onChange}>I understand the task and I am ready to proceed.</Checkbox>
                </div>
                {this.state.clickable ? <Button size="large" type="primary" onClick={this.props.nextPage}>Proceed</Button> : <Button size="large" type="primary" disabled>Proceed</Button>}

            </div>
        )
    }
}