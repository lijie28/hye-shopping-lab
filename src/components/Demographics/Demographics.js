import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Modal, Input } from 'antd';
import './Demographics.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


export class Demographics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            warning: false,
            gender: null,
            okText: 'confirm',
            age: null,
            testInfo: ''
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

    ageOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        this.setState({
            age: inputValue
        })
        console.log(inputValue)
    };

    handleOk = () => {
        this.setState({
            warning: false
        })
    };

    confirm = () => {
        const reg = /^[0-9]*$/;
        if (reg.test(this.state.age)) {
            this.saveToApi()
        } else {
            this.setState({
                warning: true
            })
        }
    }

    saveToApi = () => {
        console.log('saveToApi')
        const { data } = this.props;
        data['gender'] = `${this.state.gender}`;
        data['age'] = `${this.state.age}`;
        console.log(`Submitting the data: ${JSON.stringify(data, null, 2)}`);

        this.setState({
            // modalVisible: true
            testInfo: `${JSON.stringify(data, null, 2)}`
        })
        // post(data, true).then(res => { }).catch(err => {
        //     console.log('failed to save the data', err)
        // });
    }

    amazonClick
    render() {
        const { data } = this.props;
        return (
            <div className='center'>
                <div>
                    What is your gender?
                </div>

                <Checkbox checked={this.state.gender === 0} onChange={this.genderOnChange} tabIndex={0}>Male
                </Checkbox>

                <Checkbox checked={this.state.gender === 1} onChange={this.genderOnChange} tabIndex={1}>Female
                </Checkbox>

                <Checkbox checked={this.state.gender === 2} onChange={this.genderOnChange} tabIndex={2}>No-binary / third gender
                </Checkbox>

                <Checkbox checked={this.state.gender === 3} onChange={this.genderOnChange} tabIndex={3}>Prefer not to say
                </Checkbox>

                <div>
                    What is your age? (please enter numbers only)
                </div>
                <Input onChange={this.ageOnChange}></Input>

                <br />
                {(this.state.gender == null || this.state.age == null) ? <Button size="large" type="primary" disabled>Proceed</Button> : <Button size="large" type="primary" onClick={this.confirm}>Proceed</Button>}
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
                <Modal
                    visible={this.state.warning}
                    onCancel={this.handleOk}
                    footer={[
                        <Button type="primary" key="submit" onClick={this.handleOk}>ok</Button>
                    ]}
                >Please enter your age in numbers
                </Modal>
                <br />
                <p>{this.state.testInfo}</p>
                <br />
            </div>
        )
    }
}