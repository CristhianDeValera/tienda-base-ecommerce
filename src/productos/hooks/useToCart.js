import { useDispatch, useSelector } from "react-redux"
import { amountTotalProductAction, totalProductAction } from "../redux/productoThunks";
import { useEffect } from "react";



export const useToCart = () => {
    const dispatch = useDispatch();
    const ptotalamount = useSelector(state => state.producto.cartShopping.totalamount);
    const pnumberproduct = useSelector(state => state.producto.cartShopping.numberproduct);

    useEffect(() => {
        if (pnumberproduct) {
            const total = pnumberproduct.reduce((acc, item) => {
                return acc + item.amount;
            }, 0);
            addTotalProduct(total)
        }
    }, [pnumberproduct]);


    const addProductCart = (produc, id) => {
        const newItem = { ...produc, amount: 1 };
        const cartItem = pnumberproduct?.find((item) => item.id === id);

        if (cartItem) {
            const newCart = [...pnumberproduct].map(item => {
                if (item.id === id) return { ...item, amount: cartItem.amount + 1 }
                return item;
            });
            dispatch(totalProductAction(newCart));
        } else {
            dispatch(totalProductAction([...pnumberproduct, newItem]));
        }
    };

    const addTotalProduct = (value) => dispatch(amountTotalProductAction(value));

    const removeProductCart = (id) => {
        const nuevaSeleccion = pnumberproduct.filter(item => item.id !== id);
        dispatch(totalProductAction(nuevaSeleccion));
    }

    const incrementCantidad = (id) => {
        const nuevaCantidadProducto = pnumberproduct.filter(item => item.id === id);
        addProductCart(nuevaCantidadProducto, id);
    };

    const decrementCantidad = (id) => {
        const cartItem = pnumberproduct?.find((item) => item.id === id);

        if (cartItem) {
            const newProductos = pnumberproduct.map(item => {
                if (item.id === id) {
                    return { ...item, amount: item.amount - 1 }
                } else {
                    return item;
                }
            });
            dispatch(totalProductAction(newProductos));
        }
        if (cartItem.amount < 2) {
            removeProductCart(id)
        }
    };

    return [
        ptotalamount,
        pnumberproduct,
        addProductCart,
        removeProductCart,
        incrementCantidad,
        decrementCantidad
    ]
}





