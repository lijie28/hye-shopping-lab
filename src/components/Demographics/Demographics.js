import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Modal } from 'antd';
import './Demographics.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


export class Demographics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            gender: null,
            okText: 'confirm'
        };
    }


    copyTestingId() {
        navigator.clipboard.writeText(this.props.data.version + this.props.data.session_id)
            .then(res => console.log(`${this.props.data.version + this.props.data.session_id} copied`))
            .catch(err => console.log(err))

        this.setState({
            okText: 'Copied!'
        })
    }

    genderOnChange = (e: CheckboxChangeEvent) => {
        this.setState({
            gender: e.target.tabIndex
        })
    };

    confirm = () => {
        this.setState({
            modalVisible: true
        })
    }

    amazonClick
    render() {
        const { data } = this.props;
        return (
            <div className='center'>
                <div>
                    What is your gender?
                </div>

                <Checkbox checked={this.state.gender == 0} onChange={this.genderOnChange} tabIndex={0}>Male
                </Checkbox>

                <Checkbox checked={this.state.gender == 1} onChange={this.genderOnChange} tabIndex={1}>Female
                </Checkbox>

                <Checkbox checked={this.state.gender == 2} onChange={this.genderOnChange} tabIndex={2}>No-binary / third gender
                </Checkbox>

                <Checkbox checked={this.state.gender == 3} onChange={this.genderOnChange} tabIndex={3}>Prefer not to say
                </Checkbox>

                <div>
                    What is your age? (please enter numbers only)
                </div>
                <br />
                {(this.state.gender == null) ? <Button size="large" type="primary" disabled>Proceed</Button> : <Button size="large" type="primary" onClick={this.confirm}>Proceed</Button>}
                <Modal
                    title="Your response have been saved!"
                    centered
                    visible={this.state.modalVisible}
                    onOk={() => this.copyTestingId()}
                    closable={false}
                    cancelButtonProps={{ disabled: true }}
                    okText={this.state.okText}
                >
                    <p>
                        Click the button to copy your testing ID and enter it back in the Qualtrics. Your testing ID is: <strong>{data.version + data.session_id}</strong>
                        <br />Then you can close this window.
                    </p>
                </Modal>
            </div>
        )
    }
}