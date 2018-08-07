import React from 'react';
import { AutoComplete, Icon, Button, Input } from 'antd';
import _ from "underscore";
const Option = AutoComplete.Option;
export default class Complete extends React.Component {

    state = {
        dataSource: [],
    };

    onSelect = (value) => {
        console.log('onSelect', value);
    };

   /* handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                    value,
                    value + ",很帅,",
                    value + value + "真的很帅",
                ],
            result: [],
        });
    };

    handleSearch1= (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
    result = [];
    } else {
    result = _.map(['gmail.com', '163.com', 'qq.com'], (domain) => `${value}@${domain}`);
    }
    this.setState({ result });
    };
   */



    renderOption = (item) => {
        return (
            <Option key={item.category} text={item.category}>
                {item.query} 在
                <a
                    href={`https://s.taobao.com/search?q=${item.query}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item.category}
                </a>
                区块中
                <span className="global-search-item-count">约 {item.count} 个结果</span>
            </Option>
        );
    };

    searchResult = (query) => {
        return (new Array(this.getRandomInt(5))).join('.').split('.')
            .map((item, idx) => ({
                query,
                category: `${query}${idx}`,
                count: this.getRandomInt(200, 100),
            }));
    };
    handleSearch = (value) => {
        this.setState({
            dataSource: value ? this.searchResult(value) : [],
        });
    };

    getRandomInt = (max, min = 0) => {
        return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
    };
    render() {
        const { dataSource } = this.state;
        const { result } = this.state;
        const children = _.map(result, (email) => {
            return <Option key={email}>{email}</Option>;
        });

        return (
            <div>
              {/*  <AutoComplete
                    dataSource={dataSource}
                    style={{ width: 200 }}
                    onSelect={this.onSelect}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                />
                <br/>
                <AutoComplete
                    style={{ width: 200, top: 25}}
                    onSearch={this.handleSearch1}
                    placeholder="input here"
                >
                    {children}
                </AutoComplete>*/}
                <h1>查询模式 - 不确定类目</h1>
                <div className="global-search-wrapper" style={{ width: 300 }}>
                    <AutoComplete
                        className="global-search"
                        size="large"
                        style={{ width: '100%' }}
                        dataSource={dataSource.map(this.renderOption)}
                        onSelect={this.onSelect}
                        onSearch={this.handleSearch}
                        placeholder="input here"
                        optionLabelProp="text"
                    >
                        <Input
                            suffix={(
                                <Button className="search-btn" size="large" type="primary">
                                    <Icon type="search" />
                                </Button>
                            )}
                        />
                    </AutoComplete>
                </div>
            </div>
        );
    }
}