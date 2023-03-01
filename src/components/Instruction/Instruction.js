import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './Instruction.css';
// import { getProductImageUri, getPriceImageUri } from '../utils'
// import { products as productsConfig } from '../../product_config.json';

// const { Meta } = Card;

export class Instruction extends React.Component {

    render() {
        return (
            <div className='center'>
                <div>
                    Now imagine that you are in need of a handheld vacuum.

                    You decided to shop for a handheld vacuum online.

                    On the next page, you will enter a mock online store. Your task is to browse the products like you normally do and decide on which one you would like to purchase. Once you made you decision, click on “check out” and you will be directed back to the survey.

                </div>

                <Button size="large" type="primary" onClick={this.props.skipInstruction}>Proceed</Button>
            </div>
        )
    }
}