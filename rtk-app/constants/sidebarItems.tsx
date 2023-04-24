interface ISidebarItem {
    key: string;
    icon: React.ReactNode;
    label: string;
}

import {
    UnorderedListOutlined,
} from '@ant-design/icons';

export const sidebarItems: ISidebarItem[] = [
    {
        key: '1',
        icon: <UnorderedListOutlined />,
        label: 'Todos',
    },
]