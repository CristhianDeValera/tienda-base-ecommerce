import { listProductsApi } from "../../api/ProductosApi";
import { amountTotalProducto, cleanNumberProducto, listProducts_exito, listProducts_limpiar, listProducts_loading, montoFinalProducto, numberProducto, totalproducto_limpiar } from "./productoSlice";


export const cleanListProductAction = () => (dispatch) => {
    dispatch(listProducts_limpiar());
};

export const listProductsAction = () => async (dispatch) => {
    dispatch(listProducts_loading());
    try {
        let resul = await listProductsApi();
        const lista = resul.data;
        const newList = lista.map((items) => {
            items.title = items.title.replaceAll(" ", "-")
            return items
        });
        console.log("nueva consulta API");
        dispatch(listProducts_exito(lista));
    } catch (error) {
        alert(error)
    }
};


export const cleanTotalProductAction = () => (dispatch) => {
    dispatch(totalproducto_limpiar());
};

export const totalProductAction = (value) => (dispatch) => {
    try {
        dispatch(numberProducto(value))
    } catch (error) {
        alert(error);
    }
};

export const cleanNumberProductAction = () => (dispatch) => {
    try {
        dispatch(cleanNumberProducto());
    } catch (error) {
        alert(error);
    }
};

export const amountTotalProductAction = (value) => (dispatch) => {
    try {
        dispatch(amountTotalProducto(value));
    } catch (error) {
        alert(error);
    }
}

export const montoFinalProductAction = (value) => (dispatch) => {
    try {
        dispatch(montoFinalProducto(value));
    } catch (error) {
        alert(error);
    }
}




