import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

/*const RangePicker = DatePicker.RangePicker;*/
const { RangePicker } = DatePicker;
export default class DatePickerD1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'time'
        };
    }

    onChange = (dates, dateStrings) => {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    };

    handleOpenChange = (open) => {
        if (open) {
            this.setState({ mode: 'time' });
        }
    };

    handlePanelChange = (value, mode) => {
        this.setState({ mode });
    };

    render() {

        return (
            <div>
                <h2>预设范围</h2>
                <RangePicker
                    ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                    onChange={this.onChange}
                />
                <br />
                <RangePicker
                    ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                    showTime
                    format="YYYY/MM/DD HH:mm:ss"
                    onChange={this.onChange}
                />
                <h2>受控面板</h2>
                <p>
                    通过组合 mode 与 onPanelChange 控制要展示的面板。
                </p>
                <DatePicker
                    mode={this.state.mode}
                    showTime
                    onOpenChange={this.handleOpenChange}
                    onPanelChange={this.handlePanelChange}
                />
                <h2>定制日期单元格</h2>
                <DatePicker
                    dateRender={(current) => {
                        const style = {};
                        if (current.date() === 1) {
                            style.border = '1px solid #1890ff';
                            style.borderRadius = '50%';
                        }
                        return (
                            <div className="ant-calendar-date" style={style}>
                                {current.date()}
                            </div>
                        );
                    }}
                />
                <RangePicker
                    dateRender={(current) => {
                        const style = {};
                        if (current.date() === 1) {
                            style.border = '1px solid #1890ff';
                            style.borderRadius = '50%';
                        }
                        return (
                            <div className="ant-calendar-date" style={style}>
                                {current.date()}
                            </div>
                        );
                    }}
                />
                <h3>总结</h3>
                <strong>
                    日期类组件包括以下四种形式。
                    1. DatePicker
                    2. MonthPicker
                    3. RangePicker
                    4. WeekPicker
                </strong>
            </div>
        );
    }
}