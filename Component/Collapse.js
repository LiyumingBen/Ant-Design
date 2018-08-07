import React from 'react';
import {Collapse} from 'antd';


export default class CollapseD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    callback = (key) => {
        console.log(key);
    };

    render() {
        const text = `
              A dog is a type of domesticated animal.
              Known for its loyalty and faithfulness,
              it can be found as a welcome guest in many households across the world.
            `;
        const Panel = Collapse.Panel;
        const text1 = (
            <p style={{ paddingLeft: 24 }}>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
            </p>
        );
        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
        };
        return (
            <div className="">
                <h2>折叠面板</h2>
                <p>可以同时展开多个面板，这个例子默认展开了第一个</p>
                <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                    <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3" disabled>
                        <p>{text}</p>
                    </Panel>
                </Collapse>
                <h2>手风琴</h2>
                <p>手风琴，每次只打开一个tab。默认打开第一个</p>
                <Collapse accordion>
                    <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
                <h2>面板嵌套</h2>
                <strong style={{color: 'red', textAlign: 'center'}}>这里需要注意：panel 里面不能包p标签</strong>
                <Collapse onChange={this.callback}>
                    <Panel header="This is panel header 1" key="1">
                        <Collapse defaultActiveKey="1">
                            <Panel header="This is panel nest panel" key="1">
                                <span>{text1}</span>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <span>{text1}</span>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <span>{text1}</span>
                    </Panel>
                </Collapse>
                <h2>简洁风格</h2>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="This is panel header 1" key="1">
                        {text1}
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        {text1}
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        {text1}
                    </Panel>
                </Collapse>
                <h2>自定义面板</h2>
                <p>自定义各个面板的背景色、圆角和边距</p>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                </Collapse>
                <h2>隐藏箭头</h2>
                <p>你可以通过 {/*showArrow={false}*/} 隐藏 CollapsePanel 组件的箭头图标</p>
                <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                    <Panel header="This is panel header with arrow icon" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}