import React from 'react';
import {Progress, Button, Tooltip  } from 'antd';


const ButtonGroup = Button.Group;
export default class ProgressD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
        };
    }

    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    };

    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    };

    render() {

        return (
            <div className="">
                <h2>进度条</h2>
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
                <h2>进度圈</h2>
                <Progress type="circle" percent={75} />
                <Progress type="circle" percent={70} status="exception" />
                <Progress type="circle" percent={100} />
                <h2>小型进度条</h2>
                <div style={{ width: 170 }}>
                    <Progress percent={30} size="small" />
                    <Progress percent={50} size="small" status="active" />
                    <Progress percent={70} size="small" status="exception" />
                    <Progress percent={100} size="small" />
                </div>
                <h2>小型进度圈</h2>
                <div>
                    <Progress type="circle" percent={30} width={80} />
                    <Progress type="circle" percent={70} width={80} status="exception" />
                    <Progress type="circle" percent={100} width={80} />
                </div>
                <h2>进度圈动态展示</h2>
                <div>
                    <Progress type="circle" percent={this.state.percent} />
                    <ButtonGroup>
                        <Button onClick={this.decline} icon="minus" />
                        <Button onClick={this.increase} icon="plus" />
                    </ButtonGroup>
                </div>
                <h2>动态展示</h2>
                <div>
                    <Progress percent={this.state.percent} />
                    <ButtonGroup>
                        <Button onClick={this.decline} icon="minus" />
                        <Button onClick={this.increase} icon="plus" />
                    </ButtonGroup>
                </div>
                <h2>自定义文字格式</h2>
                <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
                <Progress type="circle" percent={100} format={() => 'Done'} />
                <h2>圆角/方角边缘</h2>
                <p>strokeLinecap="square|round" 可以调整进度条边缘的形状</p>
                <div>
                    <Progress strokeLinecap="square" percent={75} />
                    <Progress strokeLinecap="square" type="circle" percent={75} />
                    <Progress strokeLinecap="square" type="dashboard" percent={75} />
                </div>
                <h2>分段进度条</h2>
                <Tooltip title="3 done / 3 in progress / 4 to do">
                    <Progress percent={60} successPercent={30} />
                </Tooltip>
                <h2>圆角/方角边缘</h2>
                <p>
                    strokeLinecap="square|round" 可以调整进度条边缘的形状
                </p>
                <Progress strokeLinecap="square" percent={75} />
                <Progress strokeLinecap="square" type="circle" percent={75} />
                <Progress strokeLinecap="square" type="dashboard" percent={75} />
            </div>
        );
    }
}