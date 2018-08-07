import React from 'react';
import { Steps, Icon, Button, message, Popover  } from 'antd';

const Step = Steps.Step;


export default class StepsD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const steps = [{
            title: 'First',
            content: 'First-content',
        }, {
            title: 'Second',
            content: 'Second-content',
        }, {
            title: 'Last',
            content: 'Last-content',
        }];

        const customDot = (dot, { status, index }) => (
            <Popover content={<span>step {index} status: {status}</span>}>
                {dot}
            </Popover>
        );

        const { current } = this.state;
        return (
            <div>
                <h1>步骤条</h1>
                <Steps size="small" current={1}>
                    <Step title="Finished" />
                    <Step title="In Progress" />
                    <Step title="Waiting" />
                </Steps>
                <h1>带图标</h1>
                <Steps>
                    <Step status="finish" title="Login" icon={<Icon type="user" />} />
                    <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                    <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                    <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                </Steps>
                <h1>步骤切换</h1>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {
                        current < steps.length - 1
                        && <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        current === steps.length - 1
                        && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                    }
                    {
                        current > 0
                        && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        )
                    }
                </div>
                <h1>竖直方向的步骤条</h1>
                <Steps direction="vertical" current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
                <h1>竖直方向的小型步骤条</h1>
                <Steps direction="vertical" size="small" current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
                <h1>步骤运行错误</h1>
                <Steps current={1} status="error">
                    <Step title="Finished" description="This is a description" />
                    <Step title="In Process" description="This is a description" />
                    <Step title="Waiting" description="This is a description" />
                </Steps>
                <h1>点状步骤条</h1>
                <Steps progressDot current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
                <h1>自定义点状步骤条</h1>
                <Steps current={1} progressDot={customDot}>
                    <Step title="Finished" description="You can hover on the dot." />
                    <Step title="In Progress" description="You can hover on the dot." />
                    <Step title="Waiting" description="You can hover on the dot." />
                    <Step title="Waiting" description="You can hover on the dot." />
                </Steps>
            </div>
        );
    }
}
