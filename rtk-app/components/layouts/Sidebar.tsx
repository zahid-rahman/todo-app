import React, { useContext } from 'react'
import { Layout, Menu, Typography } from 'antd';
import { BaseLayoutContext } from './BaseLayout';
import {
    UnorderedListOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { sidebarItems } from '@/constants/sidebarItems';

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
                    items={sidebarItems}
                />
            </Sider>
        </>
    )
}

export default Sidebar