import React from 'react';
import {Modal, Button } from 'antd';



export default class ModalD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    info = () => {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() {},
        });
    };

    success = () => {
        Modal.success({
            title: 'This is a success message',
            content: 'some messages...some messages...',
        });
    };

    error = () => {
        Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...',
        });
    };

    warning = () => {
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
        });
    };


    hideModal = () => {
        this.setState({
            visible: false,
        });
    };

    confirm = () => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Bla bla ...',
            okText: '确认',
            cancelText: '取消',
        });
    };
    render() {

        return (
            <div className="">
                <div>
                    <Button type="primary" onClick={this.showModal}>Open</Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
                <h2>信息提示</h2>
                <p>各种类型的信息提示，只提供一个按钮用于关闭。</p>
                <div>
                    <Button onClick={this.info}>Info</Button>
                    <Button onClick={this.success}>Success</Button>
                    <Button onClick={this.error}>Error</Button>
                    <Button onClick={this.warning}>Warning</Button>
                </div>
                <h2>国际化</h2>
                <p>设置 okText 与 cancelText 以自定义按钮文字。</p>
                <div>
                    <Button type="primary" onClick={this.showModal}>Modal</Button>
                    <Modal
                        title="Modal"
                        visible={this.state.visible}
                        onOk={this.hideModal}
                        onCancel={this.hideModal}
                        okText="确认"
                        cancelText="取消"
                    >
                        <p>Bla bla ...</p>
                        <p>Bla bla ...</p>
                        <p>Bla bla ...</p>
                    </Modal>
                </div>
                <br />
                <Button onClick={this.confirm}>Confirm</Button>
            </div>
        );
    }
}