import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";

const MyCart = () => {
    const cart = useLoaderData();
    return (
        <div className="gdid grid-cols-1 gap-10">
            {
                cart.map(product => <CartProduct key={product._id} product={product}></CartProduct>)
            }
        </div>
    );
};

export default MyCart;