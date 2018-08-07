import React from 'react';
import {Anchor} from 'antd';

const { Link } = Anchor;
export default class AnchorD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div className="">
                <Anchor>
                    <Link href="#components-anchor-demo-basic" title="Basic demo" />
                    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                    <Link href="#API" title="API">
                        <Link href="#Anchor-Props" title="Anchor Props" />
                        <Link href="#Link-Props" title="Link Props" />
                    </Link>
                </Anchor>
                <h2>静态位置</h2>
                <p>不浮动，状态不随页面滚动变化</p>
                <Anchor affix={false}>
                    <Link href="#components-anchor-demo-basic" title="Basic demo" />
                    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                    <Link href="#API" title="API">
                        <Link href="#Anchor-Props" title="Anchor Props" />
                        <Link href="#Link-Props" title="Link Props" />
                    </Link>
                </Anchor>
            </div>
        );
    }
}