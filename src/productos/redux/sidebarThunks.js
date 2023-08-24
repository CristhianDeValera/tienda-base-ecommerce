import { openSidebar } from "./sidebarSlice";


export const openSidebarAccion = (date) => (dispatch) => {
    dispatch(openSidebar(date));
}