import { ISidebarItem } from "@/types";
import { UnorderedListOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

export const useSidebar = () => {
    const sidebarItems: MenuProps['items'] = [
        {
            key: '1',
            icon: <UnorderedListOutlined />,
            label: 'Todos',
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
                    key: 'setting:1',
                },
            ]
        },
    ]

    return {
        sidebarItems
    }
}