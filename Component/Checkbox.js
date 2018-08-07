/**
 * Created by yuming.li on 2018/8/3.
 */
import React from 'react';
import {Checkbox, Button} from 'antd';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
export default class CheckboxD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            disabled: false,
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        };
    }

    toggleChecked = () => {
        this.setState({checked: !this.state.checked});
    };

    toggleDisable = () => {
        this.setState({disabled: !this.state.disabled});
    };

    onChange = (e) => {
        console.log('checked = ', e.target.checked);
        this.setState({
            checked: e.target.checked,
        });
    };

    onChange1 = (checkedList) => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    };

    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };


    render() {
        const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
        return (
            <div>
                <h1>基础</h1>
                <Checkbox>Checkbox</Checkbox>
                <h1>checkbox 不可用</h1>
                <br/>
                <Checkbox defaultChecked={false} disabled/>
                <br />
                <Checkbox defaultChecked disabled/>
                <h1>联动 checkbox</h1>
                <p style={{marginBottom: '20px'}}>
                    <Checkbox
                        checked={this.state.checked}
                        disabled={this.state.disabled}
                        onChange={this.onChange}
                    >
                        {label}
                    </Checkbox>
                </p>
                <p>
                    <Button
                        type="primary"
                        size="small"
                        onClick={this.toggleChecked}
                    >
                        {!this.state.checked ? 'Check' : 'Uncheck'}
                    </Button>
                    <Button
                        style={{marginLeft: '10px'}}
                        type="primary"
                        size="small"
                        onClick={this.toggleDisable}
                    >
                        {!this.state.disabled ? 'Disable' : 'Enable'}
                    </Button>
                </p>

                <h1>全选</h1>
                <div style={{borderBottom: '1px solid #E9E9E9'}}>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        Check all
                    </Checkbox>
                </div>
                <br />
                <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange1}/>
            </div>
        );
    }
}