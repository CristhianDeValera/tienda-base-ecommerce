
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useSidebar } from "../hooks/useSidebar";
import { CartItem } from "./CartItem";


export const Sidebar = () => {

    const [psetSidebar, ptotalamountproduc, pcantidadproduct, pmontototalproduct, showSidebar, clearCartProduct] = useSidebar();

    return (
        <div className={`${psetSidebar ? 'right-0' : '-right-[100%]'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[25vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 mt-[4.3rem] lg:px-[35px]`}>
            <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-sm font-semibold">Productos seleccionados: {ptotalamountproduc}</div>
                <div
                    onClick={() => showSidebar(false)}
                    className="cursor-pointer w-8 h-8 flex justify-center items-center">
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>
            <div
                className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b"
            >
                {
                    pcantidadproduct?.map((item) => {
                        return (
                            <CartItem item={item} key={item.id} />
                        )
                    })
                }
            </div>

            <div className="flex flex-col">
                <div className="flex w-full justify-between items-center">
                    <div className="uppercase font-semibold">
                        <span className="">Total:</span>s/{parseFloat(pmontototalproduct).toFixed(2)}
                    </div>
                    <div
                        onClick={() => clearCartProduct()}
                        className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
                    >
                        <FiTrash2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

