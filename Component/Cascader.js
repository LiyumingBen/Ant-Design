import React from 'react';
import { Cascader   } from 'antd';



export default class CascaderD extends React.Component {
    state = {

    };
    onChange = (value) => {
        console.log(value);
    };
    render() {
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
        return (
            <div className={{top:"20px"}}>
                <Cascader autoFocus="true" defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={this.onChange} placeholder="Please select" />
            </div>
        );
    }
}
