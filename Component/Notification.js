import React from 'react';
import {Button, notification, Icon,  Select} from 'antd';


const key = 'updatable';
export default class NotificationD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    openNotification1 = () => {
        const args = {
            message: 'Notification Title',
            description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
            duration: 0,
        };
        notification.open(args);
    };

    openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    close = () => {
        console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
    };

    openNotification2 = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Notification Title',
            description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
            btn,
            key,
            onClose: close,
        });
    };

    openNotification3 = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        });
    };

    openNotification4 = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    openNotification5 = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            style: {
                width: 600,
                marginLeft: 335 - 600,
            },
        });
    };

    openNotification6 = () => {
        notification.open({
            key,
            message: 'Notification Title',
            description: 'description.',
        });
        setTimeout(() => {
            notification.open({
                key,
                message: 'New Title',
                description: 'New description.',
            });
        }, 1000);
    };
    render() {
        const { Option } = Select;
        const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
        return (
            <div className="">
                <p>
                    在系统四个角显示通知提醒信息。经常用于以下情况：<br/>
                    1. 较为复杂的通知内容。<br/>
                    2. 带有交互的通知，给出用户下一步的行动点。<br/>
                    3. 系统主动推送。<br/>
                </p>
                <h2>最基本的 最简单的用法，4.5 秒后自动关闭。</h2>
                <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
                <h2>自动关闭的延时</h2>
                <p>
                    自定义通知框自动关闭的延时，默认4.5s，取消自动关闭只要将该值设为 0 即可
                </p>
                <Button type="primary" onClick={this.openNotification1}>Open the notification box</Button>
                <h2>带有图标的通知提醒框</h2>
                <p>通知提醒框左侧有图标</p>
                <div>
                    <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
                    <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
                    <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
                    <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
                </div>
                <h2>自定义按钮</h2>
                <p>自定义关闭按钮的样式和文字。</p>
                <Button type="primary" onClick={this.openNotification2}>
                    Open the notification box
                </Button>
                <h2>自定义图标</h2>
                <p>图标可以被自定义。</p>
                <Button type="primary" onClick={this.openNotification3}>Open the notification box</Button>
                <h2>位置</h2>
                <p>可以设置通知从右上角、右下角、左下角、左上角弹出</p>
                <div>
                    <Select
                        defaultValue="topRight"
                        style={{ width: 120, marginRight: 10 }}
                        onChange={(val) => {
                            notification.config({
                                placement: val,
                            });
                        }}
                    >
                        {options.map(val => <Option key={val} value={val}>{val}</Option>)}
                    </Select>
                    <Button
                        type="primary"
                        onClick={this.openNotification4}
                    >
                        Open the notification box
                    </Button>
                </div>
                <h2>自定义样式</h2>
                <p>使用 style 和 className 来定义样式。</p>
                <Button type="primary" onClick={this.openNotification5}>Open the notification box</Button>
                <h2>更新消息内容</h2>
                <p>可以通过唯一的 key 来更新内容</p>
                <Button type="primary" onClick={this.openNotification6}>Open the notification box</Button>
            </div>
        );
    }
}