import { Button } from 'antd'
import React, { useContext } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import { Layout, theme } from 'antd';
import { BaseLayoutContext } from './BaseLayout';
const { Header } = Layout;

function HeaderLayout() {
    const { collapsed, setCollapsed } = useContext(BaseLayoutContext);

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
            </Header>
        </>
    )
}

export default HeaderLayout