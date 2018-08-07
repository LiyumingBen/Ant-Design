import React from 'react';
import {Pagination} from 'antd';


export default class PaginationD1 extends React.Component {
    state = {
        current: 3,
    };

    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };

    showTotal = (total) => {
        return `Total ${total} items`;
    };

    onChange1 = (page) => {
        console.log(page);
        this.setState({
            current: page,
        });
    };
    itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        } if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };

    render() {
        return (
            <div>
                <hr/>
                <h1>基本分页</h1>
                <Pagination defaultCurrent={1} total={50} />
                <br/>
                <Pagination defaultCurrent={6} total={500} />
                <h1>改变每行条目数</h1>
                <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500}/>
                <h1>跳转</h1>
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
                <h1>迷你</h1>
                <Pagination size="small" total={50} />
                <Pagination size="small" total={50} showSizeChanger showQuickJumper />
                <Pagination size="small" total={50} showTotal={this.showTotal} />
                <h1>简单的翻页</h1>
                <Pagination simple defaultCurrent={2} total={50} />
                <h1>受控制的页码</h1>
                <Pagination current={this.state.current} onChange={this.onChange1} total={50} />
                <h1>上一步和下一步</h1>
                <Pagination total={500} itemRender={this.itemRender} />
            </div>
        );
    }
}
