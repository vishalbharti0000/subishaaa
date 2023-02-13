import { Routes, Route } from "react-router-dom";
import { lazy } from "@loadable/component";

import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AuthGuard from "./utils/AuthGuard";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const ContactFormPage = lazy(() => import("./pages/ContactFormPage/ContactFormPage"));
const ProductFormPage = lazy(() => import("./pages/ProductFormPage/ProductFormPage"));
const PersonPage = lazy(() => import("./pages/PersonPage/PersonPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const DeliveryDetailsPage = lazy(() => import("./pages/DeliveryDetailsPage/DeliveryDetailsPage"));
const MyOrdersPage = lazy(() => import("./pages/MyOrdersPage/MyOrdersPage"));
const OrdersAdminPage = lazy(() => import("./pages/OrdersAdminPage/OrdersAdminPage"));

const Routing = () => {
    return (
        <Routes>
            <Route path="" element={<HomePage />}>
                <Route path="" element={<LandingPage />} />
                {/* <Route path="/products" element={<ProductsPage />} /> */}
                <Route
                    path="/products/:product"
                    element={<ProductsPage />}
                />
                <Route path="/contact-form" element={<ContactFormPage />} />
                <Route
                    path="/aboutus"
                    element={
                        <AboutUsPage />
                    }
                />
                <Route
                    path="/orderDetails/:productId/:amount"
                    element={
                        <AuthGuard>
                            <DeliveryDetailsPage />
                        </AuthGuard>
                    }
                />
                <Route
                    path="/myorders"
                    element={
                        <AuthGuard>
                            <MyOrdersPage />
                        </AuthGuard>
                    }
                />
                {/* <Route path="/aboutus" element={<AboutUsPage />} /> */}
                <Route
                    path="/admin/orders/status/:sts"
                    element={
                        <AuthGuard>
                            <OrdersAdminPage />
                        </AuthGuard>
                    }
                />
                <Route path="/admin/product-form" element={
                    <AuthGuard>
                        <ProductFormPage />
                    </AuthGuard>
                    } 
                />
                <Route path="/admin/contactus/persons" element={
                    <AuthGuard>
                        <PersonPage />
                    </AuthGuard>
                    } 
                />

                <Route path="register" element={<RegistrationPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<ErrorPage errorType={"4xx"} />} />
            </Route>
        </Routes>
    );
};

export default Routing;
