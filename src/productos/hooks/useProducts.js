import { useDispatch, useSelector } from "react-redux"
import { listProductsAction } from "../redux/productoThunks";

export const useProducts = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.producto.listProducts.data);
    const listarProductos = () => dispatch(listProductsAction());

    return [
        data,
        listarProductos,
    ]
}


