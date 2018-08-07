import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Button1 from './Component/Button1';
import Grid from './Component/Grid';
import AffixD from './Component/Affix';
import BreadcrumbD from './Component/Breadcrumb';
import DropdownD from './Component/Dropdown';
import DropdownD1 from './Component/Dropdown1';
import DropdownD2 from './Component/Dropdown2';
import MeauD from './Component/MeauD';
import MenuD1 from './Component/MenuD1';
import MenuD2 from './Component/MenuD2';
import MenuD3 from './Component/MenuD3';
import PaginationD1  from './Component/Pagination';
import StepsD from './Component/Steps'
import Complete from './Component/AutoComplete';
import CascaderD from './Component/Cascader';
import CheckboxD from './Component/Checkbox';
import DatePickerD from './Component/DatePicker';
import DatePickerD1 from './Component/DatePicker 1';
import FormD from './Component/Form1';
import LoginFrom from './Component/Login';
import WrappedRegistrationForm from './Component/RegistrationForm';
import Input1 from './Component/Input1';
import InputNumberD from './Component/InputNumber';
import BackTopD from './Component/BackTop';
import AlertD from './Component/Alert';
import DrawerD from './Component/Drawer';
import MessageD from './Component/Message';
import TransferD from './Component/Transfer';
import TransferSearch from './Component/TransferSearch';
import UploadD from './Component/Upload';
import EditableTableD from './Component/EditableTable';
import AvatarD from './Component/Avatar';
import ProgressD from './Component/Progress';
import TimelineD from './Component/Timeline';
import BadgeD from './Component/Badge';
import CollapseD from './Component/Collapse';
import SpinD from './Component/Spin';
import PopconfirmD from './Component/Popconfirm';
import NotificationD from './Component/Notification';
import AnchorD from './Component/Anchor';
import DividerD from './Component/Divider';
import LocaleProviderD from './Component/LocaleProvider';
import ModalD from './Component/Modal';



moment.locale('zh-cn');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + (date ? date.toString() : ''));
    this.setState({ date });
  }
  render() {
    return (
        <div>
            <LocaleProvider locale={zhCN}>
                <div style={{ width: 400, margin: '100px auto' }} className="">
                    <DatePicker onChange={value => this.handleChange(value)} />
                    <div style={{ marginTop: 20 }}>当前日期：{this.state.date && this.state.date.toString()}</div>
                </div>
            </LocaleProvider>
            <Button1/>
            <hr/>
            <Grid/>
            <AffixD/>
            <BreadcrumbD/>
            <DropdownD/>
            <DropdownD1/>
            <DropdownD2/>
            <MeauD/>
            <MenuD1/>
            <MenuD2/>
            <MenuD3/>
            <PaginationD1/>
            <StepsD/>
            <Complete/>
            <CascaderD/>
            <CheckboxD/>
            <h1>时间、日期</h1>
            <DatePickerD/>
            <DatePickerD1/>
            <FormD/>
            {/*<LoginFrom/>*/}
            {/*<WrappedRegistrationForm/>*/}
            <Input1/>
            <InputNumberD/>
            <BackTopD/>
            <AlertD/>
            <DrawerD/>
            <MessageD/>
            <TransferD/>
            <TransferSearch/>
            <h1>上传</h1>
            <UploadD/>
            <h1>表格</h1>
            <EditableTableD/>
            <h1>头像</h1>
            <AvatarD/>
            <h1>进度条</h1>
            <ProgressD/>
            <h1>时间轴</h1>
            <TimelineD/>
            <h1>徽标数</h1>
            <BadgeD/>
            <h1>折叠面板</h1>
            <CollapseD/>
            <h1>加载中</h1>
            <SpinD/>
            <h1>气泡确认框</h1>
            <PopconfirmD/>
            <h1>通知提醒框</h1>
            <NotificationD/>
            <h1>锚点</h1>
            <AnchorD/>
            <h1>分割线</h1>
            <DividerD/>
            <h1>国际化</h1>
            <LocaleProviderD/>
            <h1>模态对话框</h1>
            <ModalD/>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));