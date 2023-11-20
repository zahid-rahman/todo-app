import React, { useContext, useState } from 'react'
import { Layout, Menu, MenuProps, Typography } from 'antd';
import { BaseLayoutContext } from './BaseLayout';
import {
    UnorderedListOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { useSidebar } from '@/hooks/useSidebar';
import { sidebarItems } from '@/constants/sidebarItems';
import { useRouter } from 'next/router';

const { Sider } = Layout;
const { Title } = Typography;

function Sidebar() {
    const { collapsed } = useContext(BaseLayoutContext);
    // const { sidebarItems } = useSidebar()
    const router = useRouter()
    const [current, setCurrent] = useState(router.pathname);
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    return (
        <>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {collapsed ? <div style={{ margin: "5px", height: "10px" }}></div> : <Title style={{ color: "white", textAlign: "center", margin: "10px 0px" }}>
                    Logo
                </Title>}

                <Menu
                    theme="dark"
                    mode="inline"
                    onClick={onClick}
                    selectedKeys={[current]}
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