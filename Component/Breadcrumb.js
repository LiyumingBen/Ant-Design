import React from 'react';
import {Breadcrumb, Icon} from 'antd';

export default class BreadcrumbD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>,
                <h1>带图标</h1>
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="user" />
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Application
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h1>分隔符符</h1>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}