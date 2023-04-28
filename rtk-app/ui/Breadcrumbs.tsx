import { IPath } from '@/types'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import React from 'react'


interface IBreadcrumbs {
    links: IPath[]
}

function AppBreadcrumbs({ links }: IBreadcrumbs) {
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <Link href="/">
                        <HomeOutlined />
                    </Link>
                </Breadcrumb.Item>
                {links?.map((link: IPath, index: number) => {
                    return (
                        <Breadcrumb.Item key={index} >
                            <Link href={link.href}>
                                {link.title}
                            </Link>
                        </Breadcrumb.Item>
                    )
                })}
            </Breadcrumb>
        </>
    )
}

export default AppBreadcrumbs;