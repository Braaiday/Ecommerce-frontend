import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'

const AdminLayout = () => {
    return (
        <div>
            <Dashboard >
                <Outlet />
            </Dashboard>
        </div>
    )
}

export default AdminLayout;
