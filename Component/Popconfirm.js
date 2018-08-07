import React from 'react';
import {Popconfirm, message, Switch, Button, Icon  } from 'antd';



export default class PopconfirmD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            condition: true, // Whether meet the condition, if not show popconfirm.
        };
    }


    confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
    };
    cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    changeCondition = (value) => {
        this.setState({ condition: value });
    };

    confirm1 = () => {
        this.setState({ visible: false });
        message.success('Next step.');
    };

    cancel1 = () => {
        this.setState({ visible: false });
        message.error('Click on cancel.');
    };

    handleVisibleChange = (visible) => {
        if (!visible) {
            this.setState({ visible });
            return;
        }
        // Determining condition before show the popconfirm.
        console.log(this.state.condition);
        if (this.state.condition) {
            this.confirm(); // next step
        } else {
            this.setState({ visible }); // show the popconfirm
        }
    };

    confirm2 = () =>{
        message.info('Clicked on Yes.');
    };
    render() {
        const text = 'Are you sure to delete this task?';
        return (
            <div className="">
                <h2>基本用法</h2>
                <Popconfirm title="Are you sure delete this task?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
                    <a href="#">Delete</a>
                </Popconfirm>
                <h2>国际化</h2>
                <p>使用 okText 和 cancelText 自定义按钮文字</p>
                <Popconfirm title="Are you sure？" okText="无所谓" cancelText="关不上的窗">
                    <a href="#">Delete</a>
                </Popconfirm>
                <h2>条件触发</h2>
                <div>
                    <Popconfirm
                        title="Are you sure delete this task?"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                        onConfirm={this.confirm1}
                        onCancel={this.cancel1}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a href="#">Delete a task</a>
                    </Popconfirm>
                    <br />
                    <br />
                    Whether directly execute：<Switch defaultChecked onChange={this.changeCondition} />
                </div>
                <h2>位置</h2>
                <p>位置有十二个方向。如需箭头指向目标元素中心，可以设置 arrowPointAtCenter。</p>
                <div className="demo">
                    <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                        <Popconfirm placement="topLeft" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>TL</Button>
                        </Popconfirm>
                        <Popconfirm placement="top" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>Top</Button>
                        </Popconfirm>
                        <Popconfirm placement="topRight" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>TR</Button>
                        </Popconfirm>
                    </div>
                    <div style={{ width: 70, float: 'left' }}>
                        <Popconfirm placement="leftTop" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>LT</Button>
                        </Popconfirm>
                        <Popconfirm placement="left" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>Left</Button>
                        </Popconfirm>
                        <Popconfirm placement="leftBottom" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>LB</Button>
                        </Popconfirm>
                    </div>
                    <div style={{ width: 70, marginLeft: 304 }}>
                        <Popconfirm placement="rightTop" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>RT</Button>
                        </Popconfirm>
                        <Popconfirm placement="right" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>Right</Button>
                        </Popconfirm>
                        <Popconfirm placement="rightBottom" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>RB</Button>
                        </Popconfirm>
                    </div>
                    <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                        <Popconfirm placement="bottomLeft" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>BL</Button>
                        </Popconfirm>
                        <Popconfirm placement="bottom" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>Bottom</Button>
                        </Popconfirm>
                        <Popconfirm placement="bottomRight" title={text} onConfirm={this.confirm2} okText="Yes" cancelText="No">
                            <Button>BR</Button>
                        </Popconfirm>
                    </div>
                </div>
                <h2>自定义 Icon 图标</h2>
                <p>使用 icon 自定义提示 icon</p>
                <Popconfirm title="Are you sure？" icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}>
                    <a href="#">Delete</a>
                </Popconfirm>
            </div>
        );
    }
}