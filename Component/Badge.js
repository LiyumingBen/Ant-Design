import React from 'react';
import {Badge, Button, Icon, Switch} from 'antd';


export default class BadgeD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5,
            show: true,
        };
    }

    increase = () => {
        const count = this.state.count + 1;
        this.setState({ count });
    };

    decline = () => {
        let count = this.state.count - 1;
        if (count < 0) {
            count = 0;
        }
        this.setState({ count });
    };

    onChange = (show) => {
        this.setState({ show });
    };


    render() {
        const ButtonGroup = Button.Group;
        return (
            <div style={{width: "500px", margin: "0 auto"}}>
                <p>
                    简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。
                </p>
                <div>
                    <Badge count={0} showZero>
                        <a href="#" className="head-example" />
                    </Badge>
                </div>
                <Badge count={99}>
                    <a href="#" className="head-example" />
                </Badge>
                <h2>独立使用</h2>
                <div>
                    <Badge count={25} />
                    <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
                    <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
                </div>
                <h2>封顶数字</h2>
                <p>超过 overflowCount 的会显示为 {/*${overflowCount}+*/}，默认的 overflowCount 为 99</p>
                <div>
                    <Badge count={99}>
                        <a href="#" className="head-example" />
                    </Badge>
                    <Badge count={100}>
                        <a href="#" className="head-example" />
                    </Badge>
                    <Badge count={99} overflowCount={10}>
                        <a href="#" className="head-example" />
                    </Badge>
                    <Badge count={1000} overflowCount={999}>
                        <a href="#" className="head-example" />
                    </Badge>
                </div>
                <h2>讨嫌的小红点 没有具体的数字</h2>
                <div>
                    <Badge dot>
                        <Icon type="notification" />
                    </Badge>
                    <Badge count={0} dot>
                        <Icon type="notification" />
                    </Badge>
                    <Badge dot>
                        <a href="#">Link something</a>
                    </Badge>
                </div>
                <h2>动态 展示动态变化的效果</h2>
                <div>
                    <Badge count={this.state.count}>
                        <a href="#" className="head-example" />
                    </Badge>
                    <br/>
                    <ButtonGroup>
                        <Button onClick={this.decline}>
                            <Icon type="minus" />
                        </Button>
                        <Button onClick={this.increase}>
                            <Icon type="plus" />
                        </Button>
                    </ButtonGroup>
                </div>
                <div style={{ marginTop: 10 }}>
                    <Badge dot={this.state.show}>
                        <a href="#" className="head-example" />
                    </Badge>
                    <Switch onChange={this.onChange} checked={this.state.show} />
                </div>
                <h2>状态点 用于表示状态的小圆点</h2>
                <div>
                    <Badge status="success" />
                    <Badge status="error" />
                    <Badge status="default" />
                    <Badge status="processing" />
                    <Badge status="warning" />
                    <br />
                    <Badge status="success" text="Success" />
                    <br />
                    <Badge status="error" text="Error" />
                    <br />
                    <Badge status="default" text="Default" />
                    <br />
                    <Badge status="processing" text="Processing" />
                    <br />
                    <Badge status="warning" text="Warning" />
                </div>
                <h2>自定义 设置鼠标放在状态点上时显示的文字</h2>
                <div>
                    <Badge count={5} title="Custom hover text">
                        <a href="#" className="head-example" />
                    </Badge>
                </div>
            </div>
        );
    }
}