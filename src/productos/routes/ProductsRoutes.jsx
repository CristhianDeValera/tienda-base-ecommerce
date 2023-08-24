import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../page/HomePage"
import { ProductsDetails } from "../components/ProductsDetails"

export const ProductsRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/prenda/:titulo" element={<ProductsDetails />} />
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}

