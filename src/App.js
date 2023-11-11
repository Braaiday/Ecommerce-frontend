import { Route, Routes } from "react-router-dom";
import RequireAuth from "./utils/Auth/RequireAuth";
import ThemeManager from "./utils/ThemeManger/ThemeManager";
import ApiBackdrop from "./API/ApiBackdrop/ApiBackdrop";
import AdminLayout from "./components/elements/AdminLayout/AdminLayout";
import StoreLayout from "./components/elements/StoreLayout/StoreLayout";
import PageLogin from "./components/pages/PageLogin/PageLogin";
import PageHome from "./components/pages/PageHome/PageHome";
import PageShop from "./components/pages/PageShop/PageShop";
import PageServices from "./components/pages/PageServices/PageServices";
import PageAbout from "./components/pages/PageAbout/PageAbout";
import PageContact from "./components/pages/PageContact/PageContact";
import PageRegister from "./components/pages/PageRegister/PageRegister";
import PageAddProducts from "./components/pages/PageAddProducts/PageAddProducts";
import PageProduct from "./components/pages/PageProduct/PageProduct";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { configureAxiosInstance } from "./API/axiosConfig";
import { actionToggleBackdrop } from "./reducers/shared/actions/actions";
import { PageProfile } from "./components/pages/PageProfile/PageProfile";
import { PageOrders } from "./components/pages/PageOrders/PageOrders";
import { PageDashboard } from "./components/pages/PageDashboard/PageDashboard";
import { PageManageOrders } from "./components/pages/PageManageOrders/PageManageOrders";
import { PageViewProducts } from "./components/pages/PageViewProducts/PageViewProducts";
import { PageEditProducts } from "./components/pages/PageEditProducts/PageEditProducts";
import { PageUnAuthorized } from "./components/pages/PageUnAuthorized/PageUnAuthorized";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    configureAxiosInstance(
      () => dispatch(actionToggleBackdrop())
    );
  }, []);

  return (
    <ThemeManager>
      <ApiBackdrop />
      <Routes >
        {/* These are user routes*/}
        <Route element={<StoreLayout />}>
          <Route path="/" element={<PageHome />} />
          <Route path="/shop" element={<PageShop />} />
          <Route path="/shop/:id" element={<PageProduct />} />
          <Route path="/services" element={<PageServices />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/contact" element={<PageContact />} />
          <Route element={<RequireAuth allowedRoles={["user"]} />}>
            <Route path="/profile" element={<PageProfile />} />
            <Route path="/myorders" element={<PageOrders />} />
          </Route>
        </Route>

        {/* These are admin routes */}
        <Route element={<AdminLayout />}>
          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path="/dashboard" element={<PageDashboard />} />
            <Route path="/add" element={<PageAddProducts />} />
            <Route path="/orders" element={<PageManageOrders />} />
            <Route path="/view" element={<PageViewProducts />} />
            <Route path="/edit" element={<PageEditProducts />} />
          </Route>
        </Route>

        {/* These are miscellaneous routes */}
        <Route path="/login" element={<><PageLogin /></>} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/unauthorized" element={<PageUnAuthorized />} />
      </Routes>
    </ThemeManager>
  );
}

export default App;
