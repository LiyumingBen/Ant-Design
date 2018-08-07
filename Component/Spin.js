import React from 'react';
import {Spin, Switch, Alert, Icon } from 'antd';
import '../css/Spin.css';

export default class SpinD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    toggle = (value) => {
        this.setState({ loading: value });
    };
    render() {
        const container = (
            <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            />
        );
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        return (
            <div className="">
                <h2>基本用法</h2>
                <Spin />
                <h2>各种大小</h2>
                <p>小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载</p>
                <div>
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                </div>
                <h2>容器</h2>
                <div className="example">
                    <Spin />
                </div>
                <h2>卡片加载中</h2>
                <p>可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态</p>
                <div>
                    <Spin spinning={this.state.loading}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    <div style={{ marginTop: 16 }}>
                        Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
                    </div>
                </div>
                <h2>自定义描述文案</h2>
                <Spin tip="Loading...">
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
                <h2>延迟</h2>
                <p>延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。</p>
                <div>
                    <Spin spinning={this.state.loading} delay={500}>{container}</Spin>
                    <div style={{ marginTop: 16 }}>
                        Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
                    </div>
                </div>
                <h2>自定义指示符</h2>
                <Spin indicator={antIcon} />
            </div>
        );
    }
}