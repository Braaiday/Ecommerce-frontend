import React from 'react';
import { Route } from 'react-router-dom';
import PageAddProducts from '../../../components/pages/PageAddProducts/PageAddProducts';
import RequireAuth from '../../Auth/RequireAuth';
import AdminLayout from '../../../components/elements/AdminLayout/AdminLayout'

export const AdminRoutes = () => {
    return (
        <>
            <Route element={<AdminLayout />}>
                <Route element={<RequireAuth allowedRoles={["admin"]} />}>
                    <Route path="/dashboard" element={<>Dashboard</>} />
                    <Route path="/add" element={<PageAddProducts />} />
                    <Route path="/orders" element={<>orders</>} />
                    <Route path="/view" element={<>Products</>} />
                    <Route path="/edit" element={<>edit</>} />
                    <Route path="/update" element={<>update</>} />
                </Route>
            </Route>
        </>
    )
}
