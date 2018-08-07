import React from 'react';
import {InputNumber} from 'antd';
import '../css/input.css';


export default class InputNumberD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onChange = (value) => {
        console.log('changed', value);
    };

    render() {

        return (
            <div className="">
                <h1>InputNumber</h1>
                <h2>基本</h2>
                <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
                <h2>三种大小</h2>
                <p>
                    三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px
                </p>
                <div>
                    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
                    <InputNumber min={1} max={100000} defaultValue={3} onChange={this.onChange} />
                    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
                </div>

                <InputNumber min={0} max={10} step={0.1} onChange={this.onChange} />
                <h2>格式化展示</h2>
                <p>
                    通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用
                </p>
                <div>
                    <InputNumber
                        defaultValue={1000}
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        onChange={this.onChange}
                    />
                    <InputNumber
                        defaultValue={100}
                        min={0}
                        max={100}
                            formatter={value => `${value}%`}
                        parser={value => value.replace('%', '')}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    }
}