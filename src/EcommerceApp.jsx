import { Provider } from "react-redux"
// import { Header } from "./components/Header"
// import { Sidebar } from "./productos/components/Sidebar"
import { AppRouter } from "./router/AppRouter"
import { store } from "./store/store"

export const EcommerceApp = () => {
    return (


        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}


