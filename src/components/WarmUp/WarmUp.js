import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Space } from 'antd';
import './WarmUp.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

export class WarmUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amazonScore: null,
            targetScore: null,
            bestBuyScore: null,
        };
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

    amazonClick
    render() {
        return (
            <div className='center'>
                <div>
                    How much do you like the following shopping platforms?
                </div>
                <Space >
                    <div className='box'>
                        <br />
                        <br />
                        <br />Amazon
                        <br />Target
                        <br />BestBuyScore
                    </div>
                </Space>
                <Space>
                    <div className='box'>Dislike <br />a great <br />deal
                        <br /><Checkbox checked={this.state.amazonScore == 0} onChange={this.amazonOnChange} tabIndex={0} />
                        <br /><Checkbox checked={this.state.targetScore == 0} onChange={this.targetOnChange} tabIndex={0} />
                        <br />
                        <Checkbox checked={this.state.bestBuyScore == 0} onChange={this.bestBuyOnChange} tabIndex={0} />
                    </div>
                </Space>
                <Space>
                    <div className='box'>Dislike a <br />moderate <br />amount
                        <br /><Checkbox checked={this.state.amazonScore == 1} onChange={this.amazonOnChange} tabIndex={1} />
                        <br /><Checkbox checked={this.state.targetScore == 1} onChange={this.targetOnChange} tabIndex={1} />
                        <br />
                        <Checkbox checked={this.state.bestBuyScore == 1} onChange={this.bestBuyOnChange} tabIndex={1} />
                    </div>
                </Space>
                <Space>
                    <div className='box'><br />Dislike <br />a litte
                        <br /><Checkbox checked={this.state.amazonScore == 2} onChange={this.amazonOnChange} tabIndex={2} />
                        <br /><Checkbox checked={this.state.targetScore == 2} onChange={this.targetOnChange} tabIndex={2} />
                        <br />
                        <Checkbox checked={this.state.bestBuyScore == 2} onChange={this.bestBuyOnChange} tabIndex={2} />
                    </div>
                </Space>
                <Space>
                    <div className='box'>Neither <br />like nor<br /> dislike
                        <br /><Checkbox checked={this.state.amazonScore == 3} onChange={this.amazonOnChange} tabIndex={3} />
                        <br /><Checkbox checked={this.state.targetScore == 3} onChange={this.targetOnChange} tabIndex={3} />
                        <br />
                        <Checkbox checked={this.state.bestBuyScore == 3} onChange={this.bestBuyOnChange} tabIndex={3} />
                    </div>
                </Space>
                <Space>
                    <div className='box'><br />Like a <br />little
                        <br /><Checkbox checked={this.state.amazonScore == 4} onChange={this.amazonOnChange} tabIndex={4} />
                        <br /><Checkbox checked={this.state.targetScore == 4} onChange={this.targetOnChange} tabIndex={4} />
                        <br />
                        <Checkbox checked={this.state.bestBuyScore == 4} onChange={this.bestBuyOnChange} tabIndex={4} />
                    </div>
                </Space>
                <Space>
                    <div className='box'>Like a <br />moderate <br />amount
                        <br /><Checkbox checked={this.state.amazonScore == 5} onChange={this.amazonOnChange} tabIndex={5} />
                        <br /><Checkbox checked={this.state.targetScore == 5} onChange={this.targetOnChange} tabIndex={5} />
                        <br />
                        <Checkbox checked={this.state.bestBuyScore == 5} onChange={this.bestBuyOnChange} tabIndex={5} />
                    </div>
                </Space>
                <Space>
                    <div className='box'>Like a <br />great <br />deal
                        <br /><Checkbox checked={this.state.amazonScore == 6} onChange={this.amazonOnChange} tabIndex={6} />
                        <br /><Checkbox checked={this.state.targetScore == 6} onChange={this.targetOnChange} tabIndex={6} />
                        <br />
                        <Checkbox checked={this.state.bestBuyScore == 6} onChange={this.bestBuyOnChange} tabIndex={6} />
                    </div>
                </Space>
                <br />


                {/* <Space>
                    Amazon
                    <Checkbox checked={this.state.amazonScore == 0} onChange={this.amazonOnChange} tabIndex={0} />
                    <Checkbox checked={this.state.amazonScore == 1} onChange={this.amazonOnChange} tabIndex={1} />
                    <Checkbox checked={this.state.amazonScore == 2} onChange={this.amazonOnChange} tabIndex={2} />
                    <Checkbox checked={this.state.amazonScore == 3} onChange={this.amazonOnChange} tabIndex={3} />
                    <Checkbox checked={this.state.amazonScore == 4} onChange={this.amazonOnChange} tabIndex={4} />
                    <Checkbox checked={this.state.amazonScore == 5} onChange={this.amazonOnChange} tabIndex={5} />
                    <Checkbox checked={this.state.amazonScore == 6} onChange={this.amazonOnChange} tabIndex={6} />
                </Space>
                <br />
                <Space>
                    Target
                    <Checkbox checked={this.state.targetScore == 0} onChange={this.targetOnChange} tabIndex={0} />
                    <Checkbox checked={this.state.targetScore == 1} onChange={this.targetOnChange} tabIndex={1} />
                    <Checkbox checked={this.state.targetScore == 2} onChange={this.targetOnChange} tabIndex={2} />
                    <Checkbox checked={this.state.targetScore == 3} onChange={this.targetOnChange} tabIndex={3} />
                    <Checkbox checked={this.state.targetScore == 4} onChange={this.targetOnChange} tabIndex={4} />
                    <Checkbox checked={this.state.targetScore == 5} onChange={this.targetOnChange} tabIndex={5} />
                    <Checkbox checked={this.state.targetScore == 6} onChange={this.targetOnChange} tabIndex={6} />
                </Space>
                <br />
                <Space>
                    BestBuyScore
                    <Checkbox checked={this.state.bestBuyScore == 0} onChange={this.bestBuyOnChange} tabIndex={0} />
                    <Checkbox checked={this.state.bestBuyScore == 1} onChange={this.bestBuyOnChange} tabIndex={1} />
                    <Checkbox checked={this.state.bestBuyScore == 2} onChange={this.bestBuyOnChange} tabIndex={2} />
                    <Checkbox checked={this.state.bestBuyScore == 3} onChange={this.bestBuyOnChange} tabIndex={3} />
                    <Checkbox checked={this.state.bestBuyScore == 4} onChange={this.bestBuyOnChange} tabIndex={4} />
                    <Checkbox checked={this.state.bestBuyScore == 5} onChange={this.bestBuyOnChange} tabIndex={5} />
                    <Checkbox checked={this.state.bestBuyScore == 6} onChange={this.amazonOnChange} tabIndex={6} />
                </Space>
                <br /> */}

                {((this.state.amazonScore == null) || (this.state.targetScore == null) || (this.state.bestBuyScore == null)) ? <Button size="large" type="primary" disabled>Proceed</Button> : <Button size="large" type="primary" onClick={this.props.nextPage}>Proceed</Button>}
            </div>
        )
    }
}