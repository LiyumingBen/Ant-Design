import React from 'react';
import {LocaleProvider, Pagination, Radio} from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Page from './Page';
moment.locale('en');

let forceRerender = 0;
export default class LocaleProviderD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: null,
        };
    }

    changeLocale = (e) => {
        const localeValue = e.target.value;
        this.setState({ locale: localeValue });
        if (!localeValue) {
            moment.locale('en');
        } else {
            moment.locale('zh-cn');
        }
    };
    render() {
        const App = () => (
            <div>
                <Pagination defaultCurrent={1} total={50} showSizeChanger />
            </div>
        );
        return (
            <div className="">
                <LocaleProvider locale={zhCN}>
                    <App />
                </LocaleProvider>
                <div>
                    <div className="change-locale">
                        <span style={{ marginRight: 16 }}>Change locale of components: </span>
                        <Radio.Group defaultValue={undefined} onChange={this.changeLocale}>
                            <Radio.Button key="en" value={undefined}>English</Radio.Button>
                            <Radio.Button key="cn" value={zhCN}>中文</Radio.Button>
                        </Radio.Group>
                    </div>
                    <LocaleProvider locale={this.state.locale}>
                        <Page key={forceRerender++ /* HACK: just refresh in production environment */} />
                    </LocaleProvider>
                </div>
            </div>
        );
    }
}