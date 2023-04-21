import React, { useContext } from 'react'
import { Layout, Menu, Typography } from 'antd';
import { BaseLayoutContext } from './BaseLayout';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { Title } = Typography;

function Sidebar() {
    const { collapsed } = useContext(BaseLayoutContext);
    return (
        <>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {collapsed ? <div style={{ margin: "5px", height: "10px" }}></div> : <Title style={{ color: "white", textAlign: "center", margin: "10px 0px" }}>
                    Logo
                </Title>}

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{
                        margin: "20px 0px"
                    }}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
        </>
    )
}

export default Sidebar