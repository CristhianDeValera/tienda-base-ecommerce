import { useParams } from "react-router-dom"
import { useProducts } from "../hooks/useProducts";
import { useToCart } from "../hooks/useToCart";

export const ProductsDetails = () => {
    const { titulo } = useParams();

    const [data, listarProductos] = useProducts();
    const [, , addProductCart, , ,] = useToCart();


    const producto = data?.find((item) => {
        return item.title === titulo
    });

    if (!producto) {
        return (
            <section className="h-full flex justify-center items-center">
                ...Cargando
            </section>
        )
    }

    const { id, image, category, title, price } = producto;

    return (
        <>
            <section className="py-80 md:pt-[1rem] pb-10 lg:py-[25rem] h-screen flex items-center justify-center">
                <div className="container mx-auto flex flex-col md:flex-row">
                    <div className="basis-3/5 flex justify-center lg:basis-3/5 p-5">
                        <img className="w-[30rem] lg:w-[35rem] md:px-1" src={image} />
                    </div>
                    <div className="basis-2/5 flex flex-col lg:basis-1/5 lg:pt-16">
                        <div className="flex flex-row justify-between">
                            <div className="font-semibold">{title}</div>
                            <div className="font-semibold">s/{price.toFixed(2)}</div>
                        </div>
                        <div className="flex-row">{category}</div>
                        <div className="flex-row mt-8">
                            <div className="flex flex-wrap gap-2">
                                <img className="max-w-[4rem] p-1" src={image} />
                                <img className="max-w-[4rem] p-1" src={image} />
                                <img className="max-w-[4rem] p-1" src={image} />
                                <img className="max-w-[4rem] p-1" src={image} />
                                <img className="max-w-[4rem] p-1" src={image} />
                                <img className="max-w-[4rem] p-1" src={image} />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mt-6">
                            <div className="font-semibold text__color">Seleccione la talla</div>
                            <div>Guia de tallas</div> {/*componente tallas */}
                        </div>
                        <div className="flex items-center justify-cente">
                            <div className="flex flex-wrap gap-2">
                                <label className="cursor-pointer border border-cyan-700">
                                    <input type="radio" className="peer sr-only" name="productotalla" />
                                    <div className="w-[4.5rem] text-center p-2 bg-white text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-white peer-checked:bg-cyan-600  hover:bg-cyan-700 hover:text-white">XS</div>
                                </label>
                                <label className="cursor-pointer border border-gray-700">
                                    <input type="radio" className="peer sr-only" name="productotalla" />
                                    <div className="w-[4.5rem] text-center p-2 bg-white text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-white peer-checked:bg-cyan-600  hover:bg-cyan-700 hover:text-white">S</div>
                                </label>
                                <label className="cursor-pointer border border-gray-700">
                                    <input type="radio" className="peer sr-only" name="productotalla" />
                                    <div className="w-[4.5rem] text-center p-2 bg-white text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-white peer-checked:bg-cyan-600  hover:bg-cyan-700 hover:text-white">M</div>
                                </label>
                                <label className="cursor-pointer border border-gray-700">
                                    <input type="radio" className="peer sr-only" name="productotalla" />
                                    <div className="w-[4.5rem] text-center p-2 bg-white text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-white peer-checked:bg-cyan-600  hover:bg-cyan-700 hover:text-white">L</div>
                                </label>
                                <label className="cursor-pointer border border-gray-700">
                                    <input type="radio" className="peer sr-only" name="productotalla" />
                                    <div className="w-[4.5rem] text-center p-2 bg-white text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-white peer-checked:bg-cyan-600  hover:bg-cyan-700 hover:text-white">XL</div>
                                </label>
                                <label className="cursor-pointer border border-gray-700">
                                    <input type="radio" className="peer sr-only" name="productotalla" />
                                    <div className="w-[4.5rem] text-center p-2 bg-white text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-white peer-checked:bg-cyan-600  hover:bg-cyan-700 hover:text-white">XXL</div>
                                </label>
                            </div>
                        </div>

                        <div className="py-10 sm:pb-16">
                            <button
                                onClick={() => addProductCart(producto, producto.id)}
                                className="rounded-full py-2 px-4 inline-flex items-center justify-center text-sm font-semibold bg-cyan-600 text-white w-full hover:bg-cyan-900 ">Agregar prenda</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


