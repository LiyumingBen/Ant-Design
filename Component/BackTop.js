import React from 'react';
import {BackTop} from 'antd';
import '../css/BackTop.css';
export default class BackTopD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div className="">
                <h1>回到顶部</h1>
                <h2>简单用法</h2>
                <BackTop />
                Scroll down to see the bottom-right
                <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                button.
                <h2>自定义用法</h2>
                <div style={{marginTop: "50px"}}>
                    <BackTop>
                        <div className="ant-back-top-inner">UP</div>
                    </BackTop>
                    Scroll down to see the bottom-right
                    <strong style={{ color: '#1088e9' }}> blue </strong>
                    button.
                </div>
            </div>
        );
    }
}