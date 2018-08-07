import React from 'react';
import { message, Button } from 'antd';

export default class MessageD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const info = () => {
            message.info('This is a normal message');
        };

        const success = () => {
            message.success('This is a message of success');
        };

        const error = () => {
            message.error('This is a message of error');
        };

        const warning = () => {
            message.warning('This is message of warning');
        };

        const success1 = () => {
            message.loading('Action in progress..', 2.5)
                .then(() => message.success('Loading finished', 2.5))
                .then(() => message.info('Loading finished is finished', 2.5));
        };
        return (
            <div className="">
                <h1>Message全局提示</h1>
                <h2>普通提示</h2>
                <Button type="primary" onClick={info}>Display normal message</Button>
                <h2>其他提示类型 包括成功、失败、警告。</h2>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
                <Button onClick={success1}>Display a sequence of message</Button>
            </div>
        );
    }
}