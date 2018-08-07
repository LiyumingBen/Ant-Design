import React from 'react';
import {Input, Select, Icon, Col, InputNumber, DatePicker, AutoComplete, Cascader, Tooltip} from 'antd';
import '../css/input.css';

const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
const {TextArea} = Input;
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            userName: '',
        };
    }

    handleChange = (value) => {
        this.setState({
            dataSource: !value || value.indexOf('@') >= 0 ? [] : [
                    `${value}@gmail.com`,
                    `${value}@163.com`,
                    `${value}@qq.com`,
                ],
        });
    };

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({userName: ''});
    };

    onChangeUserName = (e) => {
        this.setState({userName: e.target.value});
    };

    formatNumber = (value) => {
        value += '';
        const list = value.split('.');
        const prefix = list[0].charAt(0) === '-' ? '-' : '';
        let num = prefix ? list[0].slice(1) : list[0];
        let result = '';
        while (num.length > 3) {
            result = `,${num.slice(-3)}${result}`;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
    };

    onChange = (e) => {
        const {value} = e.target;
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.props.onChange(value);
        }
    };

    // '.' at the end or only '-' in the input box.
    onBlur = () => {
        const {value, onBlur, onChange} = this.props;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            onChange({value: value.slice(0, -1)});
        }
        if (onBlur) {
            onBlur();
        }
    };

    render() {
        const selectBefore = (
            <Select defaultValue="Http://" style={{width: 90}}>
                <Option value="Http://">Http://</Option>
                <Option value="Https://">Https://</Option>
            </Select>
        );
        const selectAfter = (
            <Select defaultValue=".com" style={{width: 80}}>
                <Option value=".com">.com</Option>
                <Option value=".jp">.jp</Option>
                <Option value=".cn">.cn</Option>
                <Option value=".org">.org</Option>
            </Select>
        );

        const options = [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{
                    value: 'xihu',
                    label: 'West Lake',
                }],
            }],
        }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
                value: 'nanjing',
                label: 'Nanjing',
                children: [{
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                }],
            }],
        }];

        const {userName} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        const {value} = this.props;
        const title = value ? (
                <span className="numeric-input-title">
                    {value !== '-' ? formatNumber(value) : '-'}
                </span>
                ) : 'Input a number';
        return (
            <div className="">
                <h1>Input输入框</h1>
                <h2>基本</h2>
                <Input placeholder="Basic usage"/>
                <h2>三种大小</h2>
                <p>
                    我们为 input 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。
                </p>
                <div className="example-input">
                    <Input size="large" placeholder="large size"/>
                    <Input placeholder="default size"/>
                    <Input size="small" placeholder="small size"/>
                </div>
                <h2>前置/后置标签</h2>
                <div style={{marginBottom: 16}}>
                    <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite"/>
                </div>
                <div style={{marginBottom: 16}}>
                    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite"/>
                </div>
                <div style={{marginBottom: 16}}>
                    <Input addonAfter={<Icon type="setting"/>} defaultValue="mysite"/>
                </div>
                <h2>输入框的组合展现</h2>
                <div>
                    <InputGroup size="large">
                        <Col span={5}>
                            <Input defaultValue="0571"/>
                        </Col>
                        <Col span={8}>
                            <Input defaultValue="26888888"/>
                        </Col>
                    </InputGroup>
                    <br />
                    <InputGroup compact>
                        <Input style={{width: '20%'}} defaultValue="0571"/>
                        <Input style={{width: '30%'}} defaultValue="26888888"/>
                    </InputGroup>
                    <br />
                    <InputGroup compact>
                        <Select defaultValue="Zhejiang">
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="Jiangsu">Jiangsu</Option>
                        </Select>
                        <Input style={{width: '50%'}} defaultValue="Xihu District, Hangzhou"/>
                    </InputGroup>
                    <br />
                    <InputGroup compact>
                        <Select defaultValue="Option1">
                            <Option value="Option1">Option1</Option>
                            <Option value="Option2">Option2</Option>
                        </Select>
                        <Input style={{width: '50%'}} defaultValue="input content"/>
                        <InputNumber />
                    </InputGroup>
                    <br />
                    <InputGroup compact>
                        <Input style={{width: '50%'}} defaultValue="input content"/>
                        <DatePicker />
                    </InputGroup>
                    <br />
                    <InputGroup compact>
                        <Select defaultValue="Option1-1">
                            <Option value="Option1-1">Option1-1</Option>
                            <Option value="Option1-2">Option1-2</Option>
                        </Select>
                        <Select defaultValue="Option2-2">
                            <Option value="Option2-1">Option2-1</Option>
                            <Option value="Option2-2">Option2-2</Option>
                        </Select>
                    </InputGroup>
                    <br />
                    <InputGroup compact>
                        <Select defaultValue="1">
                            <Option value="1">Between</Option>
                            <Option value="2">Except</Option>
                        </Select>
                        <Input style={{width: 100, textAlign: 'center'}} placeholder="Minimum"/>
                        <Input style={{width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff'}}
                               placeholder="~" disabled/>
                        <Input style={{width: 100, textAlign: 'center', borderLeft: 0}} placeholder="Maximum"/>
                    </InputGroup>
                    <br />
                    <InputGroup compact>
                        <Select defaultValue="Sign Up">
                            <Option value="Sign Up">Sign Up</Option>
                            <Option value="Sign In">Sign In</Option>
                        </Select>
                        <AutoComplete
                            dataSource={this.state.dataSource}
                            style={{width: 200}}
                            onChange={this.handleChange}
                            placeholder="Email"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup compact>
                        <Select style={{width: '30%'}} defaultValue="Home">
                            <Option value="Home">Home</Option>
                            <Option value="Company">Company</Option>
                        </Select>
                        <Cascader style={{width: '70%'}} options={options} placeholder="Select Address"/>
                    </InputGroup>
                </div>
                <h2>搜索框</h2>
                <div>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{width: 200}}
                    />
                    <br /><br />
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                    />
                    <br /><br />
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                </div>
                <h2>适应文本高度的文本域</h2>
                <p>
                    autosize 属性适用于 textarea 节点，并且只有高度会自动变化。另外 autosize 可以设定为一个对象，指定最小行数和最大行数。
                </p>
                <div>
                    <TextArea placeholder="Autosize height based on content lines" autosize/>
                    <div style={{margin: '24px 0'}}/>
                    <TextArea placeholder="Autosize height with minimum and maximum number of lines"
                              autosize={{minRows: 2, maxRows: 6}}/>
                </div>
                <h2>前缀和后缀</h2>
                <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                    suffix={suffix}
                    value={userName}
                    onChange={this.onChangeUserName}
                    ref={node => this.userNameInput = node}
                />
                <h2>多文本域</h2>
                <TextArea rows={4}/>
                <h2>输入时格式化展示</h2>
                <p>
                    结合 Tooltip 组件，实现一个数值输入框，方便内容超长时的全量展现。
                </p>
                <Tooltip
                    trigger={['focus']}
                    title={title}
                    placement="topLeft"
                    overlayClassName="numeric-input"
                >
                    <Input
                        {...this.props}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        placeholder="Input a number"
                        maxLength="25"
                    />
                </Tooltip>
            </div>
        );
    }
}