import { Routes, Route } from "react-router-dom";
import { lazy } from "@loadable/component";

import ErrorPage from "./pages/ErrorPage/ErrorPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const ContactFormPage = lazy(() => import("./pages/ContactFormPage/ContactFormPage"));
const ProductFormPage = lazy(() => import("./pages/ProductFormPage/ProductFormPage"));
const PersonPage = lazy(() => import("./pages/PersonPage/PersonPage"));

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

                <Route path="/admin/product-form" element={<ProductFormPage />} />
                <Route path="/admin/persons" element={<PersonPage />} />

                <Route path="*" element={<ErrorPage errorType={"4xx"} />} />
            </Route>
        </Routes>
    );
};

export default Routing;
