import React from 'react';
import { DatePicker, Radio } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
export default class DatePickerD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'default',
            startValue: null,
            endValue: null,
            endOpen: false,
        };
    }


    onChange = (date, dateString) =>{
        console.log(date, dateString);
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    };

    onChange1 = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    onOk = (value) => {
        console.log('onOk: ', value);
    };

    range = (start, end) => {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    };

    disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    };

    disabledDateTime = () => {
        return {
            disabledHours: () => this.range(0, 24).splice(4, 20),
            disabledMinutes: () => this.range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    };

    disabledRangeTime = (_, type) =>{
        if (type === 'start') {
            return {
                disabledHours: () => this.range(0, 60).splice(4, 20),
                disabledMinutes: () => this.range(30, 60),
                disabledSeconds: () => [55, 56],
            };
        }
        return {
            disabledHours: () => this.range(0, 60).splice(20, 4),
            disabledMinutes: () => this.range(0, 31),
            disabledSeconds: () => [55, 56],
        };
    };

    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange2 = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    onStartChange = (value) => {
        this.onChange2('startValue', value);
    };

    onEndChange = (value) => {
        this.onChange2('endValue', value);
    };

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    };
    render() {
        const dateFormat = 'YYYY/MM/DD';
        const monthFormat = 'YYYY/MM';
        const { size } = this.state;
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div>
                <h2>基本</h2>
                <DatePicker onChange={this.onChange} />
                <br />
                <MonthPicker onChange={this.onChange} placeholder="Select month" />
                <br />
                <RangePicker onChange={this.onChange} />
                <br />
                <WeekPicker onChange={this.onChange} placeholder="Select week" />
                <h2>日期格式</h2>
                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                <br />
                <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
                <br />
                <RangePicker
                    defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                    format={dateFormat}
                />
                <h2>三种大小</h2>
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br /><br />
                <DatePicker size={size} />
                <br />
                <MonthPicker size={size} placeholder="Select Month" />
                <br />
                <RangePicker size={size} />
                <br />
                <WeekPicker size={size} placeholder="Select Week" />
                <h2>日期时间选择</h2>
                <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="Select Time"
                    onChange={this.onChange1}
                    onOk={this.onOk}
                />
                <br />
                <RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    placeholder={['Start Time', 'End Time']}
                    onChange={this.onChange1}
                    onOk={this.onOk}
                />
                <h2>不可选择日期和时间</h2>
                <p>
                    可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。
                </p>
                <DatePicker
                    format="YYYY-MM-DD HH:mm:ss"
                    disabledDate={this.disabledDate}
                    disabledTime={this.disabledDateTime}
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                />
                <br />
                <MonthPicker disabledDate={this.disabledDate} placeholder="Select month" />
                <br />
                <RangePicker
                    disabledDate={this.disabledDate}
                    disabledTime={this.disabledRangeTime}
                    showTime={{
                        hideDisabledOptions: true,
                        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
                    }}
                    format="YYYY-MM-DD HH:mm:ss"
                />
                <h2>自定义日期范围选择</h2>
                <p>
                    当 RangePicker 无法满足业务需求时，可以使用两个 DatePicker 实现类似的功能。
                    通过设置 disabledDate 方法，来约束开始和结束日期。
                    通过 open onOpenChange 来优化交互。
                </p>
                <DatePicker
                    disabledDate={this.disabledStartDate}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={startValue}
                    placeholder="Start"
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                />
                <DatePicker
                    disabledDate={this.disabledEndDate}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={endValue}
                    placeholder="End"
                    onChange={this.onEndChange}
                    open={endOpen}
                    onOpenChange={this.handleEndOpenChange}
                />
            </div>
        );
    }
}