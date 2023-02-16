import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function AdminLayout() {
    return (
        <div>
            <Dashboard />
            <Outlet />
        </div>
    )
}
