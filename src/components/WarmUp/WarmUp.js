import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './WarmUp.css';
// import { getProductImageUri, getPriceImageUri } from '../utils'
// import { products as productsConfig } from '../../product_config.json';

// const { Meta } = Card;

export class WarmUp extends React.Component {

    render() {
        return (
            <div className='center'>
                <div>
                    How much do you like the following shopping platforms?
                </div>

                <Button size="large" type="primary" onClick={this.props.skipWarmUp}>Proceed</Button>
            </div>
        )
    }
}