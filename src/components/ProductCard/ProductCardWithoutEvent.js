import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import './ProductCard.css';
import { getProductImageUri, getPriceImageUri } from '../utils'
import { products as productsConfig } from '../../product_config.json';

const { Meta } = Card;

export class ProductCardWithoutEvent extends React.Component {

    render() {
        const { index, products, prices } = this.props;
        const productImageUri = getProductImageUri(products[index]);
        const priceImageUri = getPriceImageUri(prices[index]);

        return (
            <div
                className="product-card">
                <Card
                    hoverable
                    cover={<img src={productImageUri} />}
                >
                    <Row gutter={20}>
                        <Col span={14}>
                            <Meta
                                title={index === 0 ? 'OfferA' : index === 1 ? 'OfferB' : 'OfferC'} />
                        </Col>
                        <Col span={6}>
                            <img
                                style={{
                                    width: '210px',
                                    height: '70px'
                                }} src={priceImageUri} />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}