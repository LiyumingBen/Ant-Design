import React from 'react';
import { Affix, Button} from 'antd';

export default class AffixD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 10,
            bottom: 10,
        };
    }

    render() {
        return (
            <div>
                <h1>固定在某个位置</h1>
                <h3>固定在顶部</h3>
                <Affix offsetTop={this.state.top}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({
                                top: this.state.top + 10,
                            });
                        }}
                    >
                        Affix top
                    </Button>
                </Affix>
                <br />
                <h3>固定在底部</h3>
                <Affix offsetBottom={this.state.bottom}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({
                                bottom: this.state.bottom + 10,
                            });
                        }}
                    >
                        Affix bottom
                    </Button>
                </Affix>
                <h3>固定在某个位置</h3>
                <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                    <Button>120px to affix top</Button>
                </Affix>
                <div className="scrollable-container" ref={(node) => { this.container = node; }}>
                    <div className="background">
                        <Affix target={() => this.container}>
                            <Button type="primary">
                                Fixed at the top of container
                            </Button>
                        </Affix>
                    </div>
                </div>
            </div>
        );
    }
}