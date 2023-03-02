import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './Welcome.css';
import ShowPage from '../../App';
// import { getProductImageUri, getPriceImageUri } from '../utils'
// import { products as productsConfig } from '../../product_config.json';

// const { Meta } = Card;

export class Welcome extends React.Component {

    // nextPage() {
    //     this.props.setShowPage(ShowPage.warmUp)
    // }

    render() {
        return (
            <div className='center'>
                <div>
                    Thank you for participating in our research study.

                    We are interested in knowing how consumer evaluation product offerings on shopping platforms.

                    On the next few screens, you will be asked to indicate your experience with shopping platforms.

                    You will then enter a mock online store and will be ask to shop for a preferred product.

                    Lastly, you will be asked to evaluate the products you saw and provide demographic information.

                    When you are ready, proceed to the next page.
                </div>

                <Button size="large" type="primary" onClick={this.props.nextPage}>Proceed</Button>
            </div>
        )
    }
}