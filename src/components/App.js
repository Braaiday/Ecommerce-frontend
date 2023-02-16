// Services and security
import { Link, Route, Routes } from "react-router-dom";
import RequireAuth from "../utils/RequireAuth";
import ThemeManager from "../utils/ThemeManger/ThemeManager";
import ApiBackdrop from "../API/ApiBackdrop/ApiBackdrop";
// Pages and elements
import AdminLayout from "./elements/AdminLayout/AdminLayout";
import StoreLayout from "./elements/StoreLayout/StoreLayout";
import PageLogin from "./pages/PageLogin/PageLogin";
import PageHome from "./pages/PageHome/PageHome";
import PageShop from "./pages/PageShop/PageShop";
import PageServices from "./pages/PageServices/PageServices";
import PageAbout from "./pages/PageAbout/PageAbout";
import PageContact from "./pages/PageContact/PageContact";
import PageRegister from "./pages/PageRegister/PageRegister";

function App() {
  return (
    <ThemeManager>
      <ApiBackdrop />
      <Routes >
        {/* These are user routes*/}
        <Route element={<StoreLayout />}>
          <Route path="/" element={<PageHome />} />
          <Route path="/shop" element={<PageShop />} />
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
            <Route path="/create" element={<>Create product</>} />
            <Route path="/orders" element={<>orders</>} />
          </Route>
        </Route>

        {/* These are miscellaneous routes */}
        <Route path="/login" element={<><PageLogin /></>} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/signup" element={<>signup page</>} />
        <Route path="/unauthorized" element={<>You either do not have access to this page or it does not exist.</>} />
        <Route path="*" element={<>You either do not have access to this page or it does not exist.</>} />
      </Routes>
    </ThemeManager>
  );
}

export default App;
