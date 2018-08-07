import React from 'react';
import {Timeline, Icon} from 'antd';
import '../css/Timeline.css';

export default class TimelineD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div className="">
                <h2>交替展现</h2>
                <div className="centerDiv">
                    <Timeline mode="alternate">
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Timeline.Item>
                        <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
                    </Timeline>
                </div>
                <h2>右侧时间轴点</h2>
                <Timeline mode="right">
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
                <h2>自定义时间轴点</h2>
                <Timeline  mode="left">
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
                <h2>圆圈颜色</h2>
                <p>
                    圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。
                </p>
                <Timeline>
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="red">
                        <p>Solve initial network problems 1</p>
                        <p>Solve initial network problems 2</p>
                        <p>Solve initial network problems 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                </Timeline>
            </div>
        );
    }
}