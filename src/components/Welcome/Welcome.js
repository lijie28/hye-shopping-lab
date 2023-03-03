import React from 'react';
import 'antd/dist/antd.css';
import { Button, Space } from 'antd';
import './Welcome.css';
import ShowPage from '../../App';
// import Paragraph from 'antd/lib/skeleton/Paragraph';

import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
// import { getProductImageUri, getPriceImageUri } from '../utils'
// import { products as productsConfig } from '../../product_config.json';

// const { Meta } = Card;

export class Welcome extends React.Component {

    // nextPage() {
    //     this.props.setShowPage(ShowPage.warmUp)
    // }

    render() {
        return (
            <div className='mainArea'>
                <div className='mainText'>
                    <Paragraph style={{ fontSize: 20, }}>
                        Thank you for participating in our research study.
                    </Paragraph>
                    <Paragraph style={{ fontSize: 20, }}>
                        We are interested in knowing how consumer evaluation product offerings on shopping platforms.
                    </Paragraph>
                    <Paragraph style={{ fontSize: 20, }}>
                        On the next few screens, you will be asked to indicate your experience with shopping platforms.
                    </Paragraph>
                    <Paragraph style={{ fontSize: 20, }}>
                        You will then enter a mock online store and will be ask to shop for a preferred product.
                    </Paragraph>
                    <Paragraph style={{ fontSize: 20, }}>
                        Lastly, you will be asked to evaluate the products you saw and provide demographic information.
                    </Paragraph>
                    <Paragraph style={{ fontSize: 20, }}>
                        When you are ready, proceed to the next page.
                    </Paragraph>

                    <br></br>
                    <div className='closeButton'>
                        <Button size="large" type="primary" onClick={this.props.nextPage}>Proceed</Button>
                    </div>
                </div>
            </div>
        )
    }
}