import React from 'react'
import AppBreadcrumbs from './Breadcrumbs'
import { IPath } from '@/types'

interface IActionbar {
    breadcrumbLinks: IPath[];
    filterBar?: React.ReactNode;
    title: string;
}

function Actionbar({
    breadcrumbLinks,
    filterBar,
    title
}: IActionbar) {
    return (
        <>
            <div>
                <AppBreadcrumbs links={breadcrumbLinks} />
            </div>
            <div style={{
                display: "flex"
            }}>
                <div style={{
                    fontSize: "25px",
                    fontWeight: "300"
                }}>
                    {title}
                </div>

                <div style={{
                    marginLeft: "auto"
                }}>
                    {filterBar}
                </div>
            </div>
        </>

    )
}

export default Actionbar