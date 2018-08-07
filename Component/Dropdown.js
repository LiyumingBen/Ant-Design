/**
 * Created by yuming.li on 2018/8/3.
 */
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

export default class DropdownD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Alipay</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">TaoBao</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Tmall</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <h1>Dropdown基本</h1>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        Hover me <Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        );
    }
}