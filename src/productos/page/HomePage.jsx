import { useEffect } from "react";
import { useProducts } from "../hooks/useProducts"
import { Product } from "../components/Product";

export const HomePage = () => {

    const [data, listarProductos] = useProducts();

    useEffect(() => {
        listarProductos();
    }, []);

    return (
        <div className="bg-slate-200">
            <section className="py-28">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] bg-slate-200">
                        {
                            data.map((produc) => {
                                return (
                                    <Product key={produc.id} product={produc} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}


