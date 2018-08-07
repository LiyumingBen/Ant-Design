import React from 'react';
import { Alert } from 'antd';

export default class AlertD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }

    handleClose = () => {
        this.setState({ visible: false });
    };
    render() {

        return (
            <div className="">
                <h2>可口的图标让信息类型更加醒目</h2>
                <Alert message="Success Tips" type="success" showIcon />
                <Alert message="Informational Notes" type="info" showIcon />
                <Alert message="Warning" type="warning" showIcon />
                <Alert message="Error" type="error" showIcon />
                <Alert
                    message="Success Tips"
                    description="Detailed description and advices about successful copywriting."
                    type="success"
                    showIcon
                />
                <Alert
                    message="Informational Notes"
                    description="Additional description and informations about copywriting."
                    type="info"
                    showIcon
                />
                <Alert
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                    showIcon
                />
                <Alert
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                />
                <h2>含有辅助性文字介绍的警告提示</h2>
                <Alert
                message="Success Text"
                description="Success Description Success Description Success Description"
                type="success"
            />
                <Alert
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="info"
                />
                <Alert
                    message="Warning Text"
                    description="Warning Description Warning Description Warning Description Warning Description"
                    type="warning"
                />
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description"
                    type="error"
                />
                <h2>平滑、自然的卸载提示</h2>
                <div>
                    {
                        this.state.visible ? (
                                <Alert
                                    message="Alert Message Text"
                                    type="success"
                                    closable
                                    afterClose={this.handleClose}
                                />
                            ) : null
                    }
                    <p>placeholder text here</p>
                </div>
            </div>
        );
    }
}