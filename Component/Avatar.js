import React from 'react';
import {Avatar, Button, Badge} from 'antd';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
export default class AvatarD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: UserList[0],
            color: colorList[0],
        };
    }

    changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
            user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
            color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
        });
    };
    render() {
        const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
        const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
        return (
            <div className="">
                <h2>头像有三种尺寸，两种形状可选。</h2>
                <div>
                    <Avatar size={64} icon="user" />
                    <Avatar size="large" icon="user" />
                    <Avatar icon="user" />
                    <Avatar size="small" icon="user" />
                </div>
                <div>
                    <Avatar shape="square" size={64} icon="user" />
                    <Avatar shape="square" size="large" icon="user" />
                    <Avatar shape="square" icon="user" />
                    <Avatar shape="square" size="small" icon="user" />
                </div>
                <h2>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</h2>
                <div>
                    <Avatar icon="user" />
                    <Avatar>U</Avatar>
                    <Avatar>USER</Avatar>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                </div>
                <h2>带徽标的头像</h2>
                <div>
                    <span style={{ marginRight: 24 }}>
                        <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
                    </span>
                    <span>
                        <Badge dot><Avatar shape="square" icon="user" /></Badge>
                    </span>
                </div>
                <h2>自动调整字符大小</h2>
                <div>
                    <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
                        {this.state.user}
                    </Avatar>
                    <Button size="small" style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={this.changeUser}>
                        Change
                    </Button>
                </div>
            </div>
        );
    }
}