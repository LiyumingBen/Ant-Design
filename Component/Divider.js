import React from 'react';
import {Divider } from 'antd';


export default class DividerD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div className="">
                <h2>水平分割线</h2>
                <p>默认为水平分割线，可在中间加入文字。</p>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                    <Divider />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                    <Divider>With Text</Divider>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                    <Divider dashed />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                </div>
                <h2>垂直分割线</h2>
                <p>使用 type="vertical" 设置为行内的垂直分割线。</p>
                <div>
                    Text
                    <Divider type="vertical" />
                    <a href="#">Link</a>
                    <Divider type="vertical" />
                    <a href="#">Link</a>
                </div>
                <h2>标题位置</h2>
                <p>修改分割线标题的位置。</p>
                <div>
                    <Divider orientation="left">Left Text</Divider>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                    <Divider orientation="right">Right Text</Divider>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                </div>
            </div>
        );
    }
}