import React from 'react'
import { Route } from 'react-router-dom';
import RequireAuth from '../../Auth/RequireAuth';
import StoreLayout from '../../../components/elements/StoreLayout/StoreLayout'
import PageHome from '../../../components/pages/PageHome/PageHome';
import PageShop from '../../../components/pages/PageShop/PageShop';
import PageProduct from '../../../components/pages/PageProduct/PageProduct';
import PageServices from '../../../components/pages/PageServices/PageServices';
import PageAbout from '../../../components/pages/PageAbout/PageAbout';
import PageContact from '../../../components/pages/PageContact/PageContact';

export const CustomerRoutes = () => {
    return (
        <>
            <Route element={<StoreLayout />}>
                <Route path="/" element={<PageHome />} />
                <Route path="/shop" element={<PageShop />} />
                <Route path="/shop/:id" element={<PageProduct />} />
                <Route path="/services" element={<PageServices />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/contact" element={<PageContact />} />
                <Route element={<RequireAuth allowedRoles={["user"]} />}>
                    <Route path="/profile" element={<>Profile</>} />
                    <Route path="/myorders" element={<>Orders</>} />
                </Route>
            </Route>
        </>
    )
}
