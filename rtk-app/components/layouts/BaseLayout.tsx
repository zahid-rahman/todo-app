import React, { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';

const { Content } = Layout;
import { Typography } from 'antd';
import HeaderLayout from './HeaderLayout';
import Sidebar from './Sidebar';

type BaseLayoutContextType = {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>
}

export const BaseLayoutContext = createContext({} as BaseLayoutContextType)

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <BaseLayoutContext.Provider value={{ collapsed, setCollapsed }}>
                <>
                    <Sidebar />
                    <Layout>
                        <HeaderLayout />
                        <Content
                            style={{ margin: '24px 16px 0', overflow: 'initial' }}
                        >
                            {children}
                        </Content>
                    </Layout>
                </>
            </BaseLayoutContext.Provider>
        </Layout>
    );
};

export default BaseLayout;