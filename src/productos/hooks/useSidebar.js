import { useDispatch, useSelector } from "react-redux"
import { openSidebarAccion } from "../redux/sidebarThunks";
import { cleanNumberProductAction, montoFinalProductAction } from "../redux/productoThunks";
import { useEffect } from "react";



export const useSidebar = () => {
    const dispatch = useDispatch();
    const psetSidebar = useSelector(state => state.sidebar.setSidebar);
    const ptotalamountproduc = useSelector(state => state.producto.cartShopping.totalamount);
    const pnumberproducttotal = useSelector(state => state.producto.cartShopping.numberproduct);
    const pmontototalproduct = useSelector(state => state.producto.cartShopping.totalproduct);

    useEffect(() => {
        if (pnumberproducttotal) {
            const total = pnumberproducttotal?.reduce((acc, item) => {
                return acc + item.price * item.amount
            }, 0);
            montoTotalProductos(total);
        }
    }, [pnumberproducttotal]);

    const showSidebar = (date) => dispatch(openSidebarAccion(date));
    const clearCartProduct = () => dispatch(cleanNumberProductAction());
    const montoTotalProductos = (value) => dispatch(montoFinalProductAction(value));

    return [
        psetSidebar,
        ptotalamountproduc,
        pnumberproducttotal,
        pmontototalproduct,
        showSidebar,
        clearCartProduct,
    ]
}

