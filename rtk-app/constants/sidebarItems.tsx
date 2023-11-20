import { ISidebarItem } from '@/types';
import {
    UnorderedListOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import Link from 'next/link';

export const sidebarItems: MenuProps['items'] = [
    {
        key: '/',
        icon: <UnorderedListOutlined />,
        label: (
            <Link href="/">Todos</Link>
        ),
    },
    {
        key: '2',
        icon: <UnorderedListOutlined />,
        label: 'Menu',
        children: [
            {
                label: (
                    <Link href="/test">sub menu</Link>
                ),
                key: '/test',
            },
        ]
    },
]
