// Services and security
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
            <Route path="/profile" element={<>Profile</>} />
            <Route path="/myorders" element={<>Orders</>} />
          </Route>
        </Route>

        {/* These are admin routes */}
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

        {/* These are miscellaneous routes */}
        <Route path="/login" element={<><PageLogin /></>} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/unauthorized" element={<>You either do not have access to this page or it does not exist.</>} />
        <Route path="*" element={<>You either do not have access to this page or it does not exist.</>} />
      </Routes>
    </ThemeManager>
  );
}

export default App;
