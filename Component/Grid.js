import React from 'react';
import { Row, Col, Layout } from 'antd';

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { Header, Footer, Sider, Content } = Layout;
        return (
            <div>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>

                {/*<h1>Layout</h1>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>

                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>

                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Content>Content</Content>
                        <Sider>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>

                <Layout>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>*/}
            </div>
        );
    }
}