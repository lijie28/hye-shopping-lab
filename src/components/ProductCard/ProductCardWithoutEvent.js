import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Space, Typography } from 'antd';
import './ProductCard.css';
import { getProductImageUri, getPriceImageUri } from '../utils'
const { Paragraph } = Typography;
const { Meta } = Card;

export class ProductCardWithoutEvent extends React.Component {

    render() {
        const { index, products, prices } = this.props;
        const productImageUri = getProductImageUri(products[index]);
        const priceImageUri = getPriceImageUri(prices[index]);

        return (
            <div
                className="product-card">
                <Space direction="vertical" style={{ display: 'flex' }}>
                    <div className='centerCard'>
                        <img className='centerImg' src={productImageUri} />
                    </div>
                    <Space>
                        {/* <div className='centerBox'> */}
                        <Paragraph style={{ fontSize: 23, }}>
                            {/* <div className='centerText'> */}
                            {index === 0 ? 'Offer A' : index === 1 ? 'Offer B' : 'Offer C'}
                            {/* </div> */}
                        </Paragraph>
                        {/* </div> */}
                        <img
                            style={{
                                width: '210px',
                                height: '70px'
                            }} src={priceImageUri} />
                    </Space>

                </Space>
            </div >
        )
    }
}