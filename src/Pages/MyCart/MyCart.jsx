import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const MyCart = () => {
    const cart = useLoaderData();
    const [carts, setCarts] = useState(cart);
    return (
        <div className="gdid grid-cols-1 gap-10">
            {
                carts.map(product => <CartProduct 
                    key={product._id} 
                    product={product}
                    carts={carts}
                    setCarts={setCarts}
                    ></CartProduct>)
            }
        </div>
    );
};

export default MyCart;