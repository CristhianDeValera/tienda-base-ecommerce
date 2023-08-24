import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../productos/page/HomePage"
import { ProductsRoutes } from "../productos/routes/ProductsRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { Header } from "../components/Header"
import { Sidebar } from "../productos/components/Sidebar"



export const AppRouter = () => {
    return (
        <>
            {/* <br></br> */}
            <Header />
            <Routes>
                <Route path="/cuenta/*" element={<AuthRoutes />} />
                <Route path="/*" element={<ProductsRoutes />}></Route>
            </Routes>
            <Sidebar />

        </>
    )
}


