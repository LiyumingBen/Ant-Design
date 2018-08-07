/**
 * Created by yuming.li on 2018/8/3.
 */
import React from 'react';
import {Menu, Dropdown, Button, Icon, message} from 'antd';

export default class DropdownD2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };

    handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick.bind(this)}>
                <Menu.Item key="1"><Icon type="user"/>1st menu item</Menu.Item>
                <Menu.Item key="2"><Icon type="user"/>2nd menu item</Menu.Item>
                <Menu.Item key="3"><Icon type="user"/>3rd item</Menu.Item>
            </Menu>
        );

        return (
            <div>
                <h1>带下拉框的按钮</h1>
                <Dropdown.Button onClick={this.handleButtonClick.bind(this)} overlay={menu}>
                    Dropdown
                </Dropdown.Button>
                <Dropdown.Button
                    onClick={this.handleButtonClick.bind(this)}
                    overlay={menu}
                    disabled
                    style={{marginLeft: 8}}
                >
                    Dropdown
                </Dropdown.Button>
                <Dropdown overlay={menu}>
                    <Button style={{marginLeft: 8}}>
                        Button <Icon type="down"/>
                    </Button>
                </Dropdown>
            </div>
        );
    }
}
